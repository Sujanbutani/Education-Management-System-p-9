# Education Management System API

This is the backend API for an Education Management System built using Node.js, Express, and MongoDB. The API provides endpoints for user authentication, course management, enrollment management, and grade management.

## Features

- User authentication with JWT (JSON Web Tokens)
- Role-based access control (Admin, Teacher, Student)
- Course management (create, update, delete courses)
- Enrollment management (enroll or remove students)
- Grade management (assign and view grades)
- Course analytics (aggregate statistics)

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- dotenv
- nodemon

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sujanbutani/Education-Management-System-p-9.git

2. Install dependencies:

    ```bash
    npm install

3. .env file

     ```
    MONGO_URI=your_mongo_db_connection_string
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    BCRYPT_SALT_ROUNDS=10
    ```

4. Start the development server:

   ```bash
   npm start
   The server should now be running at http://localhost:5000
   ```

## API Endpoints

### User Authentication
1. SingUp User (Post) :- localhost:5000/api/auth/signup
2. Login User (Post) :- localhost:5000/api/auth/login

### Course Management
1. Course Api (Post) :- localhost:5000/api/courses
    - Requires JWT token in the Authorization header.
3. Course Api (Get - All) :-  localhost:5000/api/courses
4. Course Api (PATCH - Update) :- localhost:5000/api/courses/<courses_Id>
5. Course Api (Delete) :- localhost:5000/api/courses/<courses_Id>

### Enrollment Management
1. Enrollment Api (Post) :- localhost:5000/api/enrollments/enroll/<courses_Id>
    - Requires JWT token in the Authorization header.
3. Enrollment Api (Get - All) :-  localhost:5000/api/enrollments/my-enrollments

### Grade Management
1. Grade Api (Post) :- localhost:5000/api/grades
    - Requires JWT token in the Authorization header.
3. Grade Api (Get - All) :-  localhost:5000/api/grades/<courses_Id>

## Environment Variables
- PORT: The port for the server to listen on.
- MONGO_URI: Your MongoDB connection string.
- JWT_SECRET: Secret key for signing JWT tokens.
- BCRYPT_SALT_ROUNDS: Number of rounds for bcrypt password hashing.