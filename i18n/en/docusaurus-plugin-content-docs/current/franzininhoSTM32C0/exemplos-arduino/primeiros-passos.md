---
id: franzininhoc0-arduino-primeiros-passos
title: Getting Started with Arduino
slug: /franzininho-c0/arduino-primeiros-passos
description: Arduino IDE installation and configuration for programming the Franzininho C0
---

The following steps show the installation and configuration of the Arduino IDE to use the "Generic STM32C0" board option from the STM32duino package. In the future we hope to have a board-specific option for the Franzininho C0, eliminating the need for some configurations and using more appropriate default options for the pins.

1. Install the **Arduino IDE** (if you don't have it installed) from https://www.arduino.cc/en/software. The screenshots shown were captured with version 2.2.1 for Windows.

2. Install **STM32CubeProgrammer** from https://www.st.com/en/development-tools/stm32cubeprog.html. You may need to create a small account to download the installer.

3. Run the Arduino IDE. Go to **File**, **Preferences**, Additional Boards Manager URLs and add `https://github.com/stm32duino/BoardManagerFiles/raw/main/package_stmicroelectronics_index.json`:

![Additional Boards Manager URLs](img/primeiros-passos/Arduino_BoardsManagerURLs.png)

4. Connect the Franzininho C0 to the computer via a USB cable. The board will be recognized as a serial port by the operating system.

5. Select "Select other board and port..." from the *dropdown* in the top bar of the IDE.

![Board selection, part 1](img/primeiros-passos/Arduino_SelectBoard_1.png)

6. Select the board **"Generic STM32C0 series"** and the port corresponding to the board (if in doubt, see below how to identify the serial port).

![Board selection, part 2](img/primeiros-passos/Arduino_SelectBoard_2.png)

7. Use the **Tools** menu to adjust the board configuration:
	* Board part number: "Generic C011F6Px"
	* Upload method: "STM32CubeProgrammer (Serial)"
	* U(S)ART support: "Enabled (generic 'Serial')"

![Board configuration](img/primeiros-passos/Arduino_ConfigBoard.png)

## Uploading Programs via USB

The configuration above will load programs through USB. For this the board needs to have the bootloader running, which is done through these steps:

1. Press and hold the **BOOT** button
2. Press and release the **RST** button
3. Release the **BOOT** button

*The board must be running the bootloader before the IDE attempts to load the program, otherwise an error will be shown. The ideal is to perform the above procedure **before** pressing the IDE button to compile and upload the program.*

## Identifying the Serial Port

The Franzininho C0 uses a CH340E integrated circuit to emulate a serial port through a USB connection. More recent versions of Windows and Linux recognize this serial port without the need to install a specific driver.

### Windows

Windows assigns a name like COMnn to serial devices. In general, Windows tries to always use the same name for each device (identifying the device by the VendorID, ProductID, and Serial Number provided by USB).

Device Manager shows serial devices under "Ports (COM & LPT)".

![Serial Ports on Windows](img/primeiros-passos/Arduino_Windows_PortaSeriais.png)

The Franzininho C0 appears as "USB-SERIAL CH340". If in doubt, unplug the board and see who disappears from the list. In the figure above, the Franzininho C0 is on COM24.

### Linux

TBD

| Author | Daniel Quadros |
| :----- | :------------- |
| Date:  | 15/10/2023     |
