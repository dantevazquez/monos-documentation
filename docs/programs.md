# Programs

Monos is centred around the terminal, and as a result, we have only included 3 GUI programs, one being a terminal.

## The Terminal - [Kitty](https://sw.kovidgoyal.net/kitty/){ target="_blank" }

Kitty is packed with features, including image rendering, which is why we chose this terminal. It could be considered heavyweight for some, but it runs very fast and comes ready out of the box. We've included the alias `icat path/to/image`, which allows you to quickly view an image right in your terminal. Kitty also allows you to view previews of images in the file explorer `yazi`, a big reason why we chose Kitty as a default.

## The File Explorer - [Yazi](https://yazi-rs.github.io/){ target="_blank" }

Fast, terminal-based file explorer. We recommend reading the docs to learn how to navigate it.

## The Text Editor - [Neovim](https://neovim.io/){ target="_blank" }

Built on top of the Vim editor, Neovim can work as a simple text editor to make quick changes to a complete IDE for software development. We've included a simple configuration so you can add plugins. The config can be found in `~/.config/nvim/`.

### Adding a Plugin

The included config uses the `lazy.nvim` plugin manager. To add a plugin, simply navigate to `~/.config/nvim/lua/plugins/` and create a file for the plugin you want to add. In this example we're going to add the plugin [one-replace](https://github.com/dantevazquez/one-replace.nvim){ target="_blank" }. To add `one-replace` create a file, we'll name it `one-replace.lua`. Once the file is created, you can paste the plugin configuration for lazy, which is usually included in the plugin's page:

```lua
return {
  "dantevazquez/one-replace.nvim",
  keys = {
    { 
      -- feel free to change keybind here
      "<leader>r", 
      function() require("one-replace").open_prompt() end, 
      desc = "Quick Search and Replace" 
    },
  },
  config = function()
    require("one-replace").setup()
  end,
}
```

There you go, you have installed a plugin! Relaunch Neovim and the plugin should work.

### Adding LSP for a Language

Adding an LSP is quite simple in this configuration and it is done with no plugins. Here is an example on how to install the Lua language server:

1. Navigate to `~/.config/nvim/lsp/`.
2. Run the script `./lsp.sh`; this will open up a fuzzy finder. In this fuzzy finder select `lua_ls`. This will install the configuration for the Lua language server in Neovim.
3. Now you just need to install the language server on your system. In this case you can do `sudo pacman -Sy lua-language-server`. There you have it, restart Neovim and the Lua language server should work in Neovim. To know which language server you need, after installing an LSP config via `./lsp.sh`, open Neovim and run `:checkhealth lsp`. This will tell you what language server you need to install on your system. After that check the [pacman packages](https://archlinux.org/packages/){ target="_blank" } and search for the LSP. You may also install it via a package manager like `npm` or `pip`.

## The Browser - [Chromium](https://www.chromium.org/chromium-projects/){ target="_blank" }

You may prefer Firefox or any other browser, feel free to install them. Chromium is just easy to dynamically theme.

## Connect to Wifi - [Impala](https://github.com/erikreinert/impala){ target="_blank" }

A simple TUI that lets you connect to Wi-Fi. You can run it by typing `impala` in your terminal or by launching `wifi-picker-monos` via the application launcher (`super+d`).

## Connect to Bluetooth - [Bluetui](https://github.com/darkhz/bluetui){ target="_blank" }

A simple TUI that lets you connect to Bluetooth. You can run it by typing `bluetui` in your terminal or by launching `bluetooth-settings-monos` via the application launcher (`super+d`).

## Audio Settings - [Wiremix](https://github.com/fennich/wiremix){ target="_blank" }

A simple TUI that lets you control your audio settings. You can run it by typing `wiremix` in your terminal or by launching `audio-settings-monos` via the application launcher (`super+d`).


## Display Settings - [Restui](https://github.com/dantevazquez/monos/tree/main/bin/restui){ target="_blank" }
A simple TUI that lets you change your resolution and DPI. If your resolution is high and the everything looks very small, you can try increasing the DPI to make everything bigger while keeping your resolution crisp.

## The Remaining

Here's a list of the rest of the packages installed in your system, a lot are libraries to compile the mono window manager:

```text
base base-devel linux linux-firmware linux-headers iwd git vim neovim curl wget btop
man-db man-pages openssh sudo xorg-server xorg-xinit xorg-xsetroot xorg-xrandr
xorg-xset libx11 libxft libxinerama freetype2 fontconfig pkg-config lua chromium
kitty vlc ttf-jetbrains-mono-nerd xclip feh maim dmenu pipewire fastfetch ripgrep
fd dunst impala fzf wiremix brightnessctl bluetui bluez polkit-gnome gnome-keyring
xdg-desktop-portal-gtk xcolor yazi tmux autoconf automake libxrandr libxrender libpng
```
