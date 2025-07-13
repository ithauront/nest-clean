# 💬 Forum (Domain-Driven Design in Practice)

This project is a backend for a forum application where students and teachers can ask and answer questions. It was developed using Domain-Driven Design (DDD) principles to ensure a clear separation of concerns, maintainable business logic, and a shared understanding of the domain across all parts of the code.

## 📂 Architecture Overview

The project is structured into 3 main layers:

  ### core/

   * Entities & Aggregates: Base abstractions like ```Entity```, ```AggregateRoot```, and ```UniqueEntityId```, used to build the domain model.

   * WatchedList: A utility for tracking changes in collections (new, removed, current), useful when modeling aggregate roots with related items.

   * Either Monad: Implements functional error handling with ```left()``` and ```right()``` methods, ensuring predictable return values across use cases.

   * Domain Events System: Contains ```DomainEvent```, ```DomainEvents``` and ```Event-handler```, allowing entities to emit events.

   * Custom Errors: Domain-specific error classes such as ```ResourceNotFoundError``` and ```UnauthorizedError```.

   * Pagination Utility: The ```PaginationParams``` type is used for paginated repository queries.

### domain/

The domain layer is divided into two subdomains: ```forum/``` and ```notification/```, each structured into two parts: ```enterprise/``` and ```application/```.

#### Forum Domain

 * Enterprise Layer:

    ** Entities: Domain entities such as ```Answer```, ```Question```, ```Comment```, ```Attachment```, each encapsulating core business rules.

    ** Value Objects: Represent values that are defined by their attributes rather than identity, like ```Slug```.

    ** Events: Domain events such as ```AnswerCreatedEvent``` and ```QuestionBestAnswerChosenEvent``` are emitted by aggregates and handled asynchronously.

 * Application Layer:

    ** Uploader Contract – Uploader and UploaderParams interfaces define a boundary for file upload logic, allowing infrastructure to be swapped without touching domain logic.

    ** Cryptography Contracts – Abstracts for hashing and token encryption used by the authentication layer.

     ** Use Cases: Encapsulate business logic for each action following the application service pattern.

     ** Repository Contracts: Interfaces define the contract between the ```domain``` and ```infrastructure``` layers — including methods like ```findById```, ```findManyByQuestionId```, ```create```, ```save```, ```delete```.

     ** Testing: All use cases are covered by tests using Vitest, with in-memory repositories and factory helpers like ```makeQuestion()```.

#### Notification Domain:

   * Enterprise Layer:

      **  Entities: Includes the ```Notification``` entity, with behavior like ```read()``` for marking as read.

   * Application Layer:

       ** Use Cases: Business logic which includes domain validation.

       ** Repository Contracts: Interfaces that define operations for interacting with notification data.

       ** Subscribers: Event handlers that listen for domain events and trigger side effects like sending notification.

### infra/
The ```infra/``` layer contains the implementation details and adapters that connect the application and domain layers to external services like the database, Redis, file storage, and HTTP transport.

* **auth**: JWT authentication strategy using RS256, with custom decorators (`@CurrentUser`, `@Public`) and global guards.

* **cache**: Provides a simple caching mechanism using Redis. Includes a generic `CacheRepository` interface and its implementation using `ioredis`, encapsulated via `RedisService`. Exposes the `CacheModule` for use across the application.

* **cryptography**: Provides abstractions and implementations for authentication-related cryptography. Includes `BcryptHasher` for password hashing and comparison, and `JwtEncrypter` for creating signed tokens. All dependencies are exposed via the `CryptographyModule`.

* **database**: Implements the infrastructure layer for data persistence using Prisma ORM. Includes:

  - **PrismaService**: Extends `PrismaClient` and manages lifecycle hooks (`onModuleInit`, `onModuleDestroy`).

  - **Repositories**: Implements repository contracts defined in the domain layer (e.g., `AnswersRepository`, `QuestionsRepository`) using Prisma. All bindings are registered via the `DatabaseModule`.

  - **Mappers**: Converts domain entities to Prisma models and vice versa, encapsulating serialization logic between layers.

  - **DatabaseModule**: Provides a centralized module that registers all repository providers and exports them for dependency injection across the application.

* **env**: Handles environment configuration in a strongly-typed and centralized way.

* **events**: Registers all event subscribers that react to domain events emitted by entities or use cases.

  - Each provider in the `EventsModule` corresponds to a class responsible for handling a specific domain event.
  - These subscribers typically perform side effects, such as sending notifications, persisting logs, or triggering workflows.


* **http**: Contains the application's HTTP layer, responsible for handling incoming requests and sending responses.

  - **Controllers**: Route HTTP requests to appropriate use cases in the application layer.
  - **Pipes**: Like `ZodValidationPipe`, used to validate and transform incoming data using Zod schemas, throwing appropriate HTTP errors when invalid.
  - **Presenters**: Format domain entities or value objects into plain JSON structures suitable for HTTP responses, promoting separation between internal models and API contracts.

* **storage**: Responsible for handling file uploads.

  - Uses the `Uploader` interface from the domain layer to abstract the upload mechanism.
  - The implementation `r2Storage` uses the AWS S3-compatible API to upload files to Cloudflare R2.
  - Each uploaded file is given a unique name using a UUID to avoid collisions.

### 📂 Additional Project Structure

Beyond the ```src/core/``` and ```src/domain/``` layers, the project also includes:

#### prisma/

Contains the Prisma schema, responsible for defining the database models such as User, Question, Answer, Comment, Attachment, and Notification. These models reflect real-world relationships and constraints used in the forum's persistence layer.

#### test/

A well-structured test suite that ensures code correctness and coverage:

   * cryptography/: Contains mock implementations like FakeHasher and FakeEncrypter to simulate password hashing and encryption during tests.

   * E2E/: Includes files and fixtures for full end-to-end testing, such as sample-upload.pdf.

   * factories/: Functions like makeQuestion() and makeUser() simplify the creation of test entities.

   * repositories/: In-memory implementations of real repositories to isolate unit/integration tests from external systems.

   * storage/: A FakeUploader to simulate file uploads in tests.

   * utils/: Utility helpers like waitFor() that assist with asynchronous assertions.

## 🚀 Getting Started

⚠️ Prerequisites

Before setting up the project, make sure you have:

   * ✅ An AWS S3 bucket and credentials

   * ✅ A Cloudflare account with an image service or R2 configured

   * ✅ A pair of JWT RSA keys (private_key.pem and public_key.pem) placed at the root of the project

To generate the .pem files locally for development, you can use:
```bash
openssl genrsa -out private_key.pem 2048
openssl rsa -in private_key.pem -pubout -out public_key.pem
```

1. Clone the repository
```bash
git clone https://github.com/ithauront/nest-clean.git
cd nest-clean
```
2. Install dependencies
```bash
npm install
```

### 🔐 JWT Key Setup (Base64)

After creating the .pem key files, you need to encode them as base64 and add them to your .env.

Use the following commands:
```bash
# Generate base64-encoded PRIVATE KEY
base64 -w 0 private_key.pem
```
```bash
# Generate base64-encoded PUBLIC KEY
base64 -w 0 public_key.pem
```
ℹ️ On macOS, use base64 -b 0 instead of -w 0.


### 🛠️ Environment Variables Configuration
This project requires two environment files to run correctly: .env for development and .env.test for testing.

✅ 1. .env (Main configuration)

Create a file named .env in the root directory and paste the following content:
```bash
# 🗄️ Database
DATABASE_URL="postgresql://postgres:docker@localhost:5432/nest-clean?schema=public"

# 🔐 JWT Keys (base64-encoded)
JWT_PRIVATE_KEY="paste your base64 private key here"
JWT_PUBLIC_KEY="paste your base64 public key here"

# ☁️ Upload (Cloudflare/AWS)
AWS_BUCKET_NAME="your-aws-bucket-name"
CLOUDFLARE_ID="your-cloudflare-id"
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_KEY_ID="your-secret-key"
```

✅ 2. .env.test (Test override)

Create a file named .env.test in the root directory with the following content:
```bash
# Test environment overrides
AWS_BUCKET_NAME="ignite-nest-clean-test"
REDIS_DB=1
```

### 📦 Infrastructure & Database Setup

This project uses Docker for PostgreSQL and Redis.

 1. Start Docker containers

```bash
docker compose up -d
```

2. Set up the database

Run the migrations and generate the Prisma client:
```bash
npx prisma migrate dev
npx prisma generate
```


3. Run the app
```bash
npm run start:dev
```
This will start the NestJS app in development mode.

 
 ## 🧪 Running Tests

This project uses Vitest to run both unit/integration tests and end-to-end (E2E) tests.
### ▶️ Run All Tests (Unit + E2E)

 ```bash
npm run test
```
Runs all tests in the project, including unit and E2E.

### 🧪 Unit & Integration Tests
```bash
npm run test:watch
```
This runs unit and integration tests in watch mode. These tests:

* Use in-memory repositories

* Do not depend on external infrastructure (e.g., database or Redis)

* Cover use cases and services in isolation

###  📊 Test coverage
To generate test coverage:
```bash
npm run test:cov
```
### 🌐 End-to-End (E2E) Tests
```bash
npm run test:e2e
```
These tests simulate real application behavior and rely on the actual PostgreSQL and Redis services via Docker.

How it works:

*  Each test suite runs with an isolated PostgreSQL schema using a randomly generated schemaId

* Redis is flushed before each run to ensure clean state

* .env.test overrides environment variables, including:

   -  REDIS_DB

   -  AWS_BUCKET_NAME

* Your real DATABASE_URL is reused, but the schema is dynamically replaced

To run in watch mode:
```bash
npm run test:e2e:watch
```

### 🧪 Test Debugging (Optional)
```bash
npm run test:debug
```
Run tests with debugging tools enabled (e.g., --inspect), useful for tracking memory or logic issues.

💡 Note:  Ensure you have a .env.test file at the root of your project. Your .env is also loaded first, but .env.test overrides it for test runs.


## 🔧 Technologies Used

- **TypeScript** – Strongly typed language enhancing safety and developer experience
- **Node.js** – Runtime environment for executing backend logic
- **NestJS** – Scalable server-side framework for building efficient applications
- **Prisma** – Type-safe ORM for database access
- **PostgreSQL** – Relational database used in production
- **Redis** – In-memory store for caching and background processing
- **JWT** – JSON Web Tokens for authentication and authorization
- **Zod** – Runtime schema validation for request payloads
- **Vitest** – Unit and E2E testing framework
- **@faker-js/faker** – Fake data generator for testing
- **dayjs** – Lightweight date library
- **Docker** – Containerized local development environment
- **JWT with RSA (RS256)**  – Secure token authentication with private/public key encryption.
- **Cloudflare R2 / AWS S3** – For file attachments.
- **ioredis** – For efficient Redis interactions during runtime and testing.
- **dotenv** – To load and override configuration depending on the environment (.env, .env.test).
- **Custom wait-for utilities** – Robust test helpers like waitFor() to retry async expectations.
- **Passport.js** – Middleware for authentication with NestJS
- **bcryptjs** – For password hashing and comparison using the `BcryptHasher`
- **@nestjs/jwt** – For creating and verifying JWT tokens via `JwtService`
- **AWS SDK (S3)** - Used to interact with Cloudflare R2 storage via S3-compatible API.


## 📚 Concepts & Methodologies

Concepts and patterns applied in this project:

  * Domain-Driven Design (DDD) – Modeling software around real-world domain logic

  * Ubiquitous Language – Shared vocabulary between developers and domain experts

  * Entities, Value Objects, Aggregates – Tactical DDD patterns to express domain behavior and state

  * Repository Pattern – Abstracts persistence logic via interface contracts

  * Event-Driven Architecture – Decouples side effects through domain events and subscribers

  * Application Layer & Use Cases – Encapsulates business workflows and coordinates domain logic

  * Factory Functions for Testing – Simplifies test setup and promotes reusability

  * In-Memory Repositories – Isolates unit and integration tests from external dependencies

  * Dependency Injection - NestJS allows interfaces from the domain layer to be injected and implemented by concrete classes in the infrastructure layer.
  
  * Mappers - Converts between persistence models (Prisma) and rich domain objects, ensuring separation of concerns and adherence to DDD.

  * Presenters – A layer responsible for converting entities and value objects into clean HTTP responses, decoupling internal models from API output formats

  * Pipes – lasses like ```ZodValidationPipe``` used to validate and transform incoming data using Zod schemas, producing structured error messages.

  * Uploader Abstraction – The ```Uploader``` interface in the domain layer decouples the upload mechanism from the concrete infrastructure implementation.

  * Environment Module – A centralized and strongly-typed approach to manage environment variables using ```Zod``` and ```ConfigService```.

  * Module System - Each infrastructure concern is isolated in a module (`DatabaseModule`, `CacheModule`, etc.), promoting modularity and testability.


## 📘 What I Learned

Throughout this project, I had the opportunity to:

   * Apply Domain-Driven Design (DDD) in practice by modeling a real-world domain with entities, aggregates, and value objects.

   * Design and emit domain events to trigger side effects without tightly coupling logic.

   * Build and test use cases independently using in-memory repositories and factory helpers.

   * Practice clean architectural boundaries by separating enterprise logic from application services.

   * Understand the importance of ubiquitous language and modeling behavior over data shape.

   *  How to mock cryptographic services and upload providers for testing.

   * The value of test doubles (e.g., in-memory repositories, fake uploaders) to write fast and deterministic tests.

   * Managing test isolation using PostgreSQL schemas and Redis flushes.

   * Writing utilities like waitFor() to handle asynchronous logic in tests with better resilience.

   * Using .env.test to override behavior during testing without affecting local development.
   
   * How to implement authentication based on JWT with RS256 using @nestjs/jwt

   * The importance of guards and decorators

   * Aply Passport strategy

   * How to abstract caching with a repository interface and implement it using Redis via `ioredis`.

   * Implemented cryptographic services for hashing and token generation using `bcryptjs` and `@nestjs/jwt`, exposing them through a modular and testable interface.
 
   * Implement repository pattern with Prisma, using mappers to convert between domain entities and persistence models.

   * Register and export dependencies through a centralized NestJS module (`DatabaseModule`).

   * Manage resource lifecycle using `OnModuleInit` and `OnModuleDestroy` with Prisma.

   * Apply Dependency Injection by binding domain-level contracts to infrastructure implementations.

   * Integrate event subscribers using NestJS modules to decouple domain logic from side effects.

   * Structure an event-driven architecture that responds to changes in the domain model using asynchronous subscribers.

   * Structure a clean and modular HTTP layer using controllers, pipes, and presenters.
    
   * Decouple domain models from API responses using presenter classes.
  
   * Abstract file uploads with an interface (`Uploader`) and implement it using a cloud provider.
  
   * Configure Cloudflare R2 with AWS SDK and NestJS using dependency injection.

