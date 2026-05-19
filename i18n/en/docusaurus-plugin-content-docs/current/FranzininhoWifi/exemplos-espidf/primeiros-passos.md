---
id: franzininho-wifi-espidf-00
title: Getting Started with ESP-IDF
slug: /franzininho-wifi/exemplos-espidf/primeiros-passos
description: Set up the ESP-IDF v5.4 environment for the Franzininho WiFi (ESP32-S2) and get your first example running in minutes.
author: Fábio Souza
---

This guide will help you set up the ESP-IDF (Espressif IoT Development Framework) v5.4 to work with the Franzininho WiFi, which uses the ESP32-S2. By the end, you will have compiled, flashed, and monitored the blink example over USB — confirming that the entire environment is working.

## Prerequisites

### Hardware

- Franzininho WiFi
- USB Micro cable

### Software

- Python 3.9 or higher
- Git
- (Linux) No additional drivers needed — the ESP32-S2 uses native USB
- (Windows/macOS) See Step 1 for system-specific prerequisites

## Introduction

In this setup, we will install ESP-IDF and use it through the command line. If you prefer to use ESP-IDF integrated into an IDE such as VS Code or Eclipse, check out the following links:

- [Eclipse Plugin](https://github.com/espressif/idf-eclipse-plugin)
- [VS Code Extension](https://github.com/espressif/vscode-esp-idf-extension)

You can install ESP-IDF on your preferred operating system (Linux, Windows, macOS).

## Step 1 - Installing Prerequisites

Some tools must be installed on your computer before proceeding. Follow the links below for instructions for your operating system:

- [Windows](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s2/get-started/windows-setup.html)
- [Linux](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s2/get-started/linux-macos-setup.html#step-1-install-prerequisites)
- [macOS](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s2/get-started/linux-macos-setup.html#step-1-install-prerequisites)

It is very important to install all prerequisites before continuing.

## Step 2 - Installing ESP-IDF

In this step we will install ESP-IDF v5.4 along with its toolchain and libraries. We will use the official repository maintained by Espressif on [GitHub](https://github.com/espressif/esp-idf).

ESP-IDF is the official Espressif framework for the entire ESP32 family. This guide focuses on the ESP32-S2 used in the Franzininho WiFi.

### Linux and macOS

Open a terminal and run:

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.4 --recursive https://github.com/espressif/esp-idf.git
```

ESP-IDF will be installed at `~/esp/esp-idf`.

### Windows

The [ESP-IDF Tools Installer for Windows](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s2/get-started/windows-setup.html#get-started-windows-tools-installer) from Step 1 also downloads ESP-IDF. If you used the installer, you can skip the repository clone step.

If you prefer to download it manually, follow [these instructions](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s2/get-started/windows-setup-scratch.html#get-esp-idf-windows-command-line).

### Installing ESP-IDF Tools

In addition to ESP-IDF itself, you also need to install the tools it depends on: compiler, debugger, Python packages, etc.

**Windows:** The ESP-IDF Tools Installer installs all required tools automatically. To install manually, open the Command Prompt:

```bash
cd %userprofile%\esp\esp-idf
install.bat
```

Or in Windows PowerShell:

```bash
cd ~/esp/esp-idf
./install.ps1
```

**Linux and macOS:**

```bash
cd ~/esp/esp-idf
./install.sh
```

Or if you use Fish shell:

```bash
cd ~/esp/esp-idf
./install.fish
```

### Setting Environment Variables

The installed tools are not yet on the PATH. You need to load the setup script to use them from the command line.

**Windows:** The ESP-IDF Tools Installer creates an "ESP-IDF Command Prompt" shortcut in the Start Menu that configures all variables automatically. To configure manually:

```bash
# Command Prompt
%userprofile%\esp\esp-idf\export.bat

# Windows PowerShell
.$HOME/esp/esp-idf/export.ps1
```

**Linux and macOS:**

```bash
. $HOME/esp/esp-idf/export.sh
```

Or for Fish shell (version 3.0.0 and above):

```bash
. $HOME/esp/esp-idf/export.fish
```

:::important Important
You must run `export.sh` every time you open a new terminal before using ESP-IDF.
:::

:::tip Tip: create an alias to speed things up
To avoid typing the full path every time, add an alias to your `~/.bashrc` or `~/.zshrc`:

```bash
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

Then just type `get_idf` in any terminal to activate ESP-IDF.
:::

## Step 3 - Creating and Configuring the Project

Now that the environment is installed, let's use the blink example to validate everything.

### Copying the Example Project

Copy the blink project to preserve the original inside the IDF folder:

**Windows:**

```bash
cd %userprofile%\esp
xcopy /e /i %IDF_PATH%\examples\get-started\blink blink
```

**Linux and macOS:**

```bash
cd ~/esp
cp -r $IDF_PATH/examples/get-started/blink .
```

:::important
ESP-IDF does not support spaces in project paths. Use only letters, numbers, hyphens, and underscores in directory names.
:::

### Identifying the USB Port

Connect the Franzininho WiFi to your computer and check which port it appears on:

**Linux:**

```bash
ls /dev/ttyACM*
```

The ESP32-S2 with USB CDC typically shows up as `/dev/ttyACM0`.

**macOS:**

```bash
ls /dev/cu.usbmodem*
```

**Windows:** Open Device Manager and look under "Ports (COM & LPT)".

Note the port — you will need it in Step 4.

### Configuring via menuconfig

Set the target and open menuconfig:

**Windows:**

```bash
cd %userprofile%\esp\blink
idf.py set-target esp32s2
idf.py menuconfig
```

**Linux and macOS:**

```bash
cd ~/esp/blink
idf.py set-target esp32s2
idf.py menuconfig
```

The menuconfig interface will open:

![menuconfig main screen](img/primeiros-passos-img/1.png)

Navigate to **Component config --->**

![Component config menu](img/primeiros-passos-img/2.png)

Then **ESP System Settings --->**

![ESP System Settings menu](img/primeiros-passos-img/3.png)

Select **Channel for console output (Default: UART0) --->**

![Channel for console output option](img/primeiros-passos-img/5.png)

And select **(X) USB CDC:**

![Selecting USB CDC as console output](img/primeiros-passos-img/4.png)

:::important Important
Always set the console to **USB CDC** for new Franzininho WiFi projects. Without this, the USB port will not work for monitoring or flashing in the normal development workflow.
:::

Press **ESC** to return to the main screen and navigate to **Example Configuration --->**

![Example Configuration menu](img/primeiros-passos-img/6.png)

Open **Blink LED type (...) --->**

![Blink LED type option](img/primeiros-passos-img/7.png)

Select **GPIO:**

![Selecting GPIO as LED type](img/primeiros-passos-img/8.png)

Go back (ESC) and set **Blink GPIO number** to **21** to control LED21 on the Franzininho WiFi:

![Setting Blink GPIO number to 21](img/primeiros-passos-img/9.png)

Press **Q** then **Y** to exit menuconfig and save the configuration.

For more details on this configuration, watch the video:

<iframe src="https://www.youtube.com/embed/zg9IMDaoImA" title="ESP-IDF setup for Franzininho WiFi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Step 4 - Building, Flashing, and Monitoring

:::note First flash
The **first time** you flash the board, you need to enter boot mode manually. Press and **hold** **BOOT**, press and release **RESET**, then release **BOOT**. From the second flash onward, the process is automatic.
:::

In the commands below, replace `/dev/ttyACM0` with the port identified in Step 3. On macOS, use the `/dev/cu.usbmodem*` path.

### Build

```bash
idf.py build
```

### Flash

```bash
idf.py -p /dev/ttyACM0 flash
```

### Monitor

```bash
idf.py -p /dev/ttyACM0 monitor
```

Press **Ctrl+]** to exit the monitor.

### Build, Flash, and Monitor in One Command

To speed up the development cycle, use the combined command:

```bash
idf.py -p /dev/ttyACM0 flash monitor
```

This command builds (if there are changes), flashes, and opens the monitor all in one step.

Congratulations — your ESP-IDF environment is set up and working with the Franzininho WiFi!

To use the VS Code extension instead, watch the video:

<iframe src="https://www.youtube.com/embed/rxMg_zxO0q0" title="ESP-IDF with VS Code for Franzininho WiFi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Next Steps

With the environment set up, explore the next example:

- [Hello World with ESP-IDF](hello-world) — understand the structure of an ESP-IDF project and its basic components
