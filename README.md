# Full Stack CRUD Application - User Management System

## 📝 Project Overview
This web application allows users to **Create, Read, Update, and Delete (CRUD)** user records using:
- **Node.js & Express** (Backend)
- **MongoDB** (Database)
- **Pug** (Frontend)
- **Bootstrap 5** (UI Styling)

## 🚀 Installation & Setup Guide
### **1️⃣ Prerequisites**
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/)

### **2️⃣ Clone the Repository**
```sh
git clone git@github.com:manavpatel1310/fullstack_crud.git
cd fullstack_crud

# Full Stack CRUD Application - User Management System

## 🚀 Installation & Setup Guide

### 3️⃣ Install Dependencies
Inside the project directory, install the required Node.js packages:

```sh
npm install

### **4️⃣ Configure MongoDB Connection**
#### Option 1: Using Local MongoDB
To connect to a local MongoDB server, configure the `.env` file in the project root with the following URI:
```ini
MONGO_URI=mongodb://127.0.0.1:27017/userDB

### Ensure MongoDB is running locally:
To ensure MongoDB is running on your system, open your terminal and execute the following command:
```sh
mongod

### **5️⃣ Start the Server**
Once MongoDB is running, you can start the Node.js server. Run the following command in your project's root directory:
```sh
npm start


## 📌 How to Use

### 🏠 Home Page (`/`)
The home page displays all users in a table format, showing their basic details.
- **Add User**: Click the "Add User" button to navigate to the form for creating a new user record.
- **Edit**: Next to each user listed, there is an "Edit" button to update that user's information.
- **Delete**: There is also a "Delete" button to remove the user from the database.

### ➕ Add User Page (`/users/add`)
This page provides a form to enter a new user's details (name, address, contact info, etc.).
- **Submit**: Fill in all the required fields and click "Submit" to add the user. Upon successful creation, you will be redirected back to the Home page where the new user will appear in the list.

### ✏️ Update User Page (`/users/update/:id`)
This page is similar to the Add User page but is pre-filled with the selected user's current information.
- **Update User**: Modify any of the user's details in the form and click "Update User" to save the changes. You will be redirected to the Home page, and the table will reflect the updated info.
- **Delete**: You can also delete the user from this page by clicking the "Delete" button, which will remove the user and return you to the Home page.


## 👨‍💻 Developer Notes

- **Database Connection**:
  - **Local MongoDB**: Make sure MongoDB is running before starting the Node.js server. Use the command `mongod` to start the MongoDB service on your local machine.
  - **MongoDB Atlas**: If using MongoDB Atlas, ensure your connection string is correct and that your IP address is whitelisted to prevent unauthorized access.

- **Security Practices**:
  - **Strong Credentials**: Use strong usernames and passwords for MongoDB Atlas, especially in production or shared environments.
  - **Environment Variables**: Avoid hard-coding sensitive information like database credentials directly in your code. Instead, use environment variables to manage this data securely. Store these in a `.env` file, which should be excluded from version control by adding it to your `.gitignore` file.
  - **Protect Sensitive Data**: Never expose your database credentials or any other sensitive data in public repositories to maintain the security integrity of your application.

- **API Testing**:
  - **Postman**: Use Postman or a similar API client to test the backend API endpoints separately during development or debugging. This helps to isolate and troubleshoot issues with specific API operations such as GET, POST, PUT, and DELETE requests to your server.

These practices help ensure the secure and efficient operation of your application's backend, especially when dealing with user data and database interactions.
