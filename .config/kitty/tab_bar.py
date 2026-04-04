from kitty.tab_bar import DrawData, ExtraData, TabBarData, as_rgb
from kitty.fast_data_types import Screen, Color

def draw_tab(
    draw_data: DrawData,
    screen: Screen,
    tab: TabBarData,
    before: int,
    max_title_length: int,
    index: int,
    is_last: bool,
    extra_data: ExtraData,
) -> int:
    is_active = tab.is_active
    dot = "❋" if is_active else "✺"

    if is_active:
        fg = as_rgb(0x89ddff)
        bg = as_rgb(0x1e2a35)
    else:
        fg = as_rgb(0x3a4560)
        bg = as_rgb(0x000000)

    title = tab.title or ""
    if "/" in title:
        title = title.split("/")[-1]
    if ":" in title:
        title = title.split(":")[-1].strip()
    if len(title) > 12:
        title = title[:11] + "…"

    # 左间距（透明）
    screen.cursor.fg = 0
    screen.cursor.bg = 0
    screen.draw(" ")

    # 内容
    screen.cursor.bold = is_active
    screen.cursor.fg = fg
    screen.cursor.bg = bg
    screen.draw(f" {dot} {index} {title} ")
    screen.cursor.bold = False

    # 右间距（透明）
    screen.cursor.fg = 0
    screen.cursor.bg = 0
    screen.draw(" ")

    return screen.cursor.x
