#  Backend Project

This is the backend assesment project built with TypeScript, Prisma ORM, and MySQL as the database.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v14 or higher)
- MySQL
- npm or yarn

## Getting Started

### 1. Clone the repository

```bash
https://github.com/MohdMusaiyab/Accredian-backend-task
cd Accredian-backend-task
```
### 2. Create your own Database and set up the environment variable in the .env file as mentioned in .env.sample file.
 ### 3. Install the Dependencies and Set up Prisma
 ```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
```
### 5. Run the Project
```bash
npm run dev
