<a name="readme-top"></a>

<h1 align="center">Project Car Shop 🚙🛵</h1>

> [🇧🇷 Clique aqui para acessar a versão em português.](README_pt-br.md)

## Summary

<ol>
  <li><a href="#description">Description</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#how-to-run">How to Run</a></li>
  <li><a href="#endpoints">Endpoints</a></li>
  <li><a href="#about-trybe">About Trybe</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

## Description

**27th project** of the [Trybe][trybe-site-url] Web Development course.

In this project, an API for managing a vehicle dealership was developed, which allows the creation, viewing, updating, and deletion (CRUD) of cars and motorcycles.

The application was developed using Node.js and TypeScript, and the chosen database was MongoDB. The connection to the database was made through the Mongoose framework, an Object-Document Mapping (ODM) that facilitates interactions with MongoDB.

To ensure code quality, important software development principles such as OOP (Object-Oriented Programming), SOLID and DDD (Domain Driven Design) were applied. This makes the application more scalable and performant.

To guarantee that the code works properly, unit tests were created with the BDD (Behavior-driven development) approach. This process ensures that the application is always in good condition and ready to receive updates.

<br/>

## Technologies

<details>
  <summary><strong>💻 Development </strong></summary><br />

- [Docker][docker-url]
- [dotenv][dotenv-url]
- [Express][express-url]
- [Node.js][node-url]
- [MongoDB][mongodb-url]
- [Mongoose][mongoose-url]
- [Typescript][typescript-url]

---

</details>

<details>
  <summary><strong>🧪 Testing </strong></summary><br />

- [Chai][chai-url]
- [Mocha][mocha-url]
- [Sinon.js][sinon-url]

---

</details>

<details>
  <summary><strong>✨ Code alignment and quality </strong></summary><br />

- [ESLint][eslint-url]

---

</details>

<br/>

## Features

<ul>
  <li>Create, list, update, and delete cars.</li>
  <li>Create, list, update, and delete motorcycles.</li>
</ul>

<br/>

## How to Run

To run the project, follow the steps below.

1. Clone the repository;

```
git clone git@github.com:garciaagui/car-shop.git
```

2. Navigate to the project root;

```
cd car-shop/
```

> ⚠️ Now, decide whether the project will be run locally or via Docker.

<details>
  <summary><strong>💽 Locally</strong></summary>

1. Make sure you have **Node.js** installed in version 16 or higher. Check out the [official documentation](https://nodejs.org/en/download/package-manager) for more information.

2. In the project root, install the project dependencies.

```
npm install
```

3. Configure the environment variables:

- Rename the `.env.example` file (available in the project root) to `.env`;
- Set the variables for your local environment.

4. Start the server:

```
npm run dev
```

- To run the tests, you can use the two commands below.

```
// Command 1
npm run test:mocha

// Command 2 - In this command you have access to the test coverage
npm run test:coverage
```

</details>

<details>
  <summary><strong>🐋 Docker</strong></summary>
  
1. Make sure you have **docker-compose** installed in version 1.29 or higher. Useful links if you need to install or update: [DigitalOcean Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04) and [official documentation](https://docs.docker.com/compose/install/);

2. Bring up the containers by running the command below. Two containers will be initialized: `car_shop` (node) and `car_shop_db` (mysql).

```
docker-compose up -d --build
```

3. Access the CLI of the `car_shop` container with the command below or open it in VS Code. For the latter option, I recommend the Microsoft extension [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

```
docker exec -it car_shop bash
```

> ⚠️ From now on, **ALL** commands (scripts) available in `package.json` (including npm install) must be executed **INSIDE** the `car_shop` container.

4. Install the project dependencies.

```
npm install
```

5. Start the server:

```
npm run dev
```

- To run the tests, you can use the two commands below.

```
// Command 1
npm run test:mocha

// Command 2 - In this command you have access to the test coverage
npm run test:coverage
```

- For the local test context, follow the steps below:

1. Rename the `.env.example` file (available in the project root) to `.env`;
2. Set the variables for your local environment.

</details>

<br/>

## Endpoints

Below you can find a breakdown of the endpoints used in the project. To make HTTP requests and check the behavior of each endpoint, you can use the [Thunder Client](https://www.thunderclient.com/) extension.

> ℹ️ For all endpoints that require the id of cars and motorcycles, note that the id is an `ObjectId`. Learn more about ObjectId [here](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid).

<details>
  <summary><strong>Cars</strong></summary>

### GET /cars

- Returns all cars registered in the database.
- URL: `http://localhost:PORT/cars`

### POST /cars

- Adds a new car to the database.
- URL: `http://localhost:PORT/cars`
- The request body must follow the format below:

```
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true, // Not required. If not inserted, the value of status will be 'false'
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

### GET /cars/:id

- Returns the car whose id was passed in the URL.
- Example URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`

### PUT /cars/:id

- Updates the car whose id was passed in the URL.
- Example URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`
- The request body must follow the format below:

```
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true, // Not required. If not inserted, the value of status will be 'false'
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

### DELETE /cars/:id

- Removes from the database the car whose id was passed in the URL.
- Example URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`

---

</details>

<details>
  <summary><strong>Motorcycles</strong></summary>

### GET /motorcycles

- Returns all motorcycles registered in the database.
- URL: `http://localhost:PORT/motorcycles`

### POST /motorcycles

- Adds a new motorcycle to the database.
- URL: `http://localhost:PORT/motorcycles`
- The request body must follow the format below:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true, // Not required. If not inserted, the value of status will be 'false'
  "buyValue": 30.000,
  "category": "Street", // Accepted values: "Street", "Custom" or "Trail"
  "engineCapacity": 600
}
```

### GET /motorcycles/:id

- Returns the motorcycle whose id was passed in the URL.
- Example URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`

### PUT /motorcycles/:id

- Updates the motorcycle whose id was passed in the URL.
- Example URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`
- The request body must follow the format below:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true, // Not required. If not inserted, the value of status will be 'false'
  "buyValue": 45.000,
  "category": "Street", // Accepted values: "Street", "Custom" or "Trail"
  "engineCapacity": 600
}
```

### DELETE /motorcycles/:id

- Removes from the database the motorcycle whose id was passed in the URL.
- Example URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`

---

</details>

<br/>

## About Trybe

_"[Trybe][trybe-site-url] is a future school for anyone who wants to improve their lives and build a successful career in technology, where the person only pays when they get a good job."_

_"The program features over 1,500 hours of online classes covering introduction to software development, front-end, back-end, computer science, software engineering, agile methodologies, and behavioral skills."_

<br/>

## Contact

Project developed by **Guilherme Garcia**. Below are my social networks and means of contact. 🤘

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
[typescript-url]: https://www.typescriptlang.org/

<!-- Contact URLs & Badges -->

[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:garciaguig@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/garciaagui/
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/garciaagui
[instagram-badge]: https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white
[instagram-url]: https://www.instagram.com/garciaagui/
