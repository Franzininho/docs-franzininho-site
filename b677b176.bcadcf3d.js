(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(173)),i=["components"],c={id:"int-externa",title:"Interrup\xe7\xe3o externa",slug:"/franzininho-diy/exemplos-avr-libc/int-ext",description:"Exemplo para uso da interrup\xe7\xe3o externa",authors:"F\xe1bio Souza",date:"05/02/2023",some_url:"https://github.com/FBSeletronica"},l={unversionedId:"FranzininhoDIY/exemplos-avr-libc/int-externa",id:"FranzininhoDIY/exemplos-avr-libc/int-externa",isDocsHomePage:!1,title:"Interrup\xe7\xe3o externa",description:"Exemplo para uso da interrup\xe7\xe3o externa",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/int-externa.md",slug:"/franzininho-diy/exemplos-avr-libc/int-ext",permalink:"/docs/franzininho-diy/exemplos-avr-libc/int-ext",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/int-externa.md",version:"current",sidebar:"docs",previous:{title:"Instrumento musical com Buzzer",permalink:"/docs/franzininho-diy/exemplos-avr-libc/buzzer"},next:{title:"TODO",permalink:"/docs/franzininho-diy/exemplos-avr-libc/todo"}},u=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"Desafio",id:"desafio",children:[]}],s={toc:u};function p(e){var n=e.components,c=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As interrup\xe7\xf5es externas permitem que o microcontrolador interrompa sua execu\xe7\xe3o de tarefas regulares para executar uma tarefa de prioridade mais alta quando ocorre um evento externo. Isso pode ser \xfatil em aplica\xe7\xf5es que requerem resposta r\xe1pida a eventos externos, como pressionar um bot\xe3o ou receber um sinal de outro dispositivo."),Object(o.b)("p",null,"A configura\xe7\xe3o de uma interrup\xe7\xe3o externa no ATTINY85 envolve a defini\xe7\xe3o do pino que ser\xe1 usado como fonte de interrup\xe7\xe3o, a configura\xe7\xe3o do n\xedvel l\xf3gico que causar\xe1 a interrup\xe7\xe3o e a defini\xe7\xe3o da rotina de interrup\xe7\xe3o que ser\xe1 executada quando a interrup\xe7\xe3o for acionada."),Object(o.b)("p",null,"Ao programar a Franzininho DIY (ATTINY85) com a biblioteca avrlibc, voc\xea pode facilmente configurar interrup\xe7\xf5es externas usando fun\xe7\xf5es da biblioteca como sei() e cli(). Al\xe9m disso, a avrlibc oferece muitas outras bibliotecas \xfateis para o ATTINY85, tornando o processo de programa\xe7\xe3o mais f\xe1cil e eficiente."),Object(o.b)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus)"),Object(o.b)("li",{parentName:"ul"},"Chave Tactil"),Object(o.b)("li",{parentName:"ul"},"Jumpers"),Object(o.b)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas")),Object(o.b)("h2",{id:"circuito"},"Circuito"),Object(o.b)("p",null,Object(o.b)("img",{alt:"circuito",src:t(407).default})),Object(o.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'/**\n * \n * @file main.c\n * @author F\xe1bio Souza\n * @brief Exemplo para leitura de bot\xe3o e acionamento de LED\n * @version 0.1\n * @date 2021-02-03\n * \n * @copyright Franzininho \n * This example code is in the Public Domain (or CC0 licensed, at your option.)\n * Unless required by applicable law or agreed to in writing, this\n * software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, either express or implied.\n * \n */\n\n#include <avr/io.h>\n#include <avr/interrupt.h>\n\n#define F_CPU 16500000L\n    \n//Macro auxiliares para manipula\xe7\xe3o de bits   \n#define setBit(valor,bit) (valor |= (1<<bit))\n#define clearBit(valor,bit) (valor &= ~(1<<bit))\n#define toogleBit(valor,bit) (valor ^= (1<<bit))\n#define testBit(valor,bit)    (valor & (1<<bit))\n\n// define o pino que o bot\xe3o est\xe1 conectado\n#define BUTTON_PIN PB2\n// define o pino que o LED est\xe1 conectado\n#define LED_PIN PB1\n\n\nISR (INT0_vect)        // Interrupt service routine \n{\n  toogleBit(PORTB,LED_PIN);\n}\n\nint main()\n{\n  setBit(DDRB,LED_PIN);         // Configura Pino PB1 como sa\xedda (Pino do LED)\n  clearBit(DDRB,BUTTON_PIN); //configura pino PB0 como entrada (pino do Bot\xe3o)\n  setBit(PORTB,BUTTON_PIN);  //habilita pull up para a entrada PB0 - garante nivel \n                             // l\xf3gico 1 quando bot\xe3o n\xe3o estiver pressionado\n  \n  setBit(GIMSK,INT0);        // Ativa a interrup\xe7\xe3o externa INT0\n  setBit(MCUCR,ISC01);       //configura borda de descida\n  sei();                     // Habilita as interrup\xe7\xf5es globais\n\n  while(1)\n  {\n\n  }\n   \n   return 0;\n}\n')),Object(o.b)("h1",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(o.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/projects/355838633796327425?view=diagram"}),Object(o.b)("h2",{id:"desafio"},"Desafio"),Object(o.b)("p",null,"Fa\xe7a com com que o LED ligue ao pressionar o botao e desligue quando soltar. Para isso voc\xea preciar\xe1 configurar a interru\xe7\xe3o na borda de subinda."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Autor"),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"th",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Data:"),Object(o.b)("td",{parentName:"tr",align:null},"05/02/2023")))))}p.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,c(c({ref:n},u),{},{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},407:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/circuito-int-externa-6910e6a2cd69b62f2f1f59385f317e32.png"}}]);