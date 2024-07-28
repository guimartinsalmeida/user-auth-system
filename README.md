
# User Auth Simple Platform
This project aims to create a simple authentication system using Node.js and Express. The system allows for user creation, login, updating, and deletion, as well as authentication via JSON Web Token (JWT). The application includes basic frontend functionality for testing, but the main interaction happens via backend and tools like Postman.

**Live Demo**:
comming soon ](...).🚧

## 🛠️ Tech Stack

**Node.js;** **Express;**  **Vercel;** **JWT (JSON Web Token);**  **bcrypt;** **BodyParser**🛠️
## Project Status 

The project is currently in development. 🚧

## 🚀 Features

### Basic Requirements
- [x] **Set Up MongoDB Database:** Configured and connected a MongoDB database for user data storage.
- [x] **Install Dependencies:** Installed `express` and `nodemon` packages via npm.
- [x] **Start Server:** Initiated the server with the command `nodemon server.js`.
- [x] **Create User Schema:** Created a user schema in the database for handling user data.
- [x] **CRUD Operations:** Implemented create, read, update, and delete operations for user management.

### Authentication Features
- [x] **User Registration:** Implemented `POST /register` endpoint for user creation.
- [x] **User Login:** Implemented `POST /login` endpoint for user authentication and JWT generation.
- [x] **Update User Information:** Implemented `PUT /users/:id` endpoint to update user details.
- [x] **Delete User:** Implemented `DELETE /users/:id` endpoint for user deletion.
- [x] **Password Hashing:** Used `bcrypt` to hash user passwords for security.
- [x] **JWT Authentication:** Added middleware to protect routes using JWT.

### Advanced Features
- [x] **Admin Authentication:** Implement `GET /admin` endpoint protected by JWT middleware for admin access.
- [x] **User List Display:** Implement `GET /users` endpoint to display all registered users, protected by JWT.
- [x] **Populate Database:** Create an admin user in the database for initial testing.
- [ ] **Login Form:** Create a simple web interface using EJS for user login.
- [ ] **Logout Functionality:** Implement `GET /logout` endpoint to handle user logout.

## Authors

- [guimartins](https://www.github.com/guimartinsalmeida)

