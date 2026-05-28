---
id: brilho-led
title: LED Brightness Control
slug: /franzininho-diy/brilho-led
description: This example shows how to control LED brightness using the analogWrite() function on the Franzininho DIY.
---

This example shows how to control the brightness of an LED using the `analogWrite()` function on the Franzininho DIY.

# Materials

* Franzininho board
* Breadboard
* 3mm LED
* 330 Ohm resistor
* Male/female jumper wires

## Circuit

On the breadboard you can assemble the LED driving circuit as follows:

![Circuit](img/brilho-led/brilho-led-circuito.png)

## Sketch

```cpp
/*
  Franzininho
  Example: LED Brightness Control - PWM
  This example shows how to control the brightness of an LED using PWM
*/

const int LED = 1; // pin for the LED
int i = 0;         // we will use this variable for auxiliary counting

void setup() {
  pinMode(LED, OUTPUT); // configure the LED pin as an output
}

void loop() {
  // loop from 0 to 255 (gradually turns on)
  for (i = 0; i < 255; i++) {
    analogWrite(LED, i);  // set LED brightness
    delay(10); // wait 10ms, since analogWrite is instantaneous and we wouldn't see any change
  }

  delay(1000);

  // loop from 255 to 1 (gradually turns off)
  for (i = 255; i > 0; i--) {
    analogWrite(LED, i); // set LED brightness
    delay(10);           // wait 10ms
  }

  delay(1000);
}
```

:::tip PWM Outputs
Check the Franzininho DIY pinout to see which pins have PWM output functionality.
:::

## Simulation

<iframe width="100%" height="458px" src="https://wokwi.com/arduino/projects/311359730520949312?view=diagram"></iframe>

## Working Video

<iframe src="https://www.youtube.com/embed/0W5Dos0NHsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
