---
id: pisca-led
title: Pisca LED
slug: /franzininho-diy/pisca-led
description: Nesse exemplo vamos aprender como fazer um pisca LED (Blink) com a Franzininho DIY.
---

O primeiro contato com a programação com o Arduino, você faz o blink \(que faz com que o led pisque em intervalos de tempo\). Com a Franzininho não é diferente, você pode testar com o próprio LED que ela tem ou caso você queira, pode ligar um LED em uma protoboard. A seguir vamos explicar como fazer um blink com a Franzininho.

![resultado Pisca LED](img/pisca-led/pisca-led.gif)

## Materiais:

* Placa Franzininho;
* Protoboard;
* LED 3mm;
* Resistor 330;
* Jumpers

## Circuito

Na protoboard você pode montar o circuito para acionamento do LED da seguinte forma:

![Circuito Pisca LED](img/pisca-led/pisca-led.png)

## Sketch

```cpp
/*
  Pisca LED - Blink

  Esse exemplo exibe como piscar o LED presente na placa ou um LED externo ligado ao pino 1 da Franzininho em intervalos de 1 segundo.

*/

const int LED = 1; //pino digital conectado ao LED

void setup(){
  pinMode(LED,OUTPUT); //pino digital de saída
}

void loop(){
  digitalWrite(LED,HIGH);   //acende o led da placa
  delay(1000);             //aguarda um segundo
  digitalWrite(LED,LOW);  //apaga o led da placa
  delay(1000);           //aguarda um segundo
}
```

## Simulação

<iframe   src="https://wokwi.com/arduino/projects/311359028691206722?view=diagram"></iframe>


## Video de Funcionamento

<iframe   src="https://www.youtube.com/embed/0YHNiuUSfyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

