# Task Management System

A full-stack Task Management System built as part of the Cleanomatics Full-Stack Developer Assignment.

The application allows users to create, view, edit, and delete tasks through a React frontend connected to a Node.js and Express.js REST API.

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Node.js
- Express.js
- CORS
- dotenv

### Storage
- In-memory JavaScript array

No external database is used, as required by the assignment.

---

## Features

- Create a new task
- View task details
- Edit an existing task
- Delete a task
- Task status management
- Task priority management
- Due date
- Created and updated timestamps
- Form validation
- Loading state
- Empty state
- Error handling
- Responsive UI
- RESTful API
- Clean backend separation using routes, controllers, and services

---

## Task Structure

Each task contains:

```text
id
title
description
status
priority
dueDate
createdAt
updatedAt

Status values
- pending
- in_progress
- completed

Priority values
- low
- medium
- high

Project Structure
Cleanomatics Task Manager/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EditTaskForm.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskDetails.jsx
│   │   │   └── TaskForm.jsx
│   │   │
│   │   ├── services/
│   │   │   └── taskApi.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── task.controller.js
│   │   │
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   │
│   │   ├── routes/
│   │   │   └── task.routes.js
│   │   │
│   │   ├── services/
│   │   │   └── task.service.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── README.md
└── .gitignore

Prerequisites
Make sure the following are installed on your system:
- Node.js
- npm
- Git
You can verify the installations using:
node --version
npm --version
git --version

Installation and Setup
1. Clone the Repository
git clone <YOUR_GITHUB_REPOSITORY_URL>

Navigate into the project directory:
cd "Cleanomatics Task Manager"

The project contains two separate applications:
- frontend — React application
- backend — Node.js/Express REST API

Backend Setup
Open a terminal and navigate to the backend:
cd backend

Install the dependencies:
npm install

Environment Configuration
Create a .env file inside the backend folder:
PORT=5000

A .env.example file is also included in the repository.
Start the Backend
For development:
npm run dev

The backend will run on:
http://localhost:5000

Health Check
The backend provides a health-check endpoint:
GET /api/health

Example:
http://localhost:5000/api/health

Expected response:
{
  "success": true,
  "message": "Task Manager API is running"
}

Frontend Setup
Open another terminal.
Navigate to the frontend:
cd frontend

Install dependencies:
npm install

Start the development server:
npm run dev

The frontend will normally be available at:
http://localhost:5173

Open the URL displayed in the terminal in your browser.
REST API Documentation
Base URL
http://localhost:5000/api

1. Get All Tasks
Endpoint
GET /tasks

Full URL
http://localhost:5000/api/tasks

Success Response
200 OK

Example:
{
  "success": true,
  "data": [
    {
      "id": "123456789",
      "title": "Complete assignment",
      "description": "Finish the Cleanomatics assignment",
      "status": "pending",
      "priority": "high",
      "dueDate": "2026-10-10",
      "createdAt": "2026-10-08T17:30:00.000Z",
      "updatedAt": "2026-10-08T17:30:00.000Z"
    }
  ]
}

2. Get Task by ID
Endpoint
GET /tasks/:id

Example
GET /api/tasks/123456789

Success Response
200 OK

Example:
{
  "success": true,
  "data": {
    "id": "123456789",
    "title": "Complete assignment",
    "description": "Finish the Cleanomatics assignment",
    "status": "pending",
    "priority": "high",
    "dueDate": "2026-10-10",
    "createdAt": "2026-10-08T17:30:00.000Z",
    "updatedAt": "2026-10-08T17:30:00.000Z"
  }
}

Task Not Found
If the requested task does not exist:
404 Not Found

Example:
{
  "success": false,
  "message": "Task not found"
}

3. Create a Task
Endpoint
POST /tasks

Full URL
http://localhost:5000/api/tasks

Request Body
{
  "title": "Complete assignment",
  "description": "Finish the Cleanomatics task management assignment",
  "status": "pending",
  "priority": "high",
  "dueDate": "2026-10-10"
}

Required Fields
The following fields are required:
- title
- description
status, priority, and dueDate are optional.
Default values:
status   → pending
priority → medium
dueDate  → null

Success Response
201 Created

Example:
{
  "success": true,
  "data": {
    "id": "123456789",
    "title": "Complete assignment",
    "description": "Finish the Cleanomatics task management assignment",
    "status": "pending",
    "priority": "high",
    "dueDate": "2026-10-10",
    "createdAt": "2026-10-08T17:30:00.000Z",
    "updatedAt": "2026-10-08T17:30:00.000Z"
  }
}

Validation Error
If title or description is missing:
400 Bad Request

Example:
{
  "success": false,
  "message": "Title and description are required"
}

4. Update a Task
Endpoint
PUT /tasks/:id

Example
PUT /api/tasks/123456789

Request Body
{
  "title": "Complete assignment",
  "description": "Finish and submit the assignment",
  "status": "completed",
  "priority": "high",
  "dueDate": "2026-10-10"
}

Success Response
200 OK

The task is updated and its updatedAt timestamp is refreshed.
Task Not Found
404 Not Found

Example:
{
  "success": false,
  "message": "Task not found"
}

5. Delete a Task
Endpoint
DELETE /tasks/:id

Example
DELETE /api/tasks/123456789

Success Response
200 OK

Example:
{
  "success": true,
  "message": "Task deleted successfully"
}

Task Not Found
404 Not Found

Example:
{
  "success": false,
  "message": "Task not found"
}

API Status Codes
Operation	Success	Error
Get all tasks	200	500
Get task by ID	200	404
Create task	201	400
Update task	200	400 / 404
Delete task	200	404


Validation
The application performs validation on both the frontend and backend.
Required Fields
- Title
- Description
Valid Status Values
pending
in_progress
completed

Valid Priority Values
low
medium
high

Invalid status or priority values result in:
400 Bad Request

Error Handling
The backend uses centralized error-handling middleware.
Errors are returned in a consistent format:
{
  "success": false,
  "message": "Error message"
}

The frontend displays appropriate error messages when API requests fail.
Data Storage
This application uses an in-memory JavaScript array for storing tasks.
No external database is used.
This means:
- Tasks are available while the backend is running.
- Restarting the backend clears the task data.
- No MongoDB, MySQL, PostgreSQL, Firebase, or other external database is required.
This follows the assignment requirement for in-memory storage.
Backend Architecture
The backend follows a simple layered architecture:
Request
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
In-memory data

Routes
Responsible for defining API endpoints.
src/routes/

Controllers
Responsible for handling HTTP requests, validation, and responses.
src/controllers/

Services
Responsible for task-related business logic and in-memory data operations.
src/services/

Middleware
Centralized error handling is implemented in:
src/middleware/errorHandler.js

Frontend Architecture
The React frontend is separated into reusable components.
App
 ├── TaskCard
 ├── TaskForm
 ├── EditTaskForm
 └── TaskDetails

API communication is separated into:
src/services/taskApi.js

This keeps API logic separate from the UI components.
UI States
The application handles the following states:
Loading State
Displayed while tasks are being retrieved from the backend.
Empty State
Displayed when there are no tasks.
Error State
Displayed when loading tasks from the backend fails.
Form Validation
Displayed when required form fields are missing or invalid.
Environment Variables
Backend environment variables are stored in:
backend/.env

Example:
PORT=5000

A template is provided in:
backend/.env.example

Running the Application
Two terminals are required.
Terminal 1 — Backend
cd backend
npm install
npm run dev

Terminal 2 — Frontend
cd frontend
npm install
npm run dev

Then open:
http://localhost:5173

Git Workflow
The project can be managed using Git.
Initialize the repository:
git init

Add files:
git add .

Create the first commit:
git commit -m "Build task management system"

Add the GitHub remote:
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>

Push the project:
git branch -M main
git push -u origin main

Assignment Requirements Covered
The implementation covers the core requirements of the Cleanomatics Full-Stack Developer Assignment:
- React.js frontend
- Node.js + Express.js backend
- RESTful API
- In-memory task storage
- Task creation
- Task listing
- Task details
- Task editing
- Task deletion
- Status management
- Priority management
- Due date
- Request validation
- Correct HTTP status codes
- Centralized error handling
- CORS
- Environment variables
- Reusable React components
- Dedicated frontend API layer
- Loading state
- Empty state
- Error state
- Responsive UI
- Routes / Controllers / Services backend separation
- GitHub repository
- README documentation
- API documentation
- .env.example
Future Enhancements
Possible future improvements include:
- Search by title or description
- Status and priority filters
- Sorting
- Pagination
- Dark mode
- Debounced search
- Swagger API documentation
- Persistent database storage
These features are not required for the current implementation.

Author
Keshavi Verma
B.Tech — Computer Science & Engineering