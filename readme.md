[![coffeeDelivery](https://media4.giphy.com/media/3epG1XSQkol0nceZOg/giphy.gif?cid=790b761158ba1d5547976cc1150381fcf594e9f37abaa467&rid=giphy.gif&ct=g "coffeeDelivery")](https://media4.giphy.com/media/3epG1XSQkol0nceZOg/giphy.gif?cid=790b761158ba1d5547976cc1150381fcf594e9f37abaa467&rid=giphy.gif&ct=g "coffeeDelivery")

# Coffee Delivery
Coffee Delivery é um aplicativo de entrega de café, onde os usuários podem escolher entre diferentes opções de café e realizar pedidos para entrega em sua residência.

##### RecursosRecursos
- Catálogo de opções de café
- Adicionar itens ao carrinho
- Realizar pedido e preencher detalhes de entrega e pagamento
- Página de confirmação de pedido

##### TecnologiasTecnologias
- React: Biblioteca JavaScript para criação de interfaces de usuário. Foi utilizada para construir toda a aplicação.
- Styled-components: Biblioteca JavaScript para estilização de componentes. Foi utilizada para estilizar toda a aplicação.
- React Router: Biblioteca JavaScript para rotas em aplicações React. Foi utilizada para gerenciar as rotas na aplicação.
- React Hook Form: Biblioteca JavaScript para validação de formulários em aplicações React. Foi utilizada para validar os formulários de pedido e de endereço.
- Zod: Biblioteca JavaScript para validação de tipos e objetos. Foi utilizada para validar os dados dos formulários.
- Context API: Recurso nativo do React para compartilhar informações entre componentes sem precisar passar props manualmente. Foi utilizada para compartilhar o carrinho de compras entre os componentes.
- TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript. Foi utilizada para melhorar a qualidade e manutenibilidade do código.
- Phosphor-react: Biblioteca de ícones. Foi utilizada para fornecer ícones na aplicação.

##### Técnicas UtilizadasTécnicas Utilizadas

- Arquitetura baseada em componentes
- Utilização de contexto para compartilhar o estado do carrinho de compras
- Utilização de hooks personalizados para acessar o contexto de forma fácil
- Utilização de rotas para navegação
- Utilização de formulários para coleta de dados do usuário
- Utilização de validação de formulários para garantir que os dados enviados pelo usuário sejam válidos

##### Estrutura de PastasEstrutura de Pastas
- Pasta assets: contém imagens e ilustrações usadas no projeto
- Pasta components: contém os componentes reutilizáveis da aplicação
- Pasta context: contém o contexto usado para compartilhar o estado do carrinho de compras
- Pasta hooks: contém os hooks personalizados usados para acessar o contexto
- Pasta layouts: contém a estrutura geral de layout da aplicação
- Pasta pages: contém as páginas principais da aplicação
- Pasta styles: contém estilos globais e temas da aplicação
- utils: contém funções utilitárias utilizadas em toda a aplicação

##### Como utilizarComo utilizar
- Faça o clone do repositório
- Entre na pasta do projeto com `cd coffee-delivery`
- Instale as dependências usando o comando `npm install` ou `yarn install`
- Inicie a aplicação com o comando `npm run dev`
- Acesse no seu navegador com o link localhost gerado