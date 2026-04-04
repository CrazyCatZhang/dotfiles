local spaces = require("hs.spaces")

-- 1. 必须先定义函数，再进行绑定
local function toggleApp(bundleID)
    local app = hs.application.get(bundleID)
    
    local function moveWindow(targetApp)
        local win = targetApp:mainWindow()
        if not win then return end
        if win:isFullScreen() then win:setFullScreen(false) end

        local space = spaces.activeSpaceOnScreen()
        local mainScreen = hs.screen.mainScreen()
        local scrFrame = mainScreen:fullFrame()

        -- 保持你喜欢的 8px 留白布局
        local targetFrame = {
            x = scrFrame.x + 8,
            y = scrFrame.y + 20,
            w = scrFrame.w - 16,
            h = scrFrame.h - 38
        }

        win:setFrame(targetFrame, 0)
        spaces.moveWindowToSpace(win, space)
        win:focus()
    end

    if app and app:isFrontmost() then
        app:hide()
    else
        if not app then
            -- 冷启动逻辑
            hs.application.launchOrFocusByBundleID(bundleID)
            local watcher = nil
            watcher = hs.application.watcher.new(function(name, event, launchedApp)
                if event == hs.application.watcher.launched and launchedApp:bundleID() == bundleID then
                    watcher:stop()
                    hs.timer.doAfter(0.5, function() moveWindow(launchedApp) end)
                end
            end):start()
        else
            -- 热启动逻辑
            moveWindow(app)
        end
    end
end

-- 2. 绑定快捷键 (请严格检查这部分)

-- 1. 按 Home 唤起 Kitty
hs.hotkey.bind({}, 'f18', function()
    toggleApp('net.kovidgoyal.kitty')
end)

-- 2. 按 Cmd + Esc 唤起 Claude
hs.hotkey.bind({}, 'f20', function()
    toggleApp('com.anthropic.claudefordesktop')
end)
