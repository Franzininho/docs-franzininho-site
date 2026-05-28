---
id: picsimlab-intro
title: Franzininho DIY on PICSimLab
slug: /franzininho-diy/picsimlab/primeiros-passos
description: In this example we will see how to use PICSimLab to simulate and debug the Franzininho DIY
---

PICSimLab is a real-time development board emulator with integrated MPLABX/avr-gdb debugger. PICSimLab supports some PIC and AVR microcontrollers (more coming soon).

:::tip
Download PICSimLab: https://github.com/lcgamboa/picsimlab/releases
:::

The Franzininho DIY board is available for simulation in PICSimLab.

Watch the video below for steps on flashing and debugging the Franzininho DIY in PICSimLab:

<iframe   src="https://www.youtube.com/embed/OemWGwXNxE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Video Timeline

- 00:00 Introduction
- 02:23 Arduino IDE (flashing)
- 05:45 Arduino IDE tinyDebug (messages via virtual serial)
- 11:20 Sloeber IDE (eclipse) (flashing/debugging)
- 27:55 avr gcc and gdb in terminal (flashing/debugging)
- 37:52 MPLABX IDE (flashing/debugging)

## Links
- Add Franzininho board support to the Arduino IDE (and Sloeber): https://raw.githubusercontent.com/lcgamboa/franzininho-arduino-package/master/package_franzininho_lcgamboa_index.json
- AVR libc examples: https://github.com/Franzininho/exemplos-avr-libc
- Download Sloeber IDE (Eclipse): https://eclipse.baeyens.it/

## Notes
- To install GDB support, install the "arduino megaAVR boards" support in Sloeber (the step that went wrong in the video)
- GDB path inside the Sloeber folder: **Sloeber/arduinoPlugin/packages/arduino/tools/avr-gcc/7.3.0-atmel3.6.1-arduino5/bin/avr-gdb**

## Downloads

Download PICSimLab: https://github.com/lcgamboa/picsimlab/releases  
Download MPLABX: https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide  
Download XC8: https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-xc-compilers
