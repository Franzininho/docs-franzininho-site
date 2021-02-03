---
id: montagem
title: Montagem da Franzininho DIY
slug: /franzininho-diy/montagem
description: Passo a passo da montagem da Franzininho DIY
---

Passo a passo da montagem da Franzininho DIY V2RV2

### Antes de colocar a mão na massa

![montagem Franzininho DIY](img/prepare-ambiente.png)

Antes de tudo você deve preparar o ambiente, separando as ferramentas necessárias para a soldagem. Vamos precisar de:

- Ferro de solda;
- Estanho
- Alicate de corte diagonal para eletrônica;
- Óculos de proteção;

Você também deve separar os componentes para facilitar na hora de soldar. Você encontra os componentes na [lista de materiais](https://franzininho.github.io/docs-franzininho-site/docs/franzininho-diy/lista-de-materiais). Tudo organizado, então vamos lá?!

### Montando a Versão V2RV2

De início você terá uma placa sem componentes, conforme a imagem abaixo:

![montagem Franzininho DIY](img/00-pcb.png)

:::tip Sequência de montagem
Você deve sempre começar pelos componentes baixos. Siga a sequência recomendada abaixo.
:::

### Diodo 1N1448

O primeiro componente a ser colocado é o diodo 1N4148 no **D3**.

:::caution Atenção
Cuidando com a polaridade do diodo. A faixa preta do diodo deve ser colocada conforme o desenho do componente na placa.
:::

![montagem Franzininho DIY](img/01-diodo1N4148.png) 

### Diodos Zener (3V6)

Temos dois diodos zeners que deverão ser colocados nas referências **D1** e **D2**. 

:::caution Atenção
Cuidando com a polaridade do diodo. A faixa preta do diodo deve ser colocada conforme o desenho do componente na placa.
:::

![montagem Franzininho DIY](img/02-diodos-zenners.png) 

### Resistores de 68R

Nas referências **R1** e **R2** você irá colocar os resistores de 68R que são representado pelas cores (azul, cinza, preto e dourado).

![montagem Franzininho DIY](img/03-resistores68R.png)  
 
### Resistor 1k5

Em **R3** deve-se colocar o resistor 1k5 que é representado nas cores (marrom, verde, vermelho e dourado).
 
![montagem Franzininho DIY](img/04-resistor1k5.png) 
 
### Resistores 1k
 
Resistores de 1k que são representados nas cores (marrom, preto, vermelho e dourado) devem ser colocados em **R4** e **R5**.
 
![montagem Franzininho DIY](img/05-resistores1k.png)  
  
### Soquete 8 pinos

O soquete deve ser colocado no **IC1** que traz a facilidade do encaixe do Attiny85.

![montagem Franzininho DIY](img/06-soquete.png) 
  
### Chave táctil

  A chave você consegue colocar apenas em uma posição, então é só encaixá-la onde está localizada como **RESET**.
  
![montagem Franzininho DIY](img/07-chave-táctil.png)  
  
### Capacitor Cerâmico

No **C1** você irá colocar o capacitor cerâmico.  
  
![montagem Franzininho DIY](img/08-capacitor-cerâmico.png)  
    
### LED Verde  

O LED verde deve ser colocado no **ON**.  

:::tip Fique atento a polaridade dos terminais dos LED. 
:::

**Terminal maior (positivo) - Terminal menor (negativo)** 

    
    
    
![montagem Franzininho DIY](img/09-led-verde.png)  
    
### LED Amarelo 

O LED amarelo deve ser colocado no **LED**. 
    
![montagem Franzininho DIY](img/10-led-amarelo.png)  
    
### Regulador de tensão  
    
No **IC2** você deve colocar o regulador. Ele tem 3 terminais e deve ser colocado conforme o desenho na placa.
 
![montagem Franzininho DIY](img/11-regulador-de-tensão.png)  
 
### Barra de 3 pinos

Em **UI**, onde está indicado com **VIN, GND, VCC**, você irá colocar a barra com três pinos.

![montagem Franzininho DIY](img/12-barra-de-3-pinos.png)  
 
### Barra de 8 pinos

Deverá ser colocada onde estão indicados **(GND, VCC, P6, ..., P1,P0)**

![montagem Franzininho DIY](img/13-barra-de-8-pinos.png) 
 
### Capacitor eletrolítico

Agora vamos colocar o capacitor eletrolítico em **C2**.

![montagem Franzininho DIY](img/14-capacitor-eletrolitico.png) 
 
### Conector USB

Quase lá! Iremos agora colocar o conector USB, conforme o encaixe dele.

![montagem Franzininho DIY](img/15-conector-usb.png) 

### Attiny85

Por último iremos colocar o microcontrolador ATtiny85 no soquete de 8 pinos.

![montagem Franzininho DIY](img/16-attiny85.png) 


Pronto!

Sua Franzininho versão V2RV2 está montada, agora é só programar e criar vários projetos.

