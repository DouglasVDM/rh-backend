# Express Backend

## Description
This is the backend of the PERN Stack application. It is built using Express and provides the API endpoints for fetching word types, words, and submitting sentences.

[![Node.js CI/CD](https://github.com/DouglasVDM/rh-backend/actions/workflows/node.js.yml/badge.svg)](https://github.com/DouglasVDM/rh-backend/actions/workflows/node.js.yml)

## Installation
1. Clone the repository. `git clone ...`
2. Navigate to the `backend` directory. `cd backend`
3. Run the following command to install the dependencies: `npm install`
4. Update the database connection configuration in the `.env` file.

```sql
PORT                =   <serverPort eg.5000>
POSTGRES_HOST       =   <dependingOnEnvironment eg.localhost>
POSTGRES_USER       =   <postgresUsername>
POSTGRES_PASSWORD   =   <postgresUserPassword>
POSTGRES_PORT       =   <standardDBPort = 5432>
POSTGRES_DB         =   <postgresDatabaseName>
```

5. Start the backend server with the following command: `npm run dev` or `npm start`
6. The server will run on [http://localhost:5000](http://localhost:5000).

## API Endpoints
- `GET /api/v1/wordtypes`: Retrieves the list of word types.
- `GET /api/v1/${selectedType}`: Retrieves words of a specific type.
- `GET /api/v1/sentences`: Retrieves all previously submitted sentences.
- `POST /api/v1/sentences`: Submits a new sentence.

## Dependencies
- Express
- Cors
- pg (PostgreSQL client)
- dotenv (for environment variables)
---
---
# Database (PostgreSQL)

## Description
This is the PostgreSQL database used for storing word types, words, and submitted sentences.

## Installation
1. Install PostgreSQL on your system if not already installed.
2. Create a new database for the application.
3. Update the database connection configuration in the `.env` file of the backend.
4. In my case, I have used the official postgres docker image to run in a container
```
 docker run --name <nameOfTheContainer> -e POSTGRES_PASSWORD=<databaseUserPassword> -p 5432:5432 -d postgres`
```
5. To stop the container: `docker stop <nameOfTheContainer>` 
6. To start the container: `docker start <nameOfTheContainer>` 

## Database Schema
The database schema consists of the following tables:
 see the `database.sql` file

## Sample Data
You can use the following SQL statements to insert sample data into the tables:
 see the `database.sql` file

## Stretch Goals
1. Implement Express Router, server.js file is becoming bloated
2. Add PUT, DELETE sentences routes to complete CRUD operations
3. 
---
---

