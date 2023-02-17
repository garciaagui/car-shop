<h1 align="center">🚧 README EM CONSTRUÇÃO 🚧</h1>

<a name="readme-top"></a>

<h1 align="center">Projeto Car Shop 🚙</h1>

<details>
  <summary>Sumário</summary><br />
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-executar-o-projeto">Como Executar o Projeto</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#habilidades">Habilidades</a></li>
    <li><a href="#sobre-a-trybe">Sobre a Trybe</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

## Sobre o Projeto

Projeto **27** do curso de Desenvolvimento Web da [Trybe][trybe-site-url].

Neste projeto, foi desenvolvida uma API para gerenciamento de uma concessionária de veículos, que permite realizar as operações de criação, visualização, atualização e deleção (CRUD) de carros e motos.

A aplicação foi desenvolvida utilizando Node.js e TypeScript, e o banco de dados escolhido foi o MongoDB. A conexão com o banco de dados foi feita através do framework Mongoose, ODM (Object-Document Mapping) que facilita as interações com o MongoDB.

Para garantir a qualidade do código, foram aplicados princípios importantes de desenvolvimento de software, como POO (Programação Orientada a Objetos), SOLID e DDD (Domain Driven Design). Com isso, a aplicação torna-se mais escalável e performática.

Para assegurar que o código funciona adequadamente, foram criados testes unitários com a abordagem BDD (Behavior-driven development). Esse processo garante que a aplicação esteja sempre em bom estado e pronta para receber atualizações.

<br/>

## Tecnologias

<details>
  <summary><strong>💻 Desenvolvimento </strong></summary><br />

- [Docker][docker-url]
- [dotenv][dotenv-url]
- [Express][express-url]
- [Node.js][node-url]
- [MongoDB][mongodb-url]
- [Mongoose][mongoose-url]

---

</details>

<details>
  <summary><strong>🧪 Testes </strong></summary><br />

- [Chai][chai-url]
- [Mocha][mocha-url]
- [Sinon.js][sinon-url]

---

</details>

<details>
  <summary><strong>✨ Alinhamento e qualidade de código </strong></summary><br />

- [ESLint][eslint-url]

---

</details>

<br/>

## Funcionalidades

<ul>
  <li>Criar, listar, atualizar e deletar carros.</li>
  <li>Criar, listar, atualizar e deletar motos.</li>
</ul>

<br/>

## Como Executar o Projeto

Para rodar o projeto, siga os passos abaixo.

1. Clone o repositório;

```
git@github.com:garciaagui/trybe-project-27_car-shop.git
```

2. Navegue até a raiz do projeto;

```
cd trybe-project-27_car-shop/
```

> 🔘 Agora, decida se o projeto será rodado localmente ou via Docker.

<details>
  <summary><strong>💽 Localmente</strong></summary>

1. Certifique-se que você tenha o **node** instalado na versão 16 ou superior. Confira [aqui](https://nodejs.org/pt-br/download/package-manager/) a documentação oficial.

2. Na raiz do projeto, instale as dependências do projeto.

```
npm install
```

3. Configure as variáveis de ambiente:

- Renomeie o arquivo `.env.example` (disponível na raíz do projeto) para `.env`;
- Configure as variáveis para o seu contexto local.

4. Para iniciar o servidor, utilize o comando abaixo.

```
npm run dev
```

- Para executar os testes, você pode utilizar os dois comandos abaixo.

```
// Comando 1
npm run test:mocha

// Comando 2 - Neste comando você tem acesso à cobertura dos testes
npm run test:coverage
```

</details>

<details>
  <summary><strong>🐋 Docker</strong></summary>
  
1. Certifique-se que você tenha o **docker-compose** instalado na versão 1.29 ou superior. Links oportunos caso você precise instalar ou atualizar: [Tutorial DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) e [documentação oficial](https://docs.docker.com/compose/install/);

2. Suba os containers executando o comando abaixo. Dois containers serão inicializados: `car_shop` (node) e `car_shop_db` (mysql).

```
docker-compose up -d
```

3. Acesse a CLI do container `car_shop` com o comando abaixo ou abra-o no VS Code. Para a última opção, recomendo a extensão da Microsoft [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

```
docker exec -it car_shop bash
```

> ⚠️ A partir de agora, **TODOS** os comandos (scripts) disponíveis no `package.json` (incluindo o npm install) devem ser executados **DENTRO** do container `blogs_api`.

4. Instale as dependências do projeto.

```
npm install
```

5. Para iniciar o servidor, utilize um dos comandos abaixo.

```
npm run dev
```

- Para executar os testes, você pode utilizar os dois comandos abaixo.

```
// Comando 1
npm run test:mocha

// Comando 2 - Neste comando você tem acesso à cobertura dos testes
npm run test:coverage
```

- Para o contexto de teste local, siga os passos abaixo.

1. Renomeie o arquivo `.env.example` (disponível na raíz do projeto) para `.env`;
2. Configure as variáveis para o seu contexto local.

</details>

<br/>

## Endpoints

Abaixo você pode conferir um detalhamento dos endpoints utilizados no projeto. Para realizar as requisições HTTP e consultar o comportamento de cada endpoint, você pode utilizar a extensão [Thunder Client](https://www.thunderclient.com/).

<details>
  <summary><strong>Cars</strong></summary>

### GET /cars

- Retorna todos os carros registrados no banco de dados.
- URL: `http://localhost:PORT/cars`

### POST /cars

- Adiciona um novo carro ao banco de dados.
- URL: `http://localhost:PORT/cars`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

### GET /cars/:id

- Retorna o carro cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`

### PUT /cars/:id

- Atualiza o carro cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

### DELETE /cars/:id

- Remove do banco de dados o carro cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`

---

</details>

<details>
  <summary><strong>Motorcycles</strong></summary>

### GET /motorcycles

- Retorna todas as motos registradas no banco de dados.
- URL: `http://localhost:PORT/motorcycles`

### POST /motorcycles

- Adiciona uma nova moto ao banco de dados.
- URL: `http://localhost:PORT/motorcycles`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 30.000,
  "category": "Street", // Possíveis valores: "Street", "Custom" ou "Trail"
  "engineCapacity": 600
}
```

### GET /motorcycles/:id

- Retorna a moto cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`

### PUT /motorcycles/:id

- Atualiza a moto cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 45.000,
  "category": "Street", // Possíveis valores: "Street", "Custom" ou "Trail"
  "engineCapacity": 600
}
```

### DELETE /motorcycles/:id

- Remove do banco de dados a moto cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`

---

</details>

<br/>

## Habilidades

<ul>
  <li>Implementação de operações CRUD.</li>
  <li>Modelagem de dados com o ODM Mongoose.</li>
  <li>Aplicação dos conceitos POO, SOLID e DDD.</li>
  <li>Aplicação da metodologia BDD para criação de testes.</li>
</ul>

<br/>

## Sobre a Trybe

_"A [Trybe][trybe-site-url] é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_

_"O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais._"

<br/>

## Contato

Projeto desenvolvido por Guilherme Garcia. Seguem abaixo minhas redes sociais e meios de contato. 🤘

[![Gmail][gmail-badge]][gmail-url]
[![Linkedin][linkedin-badge]][linkedin-url]
[![GitHub][github-badge]][github-url]
[![Instagram][instagram-badge]][instagram-url]

<p align="right"><a href="#readme-top">Voltar ao topo</a></p>

<!-- MARKDOWN LINKS & IMAGES -->

[trybe-site-url]: https://www.betrybe.com/

<!-- Stacks URLs -->

[chai-url]: https://www.chaijs.com/
[docker-url]: https://www.docker.com/
[dotenv-url]: https://www.dotenv.org/
[eslint-url]: https://eslint.org/
[express-url]: https://expressjs.com/
[mocha-url]: https://mochajs.org/
[mongodb-url]: https://www.mongodb.com/
[mongoose-url]: https://mongoosejs.com/
[node-url]: https://nodejs.org/en/
[sinon-url]: https://sinonjs.org/

<!-- Contact URLs & Badges -->

[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:garciaguig@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/garciaagui/
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/garciaagui
[instagram-badge]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/garciaagui/
