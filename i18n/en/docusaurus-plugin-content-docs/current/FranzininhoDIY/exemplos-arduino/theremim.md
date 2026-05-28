---
id: theremim
title: Theremin
slug: /franzininho-diy/theremim
description: In this example we will make a Theremin with the Franzininho DIY
---

The Theremin is an electronic musical instrument controlled without physical contact. The name comes from its inventor, Léon Theremin, who patented the device in 1928.

In this tutorial you will make a simplified version of the Theremin using the Franzininho DIY.

## Required Materials

* Franzininho DIY
* 2 LDR 10K
* BC548
* 330 R resistor
* 8 ohm speaker

## Circuit

![Theremin Circuit](img/theremim/theremin.png)

## Code

The following code reads the analog input value and acts on the speaker output:

```cpp
/*
 * Theremin Franzininho
 * Author: Fábio Souza
 * Date: 10/09/2018
 */
int speaker = 0; // speaker output pin
int sensor = 1;

void setup()
{
  pinMode(speaker, OUTPUT);
}

// Theremin
void loop()
{
  digitalWrite(speaker, HIGH);
  delayMicroseconds(analogRead(sensor) << 2);
  digitalWrite(speaker, LOW);
  delayMicroseconds(analogRead(sensor) << 2);
}
```

## Simulation

<iframe width="100%" height="458px" src="https://wokwi.com/arduino/projects/311445334890906178?view=diagram"></iframe>

## Working Video

<iframe   src="https://www.youtube.com/embed/l1MmqiYB4GI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
