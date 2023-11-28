<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Descrição

Este serviço tem como objetivo gerenciar e cadastrar categorias de jogadores em um sistema de jogos. 

## Setup:

Este microserviço utiliza o Protocolo AMQP como seu protocolo de transporte para estabelecer comunicação com o RabbitMQ. A aplicação é projetada para operar de forma assíncrona, trocando mensagens entre componentes. Ao ser executado, o microserviço se conecta ao servidor RabbitMQ, escuta mensagens recebidas na fila especificada e as processa. Esta configuração é especifica para ambiente de desenvolvimento local. 

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






## License

Nest is [MIT licensed](LICENSE).
