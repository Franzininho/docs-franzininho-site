  
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
      collapsed: false
    },
    {
      type: 'category',
      label: 'Franzininho DIY',
      items: ['FranzininhoDIY/lista-de-materiais',
              'FranzininhoDIY/identificando-componentes',
              'FranzininhoDIY/montagem',
              'FranzininhoDIY/pinagem',
              'FranzininhoDIY/bootloader',],
      collapsed: false
    },
    {
      type: 'category',
      label: 'Programação',
      items: [ 
      	      'doc3',],
      collapsed: false
    },
   
  ],
};


/*
module.exports = {
  firstSidebar: {
    'Category A': ['doc1'],
  },
  secondSidebar: {
    'Category A': ['doc2'],
    'Category B': ['doc3'],
  },
};
*/
