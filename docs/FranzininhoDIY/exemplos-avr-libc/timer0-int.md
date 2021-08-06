---
id: timer0-int
title: Timer 0 - Interrupção
slug: /franzininho-diy/exemplos-avr-libc/timer0-int
description: Vamos aprender usar o timer 0 como temporizador e usando sua interrupção
authors: Fábio Souza
date: 24/04/2021
some_url: https://github.com/FBSeletronica
---

Nesse exemplo vamos entender como usar a interrupção do Timer0 para verificar o overflow. Dessa forma não precisaremos ficar monitorando o flag de overflow no loop principal da aplicação.

## Interrupção do Timer0

No exemplo anterior configuramos o Timer0 para operar no modo  normal. Para monitora a sua contagem monitoramos o flag TOV0  dentro do loop. Como o Timer é um periférico que funciona independente  da CPU podemos habilitar a sua contagem e verificar o overflow através  da sua interrupção. 

Para habilitar a interrupção do Timer0 devermos colocar 1 no bit **TOIE0** no registrador **TIMSK**:

![TIMSK](img/timer0-int/TIMSK.png)

Após isso, para que a interrupção realmente ocorra, devemos habilitar a chave global de interrupção através da função sei();


## Usando o Timer0 como temporizador com sua interrupção

Vamos  fazer a mesma aplicação do exemplo anterior, que é inverter o estado lo  LED em intervalos de 1 s. A diferença aqui é que vamos monitorar os  overflows do timer através da rotina de interrupção. 

A configuração do timer segue a mesma, já que queremos gerar um delay de 1 segundo. 

Assim, precisaremos contar a quantidade de interrupções e quando atingir 63, inverteremos o estado do LED.


### Recursos necessários

- Placa Franzininho DIY(com Micronucleus);
- LED;
- Resistor de 470 Ohm;
- Jumpers;
- Computador com as ferramentas de software instaladas.

### Código exemplo

```c
/**
 * 
 * @file main.c
 * @author Fábio Souza
 * @brief Exibe como usar a interrupção do timer 0 para temporização
 * @version 0.1
 * @date 2021-02-13
 * 
 * @copyright Franzininho 
 * This example code is in the Public Domain (or CC0 licensed, at your option.)
 * Unless required by applicable law or agreed to in writing, this
 * software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied.
 * 
 */

#include <avr/io.h>
#include <util/delay.h> 
#include <avr/interrupt.h>

#define F_CPU 16500000L

 	
#define setBit(valor,bit) (valor |= (1<<bit))
#define clearBit(valor,bit) (valor &= ~(1<<bit))
#define toogleBit(valor,bit) (valor ^= (1<<bit))
#define testBit(valor,bit)    (valor & (1<<bit))

unsigned char tempo = 0;  //contador auxiliar


ISR (TIMER0_OVF_vect) //vetor de interrupção para o timer 0
{
  tempo++;                     //incrementa contador auxiliar
  if(tempo >=63)               //se passaram-se 63 x 15,89 ms = 1 s
  {
    toogleBit(PORTB,PB1);      //inverte LED
    tempo = 0;                 //reinicia contador
  }
}

/**
 * @brief Função main
 * 
 * @return int 
 */
int main(void) 
{
  
  setBit(DDRB,PB1); 	// Configura Pino PB1 como saída (Pino do LED)

  //configuração do timer0 para overflow a aproximadamente 15,89 ms
  //t = (1/16.5Mhz) x 1024 x 256 = 15,89 ms
  TCCR0A=0x00;                      //Modo Normal
  TCCR0B=0x00;
  TCCR0B |= (1<<CS00)|(1<<CS02);   //prescaler de 1024
  TCNT0=0;                         //inicia timer com 0
  setBit(TIMSK,TOIE0);             //habilita interrupção do timer0 
  sei();                           //habilita interrupção global
  
  /**
   * @brief loop infinito
   * 
   */
  while (1)
  {
      //não faz nada no loop 
  }                                                
  return (0);                           
}
```

:::note Informação
Note que no loop principal não fizemos nada. Todo o tratamento ficou na interrupção do Timer0.
:::

### Simulação do exemplo
- **Wokwi: **

<iframe width="100%" height="458px" src="https://wokwi.com/arduino/projects/306143631949955648?view=diagram"></iframe>



