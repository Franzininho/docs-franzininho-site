---
id: bootloader
title: Bootloader
slug: /franzininho-diy/bootloader
description: Flashing the Bootloader on the Franzininho DIY
---

For the Franzininho board to be programmed via USB, it is necessary to flash the bootloader. The bootloader is a small program that runs every time the board is started and checks for a firmware update command. If this command is present, it receives the binary via USB (in the case of the Franzininho DIY) and writes it to flash memory.

In the Franzininho DIY we use [Micronucleus](https://github.com/micronucleus/micronucleus/blob/master/Devices_with_Micronucleus.md), a small and very flexible bootloader developed for the ATtiny family using the [VUSB](https://www.obdev.at/products/vusb/index.html) project as its base.

Below we will show how to flash the ATtiny85 to use Micronucleus.

## Required Materials

* Arduino UNO or similar
* Wires (Jumpers)
* Breadboard

## Circuit

You will need to assemble the following circuit:

![Programming Circuit](img/bootloader/circuito.png)

:::warning Double-check before connecting the Arduino Uno to the computer.
:::

With the circuit assembled, let's proceed to flash the bootloader.

## Flashing FranzBoot on the Arduino UNO

To simplify flashing the bootloader, we will use [FranzBoot](https://github.com/Franzininho/FranzBoot), a program for flashing the Micronucleus bootloader for the Franzininho DIY using an Arduino UNO.

Download the project to your computer: [Download](https://github.com/Franzininho/FranzBoot/archive/refs/heads/main.zip).

Extract the folder and open the FranzBoot.ino file.

:::tip If you don't have the Arduino IDE on your computer yet, download it at [Arduino](https://www.arduino.cc/en/software)
:::

The Arduino IDE will open:

![Programming Circuit](img/bootloader/IDE-Arduino.png)

Before flashing the board, configure the IDE for the Arduino UNO. Under Board select Arduino UNO, and under Port select the serial port created for your Arduino UNO:

![Programming Circuit](img/bootloader/IDE-Arduino-Configuracao.png)

Done — now press Upload and wait for it to finish uploading to the Arduino UNO:

![Programming Circuit](img/bootloader/IDE-Arduino-Upload.png)

Now open the serial terminal:

![Programming Circuit](img/bootloader/IDE-Arduino-Terminal-serial.png)

:::tip Check that the baud rate is set to 9600.
:::

Now type G and press send. After flashing, the following message should appear in the terminal:

![Programming Circuit](img/bootloader/IDE-Arduino-Gravando.png)

:::warning ERROR
If you receive an error message, check the electrical connections and send the G command again.
:::

Done — the ATtiny85 is ready to be inserted into your Franzininho DIY. Carefully remove it from the breadboard and insert it correctly into the Franzininho DIY, as shown in the image below.

![Franzininho DIY Board](img/bootloader/placa-franzininho-diy.png)

## Next Steps

Now that your Franzininho DIY board is ready, you can start programming.

## Flashing Many Chips

If you need to flash many chips, you can do so without using a PC. Check the [FranzBoot documentation](https://github.com/Franzininho/FranzBoot#readme) for more details.
