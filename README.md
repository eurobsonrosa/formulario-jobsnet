# Formulário JobsNet

### Este projeto tem como objetivo colocar em prática os conhecimentos obtidos durante o Start Tech da Gama Academy programa de bolsas em parceria com a AmbevTech.

## Começando

Para executar o projeto será necessário e recomendavél instalar os seguintes programas:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Node.js](https://nodejs.org/en/)

## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência através do terminal:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/eurobsonrosa/formulario-jobsnet
```

## Construção

Para iniciar a construção do servidor navegue até a pasta server e execute o camando npm init

```shell
$ cd server
$ npm init
```

### Instalação das Dependências

instale as dependências do projeto executando os comandos abaixo:

```shell
$ npm install body-parser  
$ npm install cors
$ npm install dotenv
$ npm install express
$ npm install mongoose
$ npm install swagger-ui-express
```

Instale também o nodemon que é uma dependência de desenvolvimento

```shell
$ npm install nodemon 
```

### Start no servidor

Para dar start no servidor execute o comando:

```shell
$ npm run dev
```

Esse comando irá iniciar o servidor através do nodemon e estará disponivél através da porta 5000 e você acessará pelo [http://localhost:5000/]

Para visualizar a documentação dos recursos Web Services REST no navegador da sua preferência navegue para [http://localhost:5000/docs].

### Banco de Dados

Para receber os dados utilizei o MongoDB. Acesse [mongo.db](https://www.mongodb.com/pt-br/basics/create-database) para saber como criar um banco de dados.

Para fazer conexão com seu banco de dados substitua na linha 12 do arquivo *server.js* o **process.env.MONGO_URL** pela sua string de conexão disponibilizada pelo MongoDB.

Faça um primeiro teste pela [API do Formulário](http://localhost:5000/docs) no localhost clicando em Try it Out e depois em Execute. Neste ponto as informações serão enviadas para o banco de dados do MonogDB.


## Deploy e Publicação

Para fazer Deploy e publicação utilizei o [Heroku](https://www.heroku.com/) e o [GitHubPages](https://pages.github.com/).

No Heroku fiz deploy da pasta server onde está o backend e em produção no momento. Para verificar acesse os links abaixo:

#### Verificar conexão
* https://formulariojobsnet-backend.herokuapp.com/
#### Acessar a API do formulário
* https://formulariojobsnet-backend.herokuapp.com/docs

No GitHubPages está a Landing Page e você pode acessar pelo link abaixo:

* https://eurobsonrosa.github.io/formulario-jobsnet/


## Agradecimentos

Agradecimentos a [Gama Academy](https://github.com/gamaacademy) pela imersão incrível que foram essas 5 semanas de Start Tech, a turma da [<AmbevTech>](https://ambevtech.com.br/) por financiar esse curso e a galera do #juntando-o-front-e-back por toda colaboração na reta final do projeto XD.


