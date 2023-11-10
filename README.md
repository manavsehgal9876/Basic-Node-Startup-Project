# Node.js Starter Project

## Project Setup

### 1. Installation

#### Welcome to my Node.js Starter Project, a robust foundation for building web applications using Express.js. This project is designed to streamline your development process, providing a solid starting point for creating powerful and scalable web applications.

Create a database for your project.
Set the database name in the .env file as follows:
DATABASE_URL="mysql://root:password@localhost:3306/yourdbname?schema=public"

Accessing the Project
Once the project is running, navigate to the following URL in your browser:

http://127.0.0.1:3000/admin/login

Author
Manav Sehgal

To install the project dependencies, run the following command in the project root:

```bash
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm start
