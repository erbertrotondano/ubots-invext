# ubots-invext

Olá, seja bem vindo!

Esse é um teste para a vaga da uBots, para fazer o projeto rodar siga as instruções abaixo: 

- Certifique-se de ter o Node.js instalado em seu sistema. Se você não tiver o Node.js instalado, faça o download e instale a versão mais recente a partir do site oficial: https://nodejs.org/

- Em seguida clone o projeto para um diretório local:
`git clone git@github.com:erbertrotondano/ubots-invext.git`

- Abra o repositório:
`cd ubots-invext/`

- Instale as dependências:
`npm install `

- Execute o projeto usando:
`server.js`

A partir deste ponto o projeto já estará rodando e funcionando, nele há 3 rotas que podem ser testadas usando o postman ou qualquer outra ferramenta de requisições de API.

Os endpoints a serem testados são:

- [POST] /solicitar-atendimento
- [GET] /processar-atendimentos
- [GET] /listar-atendimentos/{?time} // caso o nome do time seja passado ele listará somente os atendimentos daquele time


### Observação:

Neste projeto também há uma collection do postman pré-pronta que pode ser usada para testes, é o arquivo `invext.postman_collection.json`, e é possível importá-lo diretamente para o postman.