 # Manipulação de Componentes em React

 Este projeto é uma aplicação simples em React que demonstra a manipulação de componentes. A aplicação contém dois componentes principais: um para alternar a visibilidade de um texto e outro para gerar mensagens inspiradoras com base em palavras-chave fornecidas pelo usuário.

 ## Componentes

 ### 1. MostrarOcultar

 O componente `MostrarOcultar` permite que o usuário mostre ou esconda um texto ao clicar em um botão.

 #### Funcionalidades
 - Inicializa o estado com `visivel` como `false` (oculto).
 - Alterna a visibilidade do texto ao clicar no botão.

 ### 2. GeradorMensagens

 O componente `GeradorMensagens` fornece uma mensagem inspiradora com base na palavra-chave digitada pelo usuário.

 #### Funcionalidades
 - Inicializa o estado com `mensagem` como uma string vazia.
 - Atualiza a mensagem exibida com base em uma palavra-chave digitada pelo usuário.
 - Palavras-chave e mensagens predefinidas:
   - **motivação**: "Acredite em si mesmo e em tudo o que você é."
   - **sucesso**: "O sucesso é a soma de pequenos esforços repetidos diariamente."
   - **coragem**: "A coragem não é a ausência do medo, mas a vitória sobre ele."
   - **perseverança**: "A perseverança é o caminho do êxito."
   - **felicidade**: "A felicidade não é algo pronto. Ela vem de suas próprias ações."

 ## Instalação

 Para rodar este projeto, você precisará ter o Node.js e o npm instalados. Siga os passos abaixo:



 1. Instale as dependências:
    ```bash
    npm install
    ```

 2. Inicie a aplicação:
    ```bash
    npm start
    ```

 A aplicação será aberta em seu navegador em `http://localhost:3000`.

 ## Contribuição

 Se você gostaria de contribuir para este projeto, fique à vontade para abrir uma *issue* ou enviar um *pull request*.

 ## Licença

 Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.
