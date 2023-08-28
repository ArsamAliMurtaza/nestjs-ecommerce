<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
## E-commerce Backend with Nest.js and MongoDB

This application is a backend system for an e-commerce platform built using Nest.js and MongoDB. It provides the foundational infrastructure for managing products, user authentication, and shopping carts. The application leverages the power of Nest.js, a Node.js framework, and MongoDB, a NoSQL database, to create a basic and scalable backend solution for e-commerce functionality.

Key Features:

    Product Management:
    Products can be added, retrieved, updated, and deleted through API endpoints. Each product has attributes such as name, description, price, and category.

    User Authentication:
    User registration and login are supported. Users can sign up with usernames, email addresses, and passwords. Authentication is secured using JWT (JSON Web Tokens) for token-based authentication.

    Role-Based Access Control:
    Users are assigned roles such as "user," "admin," or "member." Role-based access control ensures that only authorized users can perform certain actions, enhancing security and user experience.

    Shopping Cart:
    Users can add items to their shopping carts and remove items from them. The application supports user-specific shopping carts, ensuring personalized shopping experiences.

Technology Stack:

    Framework: Nest.js
    Database: MongoDB
    Authentication: JWT (JSON Web Tokens)
API Endpoints and How They Work:

    Product Endpoints:
        GET /store/products: Retrieves a list of all products or applies filters if provided.
        GET /store/products/:id: Retrieves details of a specific product based on its ID.
        POST /store/products: Adds a new product with details provided in the request body.
        PUT /store/products/:id: Updates details of a specific product.
        DELETE /store/products/:id: Deletes a product based on its ID.

    User Authentication Endpoints:
        POST /auth/register: Allows users to register by providing a username, email, password, and roles.
        POST /auth/login: Allows users to log in with their credentials, returning a JWT token for authorization.

    Cart Endpoints:
        POST /cart: Adds an item to the user's shopping cart, requiring authentication.
        DELETE /cart: Removes an item from the user's shopping cart, requiring authentication.
        DELETE /cart/:id: Deletes the entire shopping cart of a user, requiring authentication.
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
