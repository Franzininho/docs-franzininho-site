---
id: franzino
title: Franzino Board
slug: /Franzino/franzino
description: Details about the Franzino board — a low-cost standalone Arduino based on the ATmega328 with Arduino UNO R3 pinout and a dedicated serial interface connector.
---

![Franzino Board](img/franzino.jpg)

The Franzino board is a low-cost standalone Arduino. As the name suggests, it is a lean board that includes only the essential components to use the ATmega328 microcontroller, both for learning and for embedded projects.

Unlike other standalone boards on the market, the Franzino features Arduino UNO Rev 3 pinout and a dedicated connector for the serial interface. Easy access to the serial interface pins lets you connect communication modules as needed — USB, RS232, RS485, or even Bluetooth — without requiring shields.

The Franzino ships with the Arduino UNO bootloader, making sketch uploads straightforward. You can upload sketches using a USB/Serial converter, following the same steps as with an Arduino UNO.

## Features

- Arduino UNO R3 pinout
- ATmega328 or ATmega328P microcontroller
- Power supply: 7.5 V to 20 V DC
- Reverse polarity protection
- Dedicated serial interface connector
- Power indicator LED
- General-purpose LED connected to pin 13

The serial interface pinout is shown below:

![Serial interface pinout](img/pinout.png)

Pins D2 and D4 can be used for SoftSerial communication, as RS485 direction control, or for other digital input/output purposes.

The power lines (VCC and GND) are also available on this connector, so you can connect a USB/Serial converter for both sketch uploads and serial communication with a computer.

![USB-Serial converter wiring](img/ligacao_conversor.jpg)

If your project does not require USB/Serial communication during operation, you can use the same converter to upload sketches to other Franzino boards.

Some applications require RS232 serial communication. In this case, you can easily connect a TTL/RS232 converter:

![TTL to RS232 converter](img/conversor_ttl_rs232.png)

RS485 is also common in embedded applications. Connect a TTL/RS485 converter module:

![TTL to RS485 converter](img/rs485.png)

Bluetooth modules are another popular option and can be connected to both the standard TX/RX pins or via SoftSerial:

![Bluetooth module](img/hc-05.png)

## Limitations

The Franzino is a single-layer board with the minimum components needed to run the microcontroller. Compared to an Arduino UNO, it has the following limitations:

- No 3.3 V regulator — the 3.3 V pin is not connected
- The Vin pin is not connected to the power supply
- SCL and SDA are not connected to A4 and A5
- No onboard USB/Serial converter — a USB/Serial adapter is required for sketch uploads

## Power supply

The Franzino can be powered in the following ways:

- P4 barrel connector: 7.5 V to 20 V DC (positive center)
- 5 V and GND pins: fixed 5 VDC input
- VCC and GND pins on the serial expansion connector

## Warning

Do not connect the VCC pin of a USB/Serial converter to the board while an external power supply is connected. In that case, connect only the DTR, RXI, TXO, and GND pins.

## Schematic

![Schematic](img/esquematico.png)

## Layout

![Layout](img/layout.png)

## License

![CC SA 4.0](img/cc-sa-40.png)

This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.

All project files are available on GitHub: [github.com/Franzininho/Franzino](https://github.com/Franzininho/Franzino)

## References

Article on Embarcados: [Franzino — Open Hardware de Baixo Custo](https://www.embarcados.com.br/franzino-open-hardware-de-baixo-custo)
