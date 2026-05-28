---
id: montagem
title: Franzininho DIY Assembly
slug: /franzininho-diy/montagem
description: Step-by-step assembly of the Franzininho DIY
---

Step-by-step assembly of the Franzininho DIY V2RV2

### Before Getting Started

![Franzininho DIY assembly](img/montagem/prepare-ambiente.png)

First of all, you should prepare the workspace by gathering the necessary tools for soldering. You will need:

- Soldering iron
- Solder wire
- Diagonal wire cutter for electronics
- Safety glasses

You should also separate the components to make soldering easier. You can find the components in the [bill of materials](FranzininhoDIY/lista-de-materiais.md). All organized? Let's go!

### Assembling Your Franzininho DIY

At the start you will have a board without components, as shown in the image below:

![Franzininho DIY assembly](img/montagem/00-pcb.png)

:::tip Assembly sequence
You should always start with the shortest components. Follow the recommended sequence below.
:::

### 1N4148 Diode

The first component to be placed is the 1N4148 diode at **D3**.

:::caution Warning
Be careful about the diode polarity. The black band of the diode must be placed according to the component drawing on the board.
:::

![Franzininho DIY assembly](img/montagem/01-diodo1N4148.png)

### Zener Diodes (3V6)

We have two Zener diodes to be placed at references **D1** and **D2**.

:::caution Warning
Be careful about the diode polarity. The black band of the diode must be placed according to the component drawing on the board.
:::

![Franzininho DIY assembly](img/montagem/02-diodos-zenners.png)

### 68R Resistors

At references **R1** and **R2** place the 68R resistors represented by the colors (blue, gray, black, and gold).

![Franzininho DIY assembly](img/montagem/03-resistores68R.png)

### 1k5 Resistor

At **R3** place the **1k5** resistor represented by the colors (brown, green, red, and gold).

![Franzininho DIY assembly](img/montagem/04-resistor1k5.png)

### 1k Resistors

**1k** resistors represented by the colors (brown, black, red, and gold) should be placed at **R4** and **R5**.

![Franzininho DIY assembly](img/montagem/05-resistores1k.png)

### 8-pin Socket

The socket should be placed at **IC1** for easy ATtiny85 insertion.

:::caution Warning
Check the socket position — the half-moon notch must face toward the pin header side of the board.
:::

![Franzininho DIY assembly](img/montagem/06-soquete.png)

### Tactile Switch

The switch can only be placed in one position, so just fit it where **RESET** is located.

![Franzininho DIY assembly](img/montagem/07-chave-táctil.png)

### Ceramic Capacitor

At **C1** place the ceramic capacitor.

![Franzininho DIY assembly](img/montagem/08-capacitor-cerâmico.png)

### Green LED

The green LED should be placed at **ON**.

:::caution Be careful about LED terminal polarity.
**Longer terminal (positive) - Shorter terminal (negative)**
:::

![Franzininho DIY assembly](img/montagem/09-led-verde.png)

### Yellow LED

The yellow LED should be placed at **LED**.

:::caution Be careful about LED terminal polarity.
**Longer terminal (positive) - Shorter terminal (negative)**
:::

![Franzininho DIY assembly](img/montagem/10-led-amarelo.png)

### Voltage Regulator

At **IC2** place the voltage regulator. It has 3 terminals and must be placed according to the drawing on the board.

:::tip Follow the component drawing on the board to guide the correct orientation.
:::

![Franzininho DIY assembly](img/montagem/11-regulador-de-tensão.png)

### 3-pin Header

At **J1**, indicated by **VIN, GND, VCC**, place the 3-pin header.

![Franzininho DIY assembly](img/montagem/12-barra-de-3-pinos.png)

### 8-pin Header

Should be placed where **(GND, VCC, P6, ..., P1, P0)** are indicated.

:::tip Support the header properly. Solder only one pin and check if it is aligned.
:::

![Franzininho DIY assembly](img/montagem/13-barra-de-8-pinos.png)

### Electrolytic Capacitor

Now place the electrolytic capacitor at **C2**.

![Franzininho DIY assembly](img/montagem/14-capacitor-eletrolitico.png)

### USB Connector

Almost done! Now place the USB connector in its correct orientation.

![Franzininho DIY assembly](img/montagem/15-conector-usb.png)

### ATtiny85

Finally, place the ATtiny85 microcontroller in the 8-pin socket.

:::caution Be careful about the correct insertion orientation of the microcontroller. Use the socket drawing as a guide and double-check before powering the board.
:::

![Franzininho DIY assembly](img/montagem/16-attiny85.png)

Done!

Your Franzininho V2RV2 is assembled — now just program it and create many projects.
