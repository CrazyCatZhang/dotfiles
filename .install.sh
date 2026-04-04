#!/bin/bash

# ============================================================
# macOS Bootstrap Script
# ============================================================
# Architecture:
#   Homebrew + Brewfile  → system-level CLI tools, casks, MAS apps, VSCode extensions
#   mise                 → language runtimes (node, python, go, java, ruby...)
#   npm -g               → JS/TS dev tools (managed via .npm-globals)
#   pipx                 → Python CLI tools
#   rustup               → Rust toolchain
#   cargo                → Rust-based tools (fd, rg, rust-analyzer...)
#   stow                 → dotfiles symlinks
#
# Usage:
#   curl -fsSL <raw-url> | bash        # or
#   cd ~/dotfiles && bash .install.sh
# ============================================================

set -euo pipefail
trap 'echo "Error at line $LINENO: $BASH_COMMAND"' ERR

# ====================
# Config
# ====================
readonly LOG_FILE="$HOME/install.log"
readonly GITHUB_DOTFILES="git@github.com:CrazyCatZhang/dotfiles.git"
readonly DOTFILES_DIR="$HOME/dotfiles"
readonly FONTS_DIR="$HOME/Library/Fonts"
readonly CONFIG_DIR="$HOME/.config"
readonly WORKSPACE_DIR="$HOME/workspace"

# npm global tools (JS ecosystem → npm, not brew)
readonly NPM_GLOBALS=(
    "gitmoji-cli"
    "http-server"
    "lerna"
    "markdownlint-cli"
    "typescript"
    "vercel"
)

# ====================
# Utilities
# ====================
log_info()    { echo "[$(date '+%H:%M:%S')] [INFO]    $1" | tee -a "$LOG_FILE"; }
log_success() { echo "[$(date '+%H:%M:%S')] [SUCCESS] $1" | tee -a "$LOG_FILE"; }
log_error()   { echo "[$(date '+%H:%M:%S')] [ERROR]   $1" | tee -a "$LOG_FILE"; }

step() {
    local step_num=$1
    local step_name=$2
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  Step $step_num: $step_name"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

# ====================
# Step 1: System check
# ====================
check_system() {
    step 1 "System check"

    if [[ "$(uname)" != "Darwin" ]]; then
        log_error "This script only supports macOS"
        exit 1
    fi
    log_info "macOS $(sw_vers -productVersion) detected"
}

# ====================
# Step 2: Xcode CLI Tools
# ====================
install_xcode_cli_tools() {
    step 2 "Xcode Command Line Tools"

    if xcode-select -p &>/dev/null; then
        log_info "Already installed"
    else
        log_info "Installing..."
        xcode-select --install
        echo "Press ENTER after Xcode CLI tools installation completes..."
        read -r
    fi
}

# ====================
# Step 3: Homebrew + Brewfile
# ====================
setup_homebrew() {
    step 3 "Homebrew + Brewfile (all system packages)"

    # Install Homebrew
    if ! command -v brew &>/dev/null; then
        log_info "Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        # Activate brew for current session
        if [[ -f /opt/homebrew/bin/brew ]]; then
            eval "$(/opt/homebrew/bin/brew shellenv)"  # Apple Silicon
        else
            eval "$(/usr/local/bin/brew shellenv)"     # Intel
        fi
    fi
    brew analytics off

    # Install everything from Brewfile
    if [[ -f "$DOTFILES_DIR/Brewfile" ]]; then
        log_info "Installing from Brewfile (formulae, casks, MAS apps, VSCode extensions)..."
        brew bundle install --file="$DOTFILES_DIR/Brewfile" --no-lock || {
            log_error "Some Brewfile entries failed (non-fatal)"
        }
    else
        log_error "Brewfile not found at $DOTFILES_DIR/Brewfile"
        return 1
    fi

    brew cleanup
    log_success "Homebrew setup complete"
}

# ====================
# Step 4: Dotfiles (stow)
# ====================
setup_dotfiles() {
    step 4 "Dotfiles"

    if [[ ! -d "$DOTFILES_DIR/.git" ]]; then
        log_info "Cloning dotfiles..."
        git clone "$GITHUB_DOTFILES" "$DOTFILES_DIR" || {
            log_error "Failed to clone dotfiles"
            return 1
        }
    else
        log_info "Dotfiles repo already exists"
    fi

    # Remove existing files that would conflict with stow
    local files_to_remove=(
        "$HOME/.zshrc"
        "$HOME/.gitconfig"
        "$HOME/.gitignore_global"
        "$HOME/.tmux.conf"
    )
    for f in "${files_to_remove[@]}"; do
        [[ -f "$f" && ! -L "$f" ]] && rm -f "$f"
    done

    # Stow dotfiles
    cd "$DOTFILES_DIR" && stow . || {
        log_error "stow failed"
        return 1
    }

    log_success "Dotfiles linked"
}

# ====================
# Step 5: mise (runtime manager)
# ====================
setup_mise() {
    step 5 "mise (node, python, and other runtimes)"

    if ! command -v mise &>/dev/null; then
        log_error "mise not found (should be installed via Brewfile)"
        return 1
    fi

    # Global config: ~/.config/mise/config.toml
    mkdir -p "$CONFIG_DIR/mise"
    if [[ ! -f "$CONFIG_DIR/mise/config.toml" ]]; then
        cat > "$CONFIG_DIR/mise/config.toml" << 'TOML'
[tools]
node = "22"
python = "3.14"
TOML
    fi

    # Install runtimes declared in config
    log_info "Installing runtimes from config.toml..."
    mise install --yes

    # Also install Node 18 LTS (for projects that need it)
    mise install node@18 --yes

    log_success "mise runtimes installed"
}

# ====================
# Step 6: npm global tools
# ====================
setup_npm_globals() {
    step 6 "npm global tools (JS ecosystem)"

    # Activate mise for current session
    eval "$(mise activate bash)"

    log_info "Installing: ${NPM_GLOBALS[*]}"
    npm install -g "${NPM_GLOBALS[@]}" || {
        log_error "Some npm packages failed"
    }

    log_success "npm globals installed"
}

# ====================
# Step 7: Rust environment
# ====================
setup_rust() {
    step 7 "Rust (rustup + cargo tools)"

    if ! command -v rustup &>/dev/null; then
        log_error "rustup not found (should be installed via Brewfile)"
        return 1
    fi

    # Initialize default toolchain
    rustup default stable

    # Create proxy shims in ~/.cargo/bin
    # (brew's rustup doesn't create these automatically)
    mkdir -p "$HOME/.cargo/bin"
    for tool in rustc cargo cargo-clippy cargo-fmt clippy-driver rustdoc rustfmt; do
        ln -sf "$(which rustup)" "$HOME/.cargo/bin/$tool" 2>/dev/null
    done

    # Install cargo tools
    local cargo_packages=(
        "fd-find"
        "ripgrep"
        "selene"
    )
    for package in "${cargo_packages[@]}"; do
        cargo install "$package" || log_error "Failed: $package"
    done

    # rust-analyzer via rustup (official way)
    rustup component add rust-analyzer 2>/dev/null || true

    log_success "Rust environment ready"
}

# ====================
# Step 8: Fonts
# ====================
install_fonts() {
    step 8 "Fonts"

    mkdir -p "$FONTS_DIR"

    # sketchybar font
    curl -L "https://github.com/kvndrsslr/sketchybar-app-font/releases/download/v2.0.5/sketchybar-app-font.ttf" \
         -o "$FONTS_DIR/sketchybar-app-font.ttf" 2>/dev/null || log_error "sketchybar font failed"

    # SF Mono Nerd Font
    if [[ ! -f "$FONTS_DIR/SFMonoNerdFont-Regular.otf" ]]; then
        git clone "git@github.com:shaunsingh/SFMono-Nerd-Font-Ligaturized.git" /tmp/SFMono_Nerd_Font 2>/dev/null && {
            mv /tmp/SFMono_Nerd_Font/*.otf "$FONTS_DIR/" 2>/dev/null
            rm -rf /tmp/SFMono_Nerd_Font
        } || log_error "SF Mono font failed"
    fi

    log_success "Fonts installed"
}

# ====================
# Step 9: Development tools
# ====================
setup_dev_tools() {
    step 9 "Development tools"

    # SbarLua
    if [[ ! -f /usr/local/lib/lua/5.4/sketchybar.so ]]; then
        log_info "Installing SbarLua..."
        git clone https://github.com/FelixKratz/SbarLua.git /tmp/SbarLua 2>/dev/null && {
            cd /tmp/SbarLua && make install
            rm -rf /tmp/SbarLua
        } || log_error "SbarLua failed"
    fi

    # LunarVim
    if ! command -v lvim &>/dev/null; then
        log_info "Installing LunarVim..."
        bash <(curl -s "https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh") || {
            log_error "LunarVim installation failed"
        }
    fi

    # Java debug support
    if [[ ! -d "$CONFIG_DIR/lvim/.java-debug" ]]; then
        log_info "Setting up Java debug..."
        mkdir -p "$WORKSPACE_DIR"
        git clone git@github.com:microsoft/java-debug.git "$CONFIG_DIR/lvim/.java-debug" 2>/dev/null && {
            cd "$CONFIG_DIR/lvim/.java-debug" && ./mvnw clean install
        } || log_error "java-debug failed"
    fi

    if [[ ! -d "$CONFIG_DIR/lvim/.vscode-java-test" ]]; then
        log_info "Setting up Java test..."
        eval "$(mise activate bash)"
        git clone git@github.com:microsoft/vscode-java-test.git "$CONFIG_DIR/lvim/.vscode-java-test" 2>/dev/null && {
            cd "$CONFIG_DIR/lvim/.vscode-java-test" && npm install && npm run build-plugin
        } || log_error "vscode-java-test failed"
    fi

    log_success "Dev tools ready"
}

# ====================
# Step 10: macOS defaults
# ====================
setup_macos_defaults() {
    step 10 "macOS system preferences"

    # Network
    defaults write com.apple.NetworkBrowser BrowseAllInterfaces 1
    defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true

    # Dock
    defaults write com.apple.dock autohide -bool true
    defaults write com.apple.dock "mru-spaces" -bool false
    defaults write com.apple.dock springboard-rows -int 6
    defaults write com.apple.dock springboard-columns -int 8
    defaults write com.apple.dock mineffect -string genie

    # System
    defaults write NSGlobalDomain NSAutomaticWindowAnimationsEnabled -bool false
    defaults write com.apple.LaunchServices LSQuarantine -bool false
    defaults write NSGlobalDomain com.apple.swipescrolldirection -bool false
    defaults write NSGlobalDomain KeyRepeat -int 1
    defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false
    defaults write NSGlobalDomain AppleShowAllExtensions -bool true
    defaults write NSGlobalDomain _HIHideMenuBar -bool true

    # Finder
    defaults write com.apple.finder DisableAllAnimations -bool true
    defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool false
    defaults write com.apple.finder ShowHardDrivesOnDesktop -bool false
    defaults write com.apple.finder ShowMountedServersOnDesktop -bool false
    defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool false
    defaults write com.apple.Finder AppleShowAllFiles -bool true

    # Safari
    defaults write com.apple.Safari AutoOpenSafeDownloads -bool false
    defaults write com.apple.Safari IncludeDevelopMenu -bool true

    log_success "macOS defaults applied"
}

# ====================
# Step 11: Start services
# ====================
start_services() {
    step 11 "System services"

    local services=("skhd" "yabai" "sketchybar" "svim")

    for service in "${services[@]}"; do
        brew services start "$service" 2>/dev/null || log_error "Failed to start: $service"
    done

    log_success "Services started"
}

# ====================
# Step 12: Secrets reminder
# ====================
remind_secrets() {
    step 12 "Post-install reminders"

    echo ""
    echo "  Manual steps needed:"
    echo "  ─────────────────────────────────────────────"
    echo "  1. Create ~/.secrets with your API keys:"
    echo "     echo 'export GOOGLE_API_KEY=xxx' > ~/.secrets"
    echo ""
    echo "  2. Restart your terminal (or run: exec zsh)"
    echo ""
    echo "  3. Verify everything:"
    echo "     mise list              # check runtimes"
    echo "     node -v && python3 -v  # check versions"
    echo "     brew bundle check      # check Brewfile"
    echo ""
}

# ====================
# Main
# ====================
main() {
    touch "$LOG_FILE"
    echo ""
    echo "  macOS Bootstrap"
    echo "  ══════════════════════════════════════════════"
    echo "  Architecture:"
    echo "    Brewfile     → brew/cask/MAS/VSCode/Go tools"
    echo "    mise         → node, python, (go, java, ruby)"
    echo "    npm -g       → JS dev tools"
    echo "    rustup+cargo → Rust toolchain"
    echo "    stow         → dotfiles"
    echo "  ══════════════════════════════════════════════"
    echo ""

    read -p "  Continue? (y/N) " -n 1 -r
    echo
    [[ ! $REPLY =~ ^[Yy]$ ]] && exit 0

    check_system
    install_xcode_cli_tools
    setup_homebrew           # Brewfile: all brew/cask/MAS/VSCode
    setup_dotfiles           # stow: symlink configs
    setup_mise               # mise: node, python runtimes
    setup_npm_globals        # npm -g: JS tools
    setup_rust               # rustup + cargo tools
    install_fonts
    setup_dev_tools          # SbarLua, LunarVim, Java support
    setup_macos_defaults
    start_services
    remind_secrets

    echo ""
    log_success "All done! Restart your terminal."
    echo ""
}

main "$@"
