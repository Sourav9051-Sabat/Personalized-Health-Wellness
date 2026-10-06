# Personalized Health & Wellness Platform

A full-stack MERN application that provides users with personalized health profiles, workout plans, workout tracking, and progress monitoring.

## Features

* User registration and login
* JWT-based authentication
* Secure password hashing with bcrypt
* Personalized health profile
* Personalized workout plan generation
* Create, edit, and delete workouts
* Mark workouts as completed
* Workout progress tracking
* Dashboard with fitness progress
* MongoDB Atlas database
* RESTful APIs
* Responsive React frontend

## Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* REST API

### Database

* MongoDB Atlas

## Project Structure

```text
Personalized-Health-Wellness
│
├── Backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   └── pages
│   └── package.json
│
├── .gitignore
└── README.md
```

## How It Works

1. User creates an account.
2. User logs in securely using JWT authentication.
3. User creates a health profile.
4. The application generates a personalized workout plan based on the user's health information and fitness goal.
5. User can create, edit, delete, and complete workouts.
6. Completed workouts are tracked.
7. The dashboard displays overall workout progress.

## Authentication

The application uses:

* JWT for authentication
* bcryptjs for password hashing
* Protected API routes
* Token-based authorization

## API Modules

The backend provides APIs for:

* Authentication
* Health Profile
* Personalization
* Workouts
* Workout Tracking
* Progress

## Future Improvements

* Nutrition recommendations
* Exercise video demonstrations
* AI-powered health recommendations
* Workout reminders
* Progress charts
* Admin dashboard
* Cloud deployment

## Author

**Satabdi Sourav Sabat**

B.Tech CSE-AI Student | MERN Stack Developer

GitHub: [Sourav9051-Sabat](https://github.com/Sourav9051-Sabat)

LinkedIn: [Satabdi Sourav Sabat](https://www.linkedin.com/in/satabdi-sourav-sabat-791705311/)
