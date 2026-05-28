---
id: pisca-led
title: LED Blink
slug: /franzininho-diy/pisca-led
description: In this example we will learn how to make an LED blink (Blink) with the Franzininho DIY.
---

The first thing you do when getting started with Arduino programming is the blink (which makes the LED blink at time intervals). The Franzininho is no different — you can test with the built-in LED or, if you prefer, connect an LED on a breadboard. Below we will explain how to make a blink with the Franzininho.

![LED Blink result](img/pisca-led/pisca-led.gif)

## Materials:

* Franzininho board
* Breadboard
* 3mm LED
* 330 Ohm resistor
* Jumper wires

## Circuit

On the breadboard you can assemble the LED driving circuit as follows:

![LED Blink Circuit](img/pisca-led/pisca-led.png)

## Sketch

```cpp
/*
  LED Blink

  This example shows how to blink the LED on the board or an external LED
  connected to pin 1 of the Franzininho at 1-second intervals.
*/

const int LED = 1; // digital pin connected to the LED

void setup(){
  pinMode(LED, OUTPUT); // digital output pin
}

void loop(){
  digitalWrite(LED, HIGH);  // turn on the LED
  delay(1000);              // wait one second
  digitalWrite(LED, LOW);   // turn off the LED
  delay(1000);              // wait one second
}
```

## Simulation

<iframe width="100%" height="458px" src="https://wokwi.com/arduino/projects/311359028691206722?view=diagram"></iframe>

## Working Video

<iframe   src="https://www.youtube.com/embed/0YHNiuUSfyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
