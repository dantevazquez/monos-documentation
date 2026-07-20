# MonoWM

## Introduction

This environment is built around the [mono](https://github.com/dantevazquez/monowm){ target="_blank" } window manager. This is a very simple window manager that only allows you to have one window occupying your entire screen at a time. Kind of like a mobile OS. Therefore you are going to have to rely on keybinds to quickly navigate to where you need to go. You probably noticed you can only have 9 windows open at a time (Not really, you can set in the monowm config to have up to 128, but I don't recommend it). Instead, you should rely on the terminal and tmux to get a lot of work done in just one terminal. I've included a very minimal tmux setup, which you can activate by entering `tm` in the terminal.

## Default Keybinds

### Window Keybinds

| Keybinding | Action |
| :--- | :--- |
| `super+tab` | Cycle windows (similar to macOS Cmd+Tab or Windows Alt+Tab) |
| `super+1-9` | Go directly to an open window |
| `super+q` | Quit / close window |

### Utility Keybinds

| Keybinding | Action |
| :--- | :--- |
| `Super+enter` | Open Terminal (`kitty`) |
| `Super+b` | Open Browser (`chromium`) |
| `Super+space` | Open Application Launcher (`dmenu`) |
| `Super+p` | Color Picker |
| `PrtSc` | Screenshot (Saves to `~/Pictures/` and to your clipboard) |
| `super+i` | View system information (time, battery, date) |

## Configuration

You may configure monowm in `~/.config/monowm/`.

Here's the default configuration found in `config.conf` to give you an idea on how to change things:

```ini
# Maximum number of windows that can be open at the same time (max 128)
max_windows = 9

# Internal Window Manager Keybindings
# Format: modifiers+keysym (modifiers can be: super, shift, control, alt)
bind_quit = super+q
bind_cycle = super+Tab
cycle_enabled = 0
bind_switch_window_mod = super
bind_reload = super+F4
bind_toggle_bar = super+F5

# Autostart Commands (run when monowm starts)
run = dunst
run = feh --bg-fill ~/.config/monos-themes/current/bg.png
run = ~/.config/monos-themes/current/alttab.sh 
run = dbus-update-activation-environment --systemd --all

# Format: keybind = modifiers+keysym : command
keybind = super+Return : kitty
keybind = super+space : ~/.config/monos-themes/current/dmenu.sh
keybind = super+b : chromium
keybind = super+i : ~/.local/share/monos/bin/info-monos
keybind = super+p : ~/.local/share/monos/bin/colorpicker-monos
keybind = Print : ~/.local/share/monos/bin/screenshot-monos
keybind = XF86AudioRaiseVolume : ~/.local/bin/monowm-volume up
keybind = XF86AudioLowerVolume : ~/.local/bin/monowm-volume down
keybind = XF86AudioMute : ~/.local/bin/monowm-volume mute
keybind = XF86AudioMicMute : wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle
keybind = XF86MonBrightnessUp : ~/.local/bin/monowm-brightness up
keybind = XF86MonBrightnessDown : ~/.local/bin/monowm-brightness down
```

### Add a Custom Keybind

```ini
keybind = key : action
```

For custom scripts, it is recommended to use direct paths (Ex. `~/scripts/example-script`).

### Autostart Commands

To run applications or commands automatically when MonoWM starts, add `run` directives to `~/.config/monowm/config.conf`:

```ini
# Format: run = command
run = dunst
run = feh --bg-fill ~/.config/monos-themes/current/bg.png
run = dbus-update-activation-environment --systemd --all
```

#### Complex Startup Scripts (`autostart`)

For more complex startup tasks — such as setting display resolution with `xrandr`, configuring power management with `xset`, or executing multi-step shell scripts — you can put them inside `~/.config/monowm/autostart`. Make sure the file is executable (`chmod +x ~/.config/monowm/autostart`).

Example `~/.config/monowm/autostart`:

```bash
#!/bin/bash

# Display & Idle Settings
xset s 300 300
xset +dpms
```


### Bar Configuration

The status bar is configured separately in `~/.config/monowm/bar.conf`. Below is the default `bar.conf` file:

```ini
# ==============================================================================
# Monowm Bar Configuration (bar.conf)
# ==============================================================================

# General Bar Settings
bar_enabled = 1
bar_height = 24
bar_font_name = JetBrainsMono Nerd Font
bar_font_size = 14
bar_update_interval = 5 # In seconds. Lower for worst performance but more responsive bar updates
bar_position = top  # Options: top, bottom


# Bar Colors (Hex formats or '-' for default)
bar_color_active_fg = #ffffff
bar_color_active_bg = #555555
bar_color_inactive_fg = #aaaaaa
bar_color_inactive_bg = -
bar_color_bg = -
bar_color_fg = -
bar_color_time_fg = -
bar_color_volume_fg = -
bar_color_battery_fg = -

# Bar Module Positions ('l' = left, 'c' = center, 'r' = right)
bar_show_windows = 1
bar_windows_position = l

bar_show_time = 1
bar_time_position = r
bar_time_format = %I:%M %p

bar_show_battery = 1
bar_battery_position = r
bar_battery_path = /sys/class/power_supply/BAT0
bar_battery_icon_full = 
bar_battery_icon_75 = 
bar_battery_icon_50 = 
bar_battery_icon_25 = 
bar_battery_icon_empty = 
bar_battery_icon_charging = 

bar_show_volume = 0
bar_volume_position = r
bar_volume_cmd = wpctl get-volume @DEFAULT_AUDIO_SINK@ | awk '{print int($2 * 100)}'
bar_volume_mute_cmd = wpctl get-volume @DEFAULT_AUDIO_SINK@ | grep -q MUTED && echo "yes" || echo "no"
bar_volume_icon_high = 󰕾
bar_volume_icon_med = 󰖀
bar_volume_icon_low = 󰕿
bar_volume_icon_mute = 󰝟

# Recording Module Setup (Shows an indicator when active recording is detected)
bar_show_recording = 1
bar_recording_position = r
# Command that exits with 0 when recording, and non-zero when not recording
bar_recording_cmd = pgrep -x ffmpeg >/dev/null || pgrep -x obs >/dev/null || pgrep -x simplescreenrecorder >/dev/null || pgrep -x gpu-screen-recorder >/dev/null || pgrep -x wf-recorder >/dev/null
bar_recording_icon = 
bar_color_recording_fg = #ff5555

# Default Application Icon
default_icon = 

# Application Icon Mappings
# Format: icon = res_class : icon_string
icon = firefox : 
icon = st : 
icon = alacritty : 
icon = kitty : 
icon = chromium : 
```

#### Key Bar Options

- **General Options**:
  - `bar_enabled`: Set to `1` to show the status bar, or `0` to hide it.
  - `bar_position`: Set to `top` or `bottom`.
  - `bar_height`: Bar height in pixels.
  - `bar_font_name` & `bar_font_size`: Font name and font size used by the bar.
  - `bar_update_interval`: Update frequency in seconds.
- **Colors**:
  - Specify hex color values (`#RRGGBB`) or set to `-` to fall back to default window manager theme colors.
  - Active and inactive window item text/background colors (`bar_color_active_fg`, `bar_color_active_bg`, etc.).
  - Individual module foreground colors (`bar_color_time_fg`, `bar_color_volume_fg`, `bar_color_battery_fg`, `bar_color_recording_fg`).
- **Modules & Positions**:
  - Modules can be aligned to `l` (left), `c` (center), or `r` (right).
  - **Windows**: `bar_show_windows` (1/0) and `bar_windows_position`.
  - **Time**: `bar_show_time` (1/0), `bar_time_position`, and `bar_time_format` (uses standard `strftime` specifiers such as `%I:%M %p`).
  - **Battery**: `bar_show_battery` (1/0), `bar_battery_position`, `bar_battery_path`, and custom state icons.
  - **Volume**: `bar_show_volume` (1/0), `bar_volume_position`, volume/mute checking commands (`bar_volume_cmd`, `bar_volume_mute_cmd`), and volume level icons.
  - **Recording**: `bar_show_recording` (1/0), active recording check command (`bar_recording_cmd`), icon, and highlight color.
- **Application Icons**:
  - `default_icon`: Icon used when a window's class has no explicit mapping.
  - `icon = res_class : icon_string`: Map window resource classes (e.g., `kitty`, `chromium`, `firefox`) to specific icon characters or glyphs.

