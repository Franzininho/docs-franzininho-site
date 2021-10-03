(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return l})),n.d(a,"toc",(function(){return s})),n.d(a,"default",(function(){return b}));var o=n(3),i=n(7),r=(n(0),n(150)),t=["components"],c={id:"picsimlab-intro",title:"Franzininho DIY no PICSimLab",slug:"/franzininho-diy/picsimlab/primeiros-passos",description:"Nesse exemplos vamos ver como usar o PICSimLab para simular e depurar a Franzininho DIY"},l={unversionedId:"FranzininhoDIY/picsimlab/picsimlab-intro",id:"FranzininhoDIY/picsimlab/picsimlab-intro",isDocsHomePage:!1,title:"Franzininho DIY no PICSimLab",description:"Nesse exemplos vamos ver como usar o PICSimLab para simular e depurar a Franzininho DIY",source:"@site/docs/FranzininhoDIY/picsimlab/franzininho-picsimlab.md",slug:"/franzininho-diy/picsimlab/primeiros-passos",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/picsimlab/primeiros-passos",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/picsimlab/franzininho-picsimlab.md",version:"current",sidebar:"docs",previous:{title:"Como simular a Franzininho DIY no Wokwi",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/wokwi/primeiros-passos"},next:{title:"Placa Franzininho WiFi",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/franzininho-wifi"}},s=[{value:"Timeline do video",id:"timeline-do-video",children:[]},{value:"Links",id:"links",children:[]},{value:"Observa\xe7\xe3o",id:"observa\xe7\xe3o",children:[]},{value:"Downloads",id:"downloads",children:[]}],p={toc:s};function b(e){var a=e.components,n=Object(i.a)(e,t);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PICSimLab \xe9 um emulador em tempo real de placas de desenvolvimento com depurador MPLABX/avr-gdb integrado. O PICSimLab suporta alguns microcontroladores PIC e AVR (outros em breve). "),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Fa\xe7a o Download do PICSimLab: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lcgamboa/picsimlab/releases"},"https://github.com/lcgamboa/picsimlab/releases")))),Object(r.b)("p",null,"A placa Franzininho DIY est\xe1 dispon\xedvel para simula\xe7\xe3o no PICSimLab,"),Object(r.b)("p",null,"Veja no video abaixo os passos para grava\xe7\xe3o e depura\xe7\xe3o da Franzininho DIY no PICSimLab:"),Object(r.b)("iframe",{width:"100%",height:"480",src:"https://www.youtube.com/embed/OemWGwXNxE4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(r.b)("h3",{id:"timeline-do-video"},"Timeline do video"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"00:00 Introdu\xe7\xe3o"),Object(r.b)("li",{parentName:"ul"},"02:23 Arduino IDE (grava\xe7\xe3o)"),Object(r.b)("li",{parentName:"ul"},"05:45 Arduino IDE tinyDebug (mensagens pela serial virtual)"),Object(r.b)("li",{parentName:"ul"},"11:20 Sloeber IDE (eclipse) (grava\xe7\xe3o/depura\xe7\xe3o)"),Object(r.b)("li",{parentName:"ul"},"27:55 avr gcc e gdb no terminal (grava\xe7\xe3o/depura\xe7\xe3o) "),Object(r.b)("li",{parentName:"ul"},"37:52 MPLABX IDE (grava\xe7\xe3o/depura\xe7\xe3o)")),Object(r.b)("h2",{id:"links"},"Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Adicionar suporte da placa Franzininho na IDE Arduino (e Sloeber): ",Object(r.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/lcgamboa/franzininho-arduino-package/master/package_franzininho_lcgamboa_index.json"},"https://raw.githubusercontent.com/lcgamboa/franzininho-arduino-package/master/package_franzininho_lcgamboa_index.json")),Object(r.b)("li",{parentName:"ul"},"Exemplos AVR libc: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/Franzininho/exemplos-avr-libc"},"https://github.com/Franzininho/exemplos-avr-libc")),Object(r.b)("li",{parentName:"ul"},"Donwload do Sloeber IDE (Eclipse): ",Object(r.b)("a",{parentName:"li",href:"https://eclipse.baeyens.it/"},"https://eclipse.baeyens.it/"))),Object(r.b)("h2",{id:"observa\xe7\xe3o"},"Observa\xe7\xe3o"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Para instalar o suporte ao GDB instalar o suporte ao "arduino megaAVR boards" no Sloeber (passo que deu errado no v\xeddeo)'),Object(r.b)("li",{parentName:"ul"},"O caminho do GDB dentro da pasta do Sloeber: ",Object(r.b)("strong",{parentName:"li"},"Sloeber/arduinoPlugin/packages/arduino/tools/avr-gcc/7.3.0-atmel3.6.1-arduino5/bin/avr-gdb"))),Object(r.b)("h2",{id:"downloads"},"Downloads"),Object(r.b)("p",null,"Download do PICSimLab: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lcgamboa/picsimlab/releases"},"https://github.com/lcgamboa/picsimlab/releases"),"\nDownload do MPLABX: ",Object(r.b)("a",{parentName:"p",href:"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide"},"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide"),"\nDownload do XC8:",Object(r.b)("a",{parentName:"p",href:"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-xc-compilers"},"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-xc-compilers")))}b.isMDXComponent=!0},150:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return u}));var o=n(0),i=n.n(o);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,o,i=function(e,a){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var a=i.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},b=function(e){var a=p(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,t=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,u=b["".concat(t,".").concat(d)]||b[d]||m[d]||r;return n?i.a.createElement(u,c(c({ref:a},s),{},{components:n})):i.a.createElement(u,c({ref:a},s))}));function u(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,t=new Array(r);t[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,t[1]=c;for(var s=2;s<r;s++)t[s]=n[s];return i.a.createElement.apply(null,t)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);