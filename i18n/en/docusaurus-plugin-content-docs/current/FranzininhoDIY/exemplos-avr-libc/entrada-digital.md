---
id: entrada-digital
title: Digital Input
slug: /franzininho-diy/exemplos-avr-libc/entrada-digital
description: Let's understand how to work with Digital Inputs
authors: Fábio Souza
date: 24/04/2021
some_url: https://github.com/FBSeletronica
---

In the previous example we learned about the registers responsible for configuring and manipulating I/O pins. In this example we will focus on using the pins as digital inputs.

At the end, you will know how to read external digital signals on the Franzininho DIY.

## Required Resources
- Franzininho DIY board (with Micronucleus)
- Tactile switch
- Jumper wires
- Computer with software tools installed

## Digital Input

A digital input is capable of reading a high level (5V) and a low level (0V) at its input. This functionality is used to read the state of buttons, sensors, and devices that present 2 states at their outputs.

When a pin is configured as a digital input, it is placed in a high-impedance state, equivalent to a 100 MegaOhm resistor in series with the circuit being monitored. This way, the pin draws very low current from the circuit it is monitoring. Due to this high-impedance characteristic, when a pin is set as a digital input without a defined connection, the voltage level on that pin floats — it keeps varying and a stable value cannot be determined due to electrical noise and even the pin's input capacitance. To solve this problem, it is necessary to add a pull-up resistor (connected to +5V) or a pull-down resistor (connected to GND) as needed. These resistors ensure a stable logic level when, for example, a key is not pressed. A 10K resistor is generally used for this purpose. Below is the circuit connection for these resistors when reading a button:

![circuit](img/0x03/pull-up-pull-down.jpg)

It is possible to enable the internal pull-up resistor — yes, the ATtiny85 has internal pull-up resistors (20 kilohms) that simplify connecting buttons and sensors without the need to externally connect a pull-up resistor. Enabling these resistors is done simply through software. We will see this later.

### Some Particularities of the Franzininho DIY Circuit

The I/O pins are marked in yellow in the Franzininho DIY pinout.

![Franzininho DIY pinout](img/0x00/Pinagem-Franzininho-DIY-V2RV2.png)

- Pin PB5 is configured as RESET on the Franzininho DIY, so we cannot use it as I/O.
- Pins PB3 and PB4 are used for the USB circuit, so we must use them with caution. These pins are generally used only as digital outputs.
- The yellow LED on the board is connected to pin PB1.
- Pins PB0 and PB2 have no circuits connected to them.

## Registers Responsible for I/O Pins

To work with I/O pins on the ATtiny85 we have 3 registers:
- PORTB: Data register. Responsible for writing to the pins.
- DDRB: Pin direction register. Responsible for configuring pins to define whether they will be input or output.
- PINB: Port input register. Responsible for reading the pin state.

Note that all registers end with B. This means we are working with PORTB. If it were a microcontroller with more pins, we would have endings A, B, C, etc. Each port has a maximum of only 8 pins.

Section 10 of the ATtiny85 datasheet contains all the details for working with I/O. The following table, taken from the datasheet, shows the possible configurations for the pins:

![GPIO configuration](img/0x02/config-gpio.png)

The figure below shows the registers responsible for the PORTB I/O pins:

![GPIO configuration](img/0x02/registradores-port-B.png)

As shown above, to configure a pin as a digital input, the DDRBx bit corresponding to the pin must be set to 0. To enable the pull-up for it, write 1 to the corresponding PORTBx bit. The pin state is read through the PINBx register.

Let's look at an example to read an external button and turn on the Franzininho DIY LED.

## Circuit

![circuit](img/0x03/circuito.png)

## Code

```c
#include <avr/io.h>
#include <util/delay.h>

#define F_CPU 16500000L

// Macros
#define setBit(value,bit) (value |= (1 << bit))
#define clearBit(value,bit) (value &= ~(1 << bit))
#define toggleBit(value,bit) (value ^= (1 << bit))
#define testBit(value,bit) (value & (1 << bit))

int main(void)
{
    setBit(DDRB, PB1);          // Configure pin PB1 as output (LED pin)
    clearBit(DDRB, PB0);        // Configure pin PB0 as input (button pin)
    setBit(PORTB, PB0);         // Enable pull-up for input PB0
                                // Logic 1 when button is not pressed
    while (1)
    {
        if (!testBit(PINB, PB0))  // Read button - if pressed
        {
            setBit(PORTB, PB1);   // Turn on LED 1
        }
        else
        {
            clearBit(PORTB, PB1); // Turn off LED 1
        }
    }

    return (0);
}
```

The example showed how to configure the pins. Note that we had to configure one pin as an output for the LED and another as an input for the button. Note that the internal pull-up was used.

Using macros simplified bit manipulation in the registers. I recommend reading this article to understand macros and the operations performed: https://www.embarcados.com.br/bits-em-linguagem-c/

To read the pin state — i.e., whether the button is released or pressed — we perform a test at each iteration of the infinite loop. When the button is pressed, the logic level on the pin goes to 0, and when released it stays at 1. According to the test, 0 turns the LED on and 1 turns it off.

Thus, the operation will be:
- Button Released = LED off
- Button Pressed = LED on

Nice, right?

## Challenge

Make the LED change state and keep that state when the button is released, functioning as an on/off button.

| Author | [Fábio Souza](https://github.com/FBSeletronica) |
|--------|-------------|
| Date:  | 24/04/2021  |
