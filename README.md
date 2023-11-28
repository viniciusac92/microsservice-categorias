<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Descrição

Este serviço tem como objetivo gerenciar e cadastrar categorias de jogadores em um sistema de jogos. 

## Setup:

O microsserviço foi configurado para ser executado na porta 3000. Certifique-se de que essa porta esteja disponível e não esteja sendo utilizada por outros serviços no ambiente.
Como Iniciar o Microsserviço:

### Instalação das Dependências:


    npm install

## Configuração do Banco de Dados:

  Configure as informações de conexão com o banco de dados no arquivo de configuração correspondente.

## Execução do Microsserviço:

  Após a instalação das dependências e configuração do banco de dados, inicie o microsserviço executando o seguinte comando:

      npm start

  O microsserviço estará acessível em http://localhost:3000.

## Endpoints Disponíveis:

 - Cadastro de Categorias:
        POST http://localhost:3000/categorias

 - Consulta de Categorias:
        GET http://localhost:3000/categorias
        GET http://localhost:3000/categorias/:id

 - Atualização de Categorias:
        PUT http://localhost:3000/categorias/:id

 - Remoção de Categorias:
        DELETE http://localhost:3000/categorias/:id




## License

Nest is [MIT licensed](LICENSE).
