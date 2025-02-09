# E-commerce Application: Product & Order APIs 🦊

This repository contains the backend services for an e-commerce application, including APIs for managing **products** and **orders**. It is built with **Node.js**, **TypeScript**, and **PostgreSQL**.

## Prerequisites

Before you get started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: LTS)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [ESLint](https://eslint.org/) for linting (Optional, but recommended)
- Familiarity with **TypeScript** 💪

## Getting Started

### Clone the Repository

Clone this repository to your local machine using HTTPS, SSH, or GitHub CLI.

```sh
git clone <your-repository-url>
```

### Environment Configuration
After cloning the repo, duplicate the `.env.example` file and rename it to `.env`. This file will store environment variables required for your application. Do not delete or rename `.env.example`.

```sh
cp .env.example .env
```

Ensure that your `.env` file contains the correct configuration for your environment.

### Running with Docker

You can run the application using Docker Compose to set up the services quickly. To start the containers, simply run:

```sh
docker compose up
```

This will build the images and start the following services:

* product-apis: The API for managing products.
* order-apis: The API for managing orders.
* db: A PostgreSQL database used by the services.

### Seed data

To seed data for orders, products, and order-products, follow these steps:

1. Navigate to the `product-apis` directory:

```sh
cd product-apis
```

2. Run the seed script:
```sh
npm run seed
```

### Run migrations

To create the required tables (`orders`, `products`, `order-products`), follow these steps:

1. Navigate to the product-apis directory:

```sh
cd product-apis
```

2. Run the migration script:
```sh
npm run migrate
```

### Run Services Manually (Without Docker)

If you prefer to run the services individually for local development, you can do so by running each service separately:

#### Order Service

1. Navigate to the order-apis directory:

```sh
cd order-apis
```

2. Install dependencies:

```sh
npm install
```

3. Start the service in development mode:

```sh
npm run dev
```

#### Product Service

1. Navigate to the product-apis directory:

```sh
cd product-apis
```

2. Install dependencies:

```sh
npm install
```

3. Start the service in development mode:

```sh
npm run dev
```

### Installing Dependencies

To install the dependencies for both services (if you're not using Docker), run the following command in the root directory of the project:

```sh
npm install
```

This will install the necessary packages for the product-apis and order-apis services.

### Useful Commands

* Build & Start with Docker:

```sh
docker compose up --build
```

* Stop the Docker Containers:

```sh
docker compose down
```
