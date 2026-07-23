# Installation

Installation is straightforward and can be done in a matter of minutes.

## Installation Steps

1. Download the official Arch ISO [here](https://archlinux.org/download/){ target="_blank" }, put it on a USB stick (use [balenaEtcher](https://etcher.balena.io/) on Mac/Windows or [caligula](https://github.com/ifd3f/caligula) on Linux), and boot off the stick.
2. Make sure you are connected to the internet (ethernet or Wi-Fi). If you need to connect to Wi-Fi, you can use `iwctl`:

   ```bash
   iwctl
   ```

   Inside the interactive prompt:
   - Find your device name: `device list` (usually `wlan0`)
   - Scan for networks: `station wlan0 scan`
   - List available networks: `station wlan0 get-networks`
   - Connect: `station wlan0 connect SSID` (you will be prompted for your password if needed)
   - Exit the prompt: `exit`

   Verify your internet connection by running:
   ```bash
   ping -c 4 archlinux.org
   ```

3. Once connected, run the installer:

   ```bash
   bash <(curl -sL https://raw.githubusercontent.com/dantevazquez/monos/main/install.sh)
   ```

   If you want to type less, you can run:

   ```bash
   bash <(curl -sL https://dantevazquez.com/install)
   ```

   Source code for the script can be found on [GitHub](https://github.com/dantevazquez/monos){ target="_blank" }.

4. Type a keyboard layout (Ex. `us`). Layouts can be found [here](https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration){ target="_blank" }.
5. Type a timezone (Ex. `America/Denver`). Timezones can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones){ target="_blank" }.
6. Type a hostname (Ex. `monos`).
7. Type a username, then enter a password.
8. Select a disk to erase and install Monos from the list (Ex. `/dev/sda`).
9. Wait for the install to finish, reboot, and now you have a running Arch Linux system.
