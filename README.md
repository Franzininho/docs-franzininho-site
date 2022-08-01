# Documentação do projeto Franzininho

Documentação feita com [Docusaurus 2](https://v2.docusaurus.io/). 

Aqui concentramos toda a documentação para os primeiros passos com placas e projetos Franzininho



## Contribuição

Você pode contribuir com a documentação da seguinte forma:
- Correção dos materiais já publicados:
A forma mais fácil é através da edição no próprio Github. Se você encontrar algum erro de digitação ou informação errada no texto, faaça o seguinte:
    - Clique em "Edit this page" no final da página;
    - Edite o texto no Github;
    - Envie o commit.
- Escrita de novos tópicos:
para inserção de novos texto que podem ser tutoriais ou projetos sobre algumas das placas e ferrametas Franzininho, faça os seguintes passos:
1. Crie uma Issue sobre o novo tópico e discuta sobre a necessidade viabilidade;
2. Se aprovada, faça Fork do projeto;
3. Crie uma nova branch: `git checkout -b nova-branch`
4. Crie uma pasta com o texto dentro da pasta contribuição, seguindo a seguinte estrutura (se preferir copie o exemplo na pasta):
 - Contribuição:
    - nome-da-pasta-com-seu-texto:
      - texto.md
      - img:
        - img1.png
        - img2.png
5. Edite seu texto
6. Commit suas mudanças: `git commit -m 'Adicionei nome-do-projeto'`
7. Push para a branch: `git push origin nova-branch`
8. Abra um Pull Request
9. Após a revisão e aprovação pelo time de documentação será feito o deploy
10. Depois que o seu PR for unido ao projeto, você pode deletar a sua branch.


## Usando o docusaurus

Você precisará instalar no seu computador:
- Node.js versão >= 10.15.1
- Yarn versão >= 1.5

Após o fork, entre na pasta do projeto:

- Instale 

```console
yarn install
```

- Teste localmente

```console
yarn start
```

Este comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações são refletidas ao vivo, sem a necessidade de reiniciar o servidor.


Para mais detalhes acesse a [documentação do Docusaurus V2](https://v2.docusaurus.io/docs/)


