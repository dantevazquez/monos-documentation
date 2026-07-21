# Installation

Installation is straightforward and can be done in a matter of minutes.

## Installation Steps

1. Download the official Arch ISO [here](https://archlinux.org/download/){ target="_blank" }, put it on a USB stick (use [balenaEtcher](https://etcher.balena.io/) on Mac/Windows or [caligula](https://github.com/ifd3f/caligula) on Linux), and boot off the stick.
2. Once inside the Arch ISO environment, run the installer:

   ```bash
   bash <(curl -sL https://raw.githubusercontent.com/dantevazquez/monos/main/install.sh)
   ```

   If you want to type less, you can run:

   ```bash
   bash <(curl -sL https://dantevazquez.com/install)
   ```

   Source code for the script can be found on [GitHub](https://github.com/dantevazquez/monos){ target="_blank" }.

3. Type a keyboard layout (Ex. `us`). Layouts can be found [here](https://wiki.archlinux.org/title/Linux_console/Keyboard_configuration){ target="_blank" }.
4. Type a timezone (Ex. `America/Denver`). Timezones can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones){ target="_blank" }.
5. Type a hostname (Ex. `monos`).
6. Type a username, then enter a password.
7. Select a disk to erase and install Monos from the list (Ex. `/dev/sda`).
8. Wait for the install to finish, reboot, and now you have a running Arch Linux system.
