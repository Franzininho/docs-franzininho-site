---
id: adaptador-arduino
title: Arduino Uno Adapter
slug: arduino-uno
description: Arduino Uno adapter for the Embedded Systems and IoT Laboratory board
---

![](./../img/3d-adaptador.png)

This adapter allows the use of the Arduino Uno board together with the _Embedded Systems and IoT Laboratory_ board through a remapping of the Arduino Uno pinout to the Franzininho WiFi pinout (used in the laboratory board design). To use the adapter, simply connect it to the Arduino as a shield and then connect the adapter to the board.

[Click here](https://github.com/Franzininho/laboratorio-SEIoT-adaptador-arduino) to access the printed circuit board project on GitHub.

## Activation Pins

This adapter uses the same activation pin coding system defined for the _Embedded Systems and IoT Laboratory_ board. The correspondence between the Arduino pin and the activation pin on the laboratory board is printed on the adapter and can also be checked in the project's repository on GitHub.

To make this adapter easier to use, the laboratorioFW_ARDUNO library was developed for use together with the board, allowing the use of activation pin codes within the programming.

:::info Note
This project was developed as part of the Final Graduation Project of [Letícia Pegoraro Garcez](https://github.com/LelePG).
:::
