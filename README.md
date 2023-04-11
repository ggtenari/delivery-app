# Project Delivery App

- ## Sobre:
>Esse projeto é uma aplicação full stack que consiste em criar e integrar o Back-End e o Front-End de uma plataforma de delivery. 

>Foram desenvolvidas funcionalidades para três tipos de usuários: clientes, vendedores e administradores, seguindo uma hierarquia de atribuições. Os usuários tem acesso através do login e o aplicativo valida o tipo de usuário a que a conta pertence usando o Token JWT.

>Através dessa aplicação é possível se registar e logar no aplicativo, realizar uma compra, ver detalhes de um produto ou de uma compra, acompanhar e alterar o status de um pedido de acordo com as especificações do usuário, além de fazer o cadastro das informações no banco de dados.

- ## Tecnologias:
>React <br>
>Axios <br>
>JavaScript <br>
>Node.js <br>
>Sequelize <br>
>MySQL <br>
>Express.js <br>
>JWT <br>

### Para inicializar o projeto em sua máquina:

  - ⚠️ Todos os comandos descritos abaixo devem ser executados no terminal dentro da pasta raíz do projeto, após ser feito o clone do repositório com o comando `git clone git@github.com:ggtenari/blogs_api.git`.

  - ⚠️ O projeto só instala as dependências com a versão 16 do `node` para evitar conflitos de versão, caso não tenha essa versão instalada você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento de versões.

  > Configure o arquivo .env na pasta do backend com as variáveis de ambiente respectivas. (Há um arquivo `.env.example` que possui exemplos de como configurar o arquivo.)
  - ⚠️ É necessário ter o MySQL instalado em sua máquina para que o backend do projeto funcione corretamente

  > Instale as dependências com `npm install` e, após isso, para a instalação do front e do backend, utilize o comando `npm run dev:prestart`

  > Por fim, para inicializar o projeto, rode o comando `npm start`.

#### Usuários
O projeto vem com três usuários padrão, que podem ser utilizados para testar a aplicação.

- Cliente:
  ```
  name: Cliente Zé Birita
  email: zebirita@email.com
  password: $#zebirita#$
  ```

- Vendedor:
  ```
  name: Fulana Pereira
  email: fulana@deliveryapp.com
  password: fulana@123
  ```

- Administrador:
  ```
  name: Delivery App Admin
  email: adm@deliveryapp.com
  password: --adm2@21!!--


