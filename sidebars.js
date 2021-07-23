module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Comece aqui',
      items: ['sobre',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho DIY',
      items: [
        'FranzininhoDIY/franzininho-diy',
        'FranzininhoDIY/lista-de-materiais',
        'FranzininhoDIY/identificando-componentes',
        'FranzininhoDIY/montagem',
        'FranzininhoDIY/pinagem',
        'FranzininhoDIY/bootloader',
        'FranzininhoDIY/drivers-micronucleus',
        'FranzininhoDIY/pacote',
        {
          type: 'category',
          label: 'Exemplos AVR Libc',
          items: [
            'FranzininhoDIY/exemplos-avr-libc/exemplos-avr-libc',
            'FranzininhoDIY/exemplos-avr-libc/0x01_hello',
            'FranzininhoDIY/exemplos-avr-libc/0x02_saida_digital',
            'FranzininhoDIY/exemplos-avr-libc/0x03_entrada_digital',
            'FranzininhoDIY/exemplos-avr-libc/0x04_timer0',
            'FranzininhoDIY/exemplos-avr-libc/0x05_timer0_int',
            'FranzininhoDIY/exemplos-avr-libc/0x06_contadores',
            'FranzininhoDIY/exemplos-avr-libc/0x07_buzzer',
          ],
          collapsed: true
        },
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho WiFi',
      items: [
        'FranzininhoWifi/franzininho-wifi',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'FranzMakey',
      items: [
        'FranzMakey/franzmakey',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho Tiny',
      items: [
        'FranzininhoTiny/franzininho-tiny',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzino',
      items: [
        'Franzino/franzino',
        'Franzino/upload-conversor-serial',
        'Franzino/upload-com-arduino-uno',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'FranzBoy',
      items: [
        'FranzBoy/franzboy',
      ],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Badges',
      items: [ 'Badge/badge',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho WiFi-ESP-IDF',
      items: [
        'FranzininhoWiFi_ESPIDF/franzininho-wifi-espidf-00',
        'FranzininhoWiFi_ESPIDF/franzininho-wifi-espidf-01',
        'FranzininhoWiFi_ESPIDF/franzininho-wifi-espidf-02',
        'FranzininhoWiFi_ESPIDF/franzininho-wifi-espidf-03',
        'FranzininhoWiFi_ESPIDF/franzininho-wifi-espidf-04',
      ],
      collapsed: true
    },
  ],
};
