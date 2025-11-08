# IFSD-Miniproject 
# Community Event Planner

## Project Overview
**Community Event Planner** is a full-stack web application designed to help users organize, manage, and track community events efficiently. It provides a **user-friendly interface** for event creation, participant management, and event tracking, along with secure user authentication.  

The project uses a **React frontend** and a **Node.js/Express backend with MongoDB**, providing a modern, scalable architecture for real-world applications.

---

## Features

### Frontend Features
- Responsive design for desktop and mobile.
- User authentication: Signup and Login.
- Event creation, editing, and deletion.
- Event overview with cards displaying key information.
- Protected routes for authenticated users.
- Profile page to manage user details.
- Reusable components: Navbar, Footer, EventCard, ProtectedRoute.

### Backend Features
- RESTful API for users and events.
- Secure authentication using JWT.
- Role-based access control (optional).
- MongoDB schemas for users and events.
- Middleware for authentication and request validation.
- Utility functions for helpers like sending emails or input validation.

---

## Technologies Used
- **Frontend:** React, Vite, HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Authentication:** JWT  
- **Version Control:** Git & GitHub  
- **Environment Variables:** dotenv  

---

## Folder Structure

### Backend
backend/
│
├── server.js # Entry point for backend server
├── package.json # Backend dependencies
├── .env # Environment variables
│
├── config/
│ └── db.js # MongoDB connection setup
│
├── models/
│ ├── userModel.js # User schema
│ └── eventModel.js # Event schema
│
├── routes/
│ ├── userRoutes.js # User API endpoints
│ └── eventRoutes.js # Event API endpoints
│
├── controllers/
│ ├── userController.js # Handles user-related logic
│ └── eventController.js# Handles event-related logic
│
├── middleware/
│ └── authMiddleware.js # JWT authentication middleware
│
└── utils/
└── helper files (e.g., validators.js, sendEmail.js)


### frontend
frontend/
│
├── package.json # Frontend dependencies
├── vite.config.js # Vite configuration
│
├── public/
│ └── index.html # Main HTML file
│
└── src/
├── main.jsx # Frontend entry point
├── App.jsx # Main React component
│
├── assets/ # Images and logos
│ └── logo.png
│
├── components/ # Reusable UI components
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── ProtectedRoute.jsx
│ └── EventCard.jsx
│
├── pages/ # Individual pages
│ ├── Signup.jsx
│ ├── Login.jsx
│ ├── Home.jsx
│ ├── Events.jsx
│ ├── EventDetails.jsx
│ ├── CreateEvent.jsx
│ └── Profile.jsx
│
├── context/ # React Context API
│ └── AuthContext.jsx
│
├── services/ # API calls
│ └── api.js
│
└── styles/ # CSS files
├── index.css
└── theme.css
