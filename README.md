# Contact Management App

This is a full-stack Contact Management application built with React for the frontend, Express.js for the backend, and a MongoDB database to store contact information. The application allows users to add, edit, and manage contacts.

The frontend uses Material-UI for the user interface, and the backend is powered by Express.js, providing an API for CRUD operations on contacts.

## Features

- **Add New Contact**: Users can add new contacts with required fields like First Name, Last Name, Email, and Phone Number.
- **Edit Existing Contact**: Users can edit the details of an existing contact.
- **Delete Contact**: Users can delete contacts.
- **Validation**: The form includes real-time validation for email and phone numbers, showing errors when fields are incorrectly filled.
- **Responsive Design**: The app is responsive and adapts to different screen sizes.
- **Success Notification**: Upon saving or editing a contact, a success message is shown using a Snackbar.
- **Backend API**: A REST API is provided for handling CRUD operations on contacts.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: Component library for React that provides a set of UI components.
- **Axios**: HTTP client for making API requests.
- **JavaScript (ES6+)**: Modern JavaScript features like hooks (useState, useEffect) for managing state and lifecycle events.
- **CSS-in-JS (Material-UI's `sx` prop)**: For styling components.

### Backend

- **Node.js**: JavaScript runtime environment for the backend.
- **Express.js**: Web framework for Node.js to build the API.
- **MongoDB**: NoSQL database to store contact information.
- **Mongoose**: ODM (Object Document Mapper) to interact with MongoDB from Node.js.
- **Cors**: Middleware to enable cross-origin requests.

## Installation

### 1. Clone the Repository


```bash
git clone https://github.com/aravindinduri/Erino-assignment.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies for both the frontend and backend:

#### Frontend

```bash
cd client
npm install
```
### Backend
``` bash
cd server
npm install
```
### 3.Set Up Environment Variables
Create a .env file in the server directory and add the following variables.
```bash
MONGO_URI=<Your MongoDB connection URI>
PORT=5000
```
### 4. Run the Application
Backend
Start the backend server:
``` bash
npm run dev
```
### Frontend
In a new terminal window, go to the client directory and run the frontend.
``` bash
npm run dev
```

### Images
![Screenshot](https://i.ibb.co/6XrtZ1s/Screenshot-from-2024-11-15-22-13-46.png)
![Screenshot](https://i.ibb.co/j4HmVfv/Screenshot-from-2024-11-15-22-13-38.png)
