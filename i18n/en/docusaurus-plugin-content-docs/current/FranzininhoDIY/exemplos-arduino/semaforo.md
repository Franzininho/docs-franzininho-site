---
id: semaforo
title: Traffic Light
slug: /franzininho-diy/semaforo
description: In this example we will make a single-lane traffic light with the Franzininho DIY
---

In this example we will make a single-lane traffic light with the Franzininho DIY.

## Materials

* Franzininho board
* Breadboard
* Red LED
* Yellow LED
* Green LED
* 3 330 R resistors
* Jumper wires

## Circuit

Make the following connections on the breadboard:

![traffic light circuit](img/semaforo/semaforo-circuito.png)

Sketch

```cpp
/*
  Franzininho
  Example: Traffic Light
  In this example we will make a single-lane traffic light.
*/
int red = 2;    // Red LED
int yellow = 1; // Yellow LED
int green = 0;  // Green LED

void setup() {
  pinMode(red, OUTPUT);    // define red LED as Output
  pinMode(green, OUTPUT);  // define green LED as Output
  pinMode(yellow, OUTPUT); // define yellow LED as Output
}

void loop() {
  // phase 1
  digitalWrite(red, HIGH);
  digitalWrite(yellow, LOW);
  digitalWrite(green, LOW);
  delay(5000);
  // phase 2
  digitalWrite(red, LOW);
  digitalWrite(yellow, HIGH);
  digitalWrite(green, LOW);
  delay(1000);
  // phase 3
  digitalWrite(red, LOW);
  digitalWrite(yellow, LOW);
  digitalWrite(green, HIGH);
  delay(5000);
}
```

## Simulation

<iframe width="100%" height="458px" src="https://wokwi.com/arduino/projects/311444144703668800?view=diagram"></iframe>

## Working Video

<iframe   src="https://www.youtube.com/embed/jdFRHqfmzik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
