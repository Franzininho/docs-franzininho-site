---
id: identificando-componentes
title: Identifying the Components
slug: /franzininho-diy/identificando-componentes
description: To understand the full operation of the Franzininho DIY, we need to learn a little about the components that make up the project, so we can make changes and further improve this project.
---

## Printed Circuit Board

The printed circuit board is responsible for holding all the components. It can be made of fiberglass or phenolic. For the Franzininho DIY, a single-sided design was developed, which allows home manufacturing.

![PCB](img/componentes/componentes-placa.png)

On the top side of the board (**TOP**) there are component outlines indicating the position of each one. The components are inserted in their respective locations and then soldered through the bottom side (**Bottom**).

![TOP and Bottom of the Franzininho DIY V2 Board](img/componentes/componentes-placa-top-botton.png)

## Resistors

Resistors are passive components that oppose the flow of electric current in the circuit. There are several types of resistors available. In the Franzininho DIY we use 1/4 W carbon resistors. The color bands indicate the resistance value and tolerance.

![Color Code Table for 4-band Resistors](img/componentes/componentes-tabela-resistores.png)

Source: [http://blog.render.com.br/eletronica/como-calcular-o-valor-de-um-resistor/](http://blog.render.com.br/eletronica/como-calcular-o-valor-de-um-resistor/)

In the Franzininho DIY we use 5 resistors, with the following references and values:

- R1 and R2 - 68 R (Blue, Gray, Black, Gold)

![68 Ohm Resistors](img/componentes/componentes-resistor68r.png)

- R3 - 1K5 (Brown, Green, Red, Gold)

![1500 Ohm Resistor](img/componentes/componentes-resistor1k5.png)

R4 and R5 - 1K (Brown, Black, Red, Gold)

![1k Ohm Resistor](img/componentes/componentes-resistor1k.png)

## Capacitors

Capacitors are electrical devices capable of storing electric charge in an electric field. In the Franzininho DIY we have 2 types of capacitors:

C1 - Ceramic Capacitor 100 nF x 50 V

![Ceramic Capacitor 100 nF](img/componentes/componentes-capacitor1.png)

C2 - Electrolytic Capacitor 10uF x 35V

![Electrolytic Capacitor 10uF x 35V](img/componentes//componentes-capacitor2.png)

## LEDs

The LED (Light Emitting Diode) is used for light emission in places and instruments where it is more convenient to use instead of a lamp.

In the Franzininho DIY two 3 mm diffused LEDs are used:

ON - Green LED, LED - Yellow LED

![3mm LEDs](img/componentes/componentes-leds.png)

## Tactile Switch

It is a momentary contact button. In the Franzininho DIY we use a normally open (NO) tactile switch of 4.3 x 6 x 6 mm that serves as the Reset button.

Switch - RESET

![Tactile Switch](img/componentes/componentes-chave.png)

## Socket

The socket is used to mount integrated circuits, making it easy to replace them on the board.

In the Franzininho DIY we use an 8-pin socket to accommodate the ATtiny85 microcontroller.

IC1 - Socket

![8-pin machined socket](img/componentes/componentes-soquete.png)

## Pin Headers

Pin headers are used for pin expansion and power input on the board. In the Franzininho DIY we use 3 pins for the power connector and 8 pins for the board expansion connector.

- J1 - 3-pin header
- P0, P1...GND - 8-pin header

![Pin Headers](img/componentes/componentes-barra.png)

## Voltage Regulator

Used to step down the input voltage to a level at which the circuit can operate. In the Franzininho DIY we use a 5V voltage regulator, the 78L05.

IC2 - 78L05 - 5V Voltage Regulator

![78L05 Voltage Regulator](img/componentes/componentes-regulador.png)

## USB Connector

Used to connect the board to a computer or a power supply circuit with a USB connector. In the Franzininho DIY we use a 90° Male USB Connector with latch.

![90° Male USB Connector with latch](img/componentes/componentes-usb.png)

## ATtiny85

This is the brain of the Franzininho DIY and the most expensive component. Be careful when inserting it into the socket. Follow the assembly guidelines.

![ATtiny85](img/componentes/attiny85.jpeg)
