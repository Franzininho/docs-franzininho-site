  
  /*
  module.exports = {
  someSidebar: {
    'Franzininho': ['doc1', 'doc2', 'doc3'],
    'Franzininho DIY': ['mdx'],
    'Franzininho Tiny': ['mdx'],
    'Franzininho WIFI': ['mdx'],
    'Franzino': ['mdx'],
    'FranzMakey': ['mdx'],
    'FranzBoy': ['mdx'],
    'Badges': ['mdx'],
  },
}; */


module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Sobre',
      items: ['doc1',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho DIY',
      items: ['FranzininhoDIY/lista-de-materiais',
              'FranzininhoDIY/identificando-componentes',
              'FranzininhoDIY/montagem',
              'FranzininhoDIY/pinagem',
              'FranzininhoDIY/bootloader',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho Tiny',
      items: [ 
      	      'doc3',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzininho WIFI',
      items: [ 
      	      'doc3',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Franzino',
      items: [ 
      	      'doc3',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'FranzBoy',
      items: [ 
      	      'doc3',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'Badges',
      items: [ 
      	      'doc3',],
      collapsed: true
    },
    {
      type: 'category',
      label: 'FranzMakey',
      items: [ 
      	      'doc3',],
      collapsed: true
    },
   
  ],
 /* programacao: [
    {
      type: 'category',
      label: 'Arduino',
      items: ['programacao/introducao',
             ],
      collapsed: false
    },
  ],*/
};
