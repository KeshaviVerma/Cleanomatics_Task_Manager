<!-- PROJECT TITLE -->

<h1 align="center">Task Management System</h1>

<h3 align="center">
A Full-Stack Task Management Application built with React, Node.js and Express
</h3>

<p align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/REST%20API-02569B?style=for-the-badge&logo=fastapi&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>

</p>

---

## 📌 Project Overview

**Task Management System** is a full-stack web application developed as part of the **Cleanomatics Full-Stack Developer Assignment**.

The application provides a simple and responsive interface for managing tasks. Users can create new tasks, view detailed task information, edit existing tasks, and delete tasks through an intuitive dashboard.

The frontend is built using **React.js with Vite**, while the backend is implemented using **Node.js and Express.js**.

The frontend communicates with the backend through a **RESTful API**.

The application uses an **in-memory JavaScript array** for task storage, as required by the assignment.

---

## 🎯 Problem Statement

Managing multiple tasks without a centralized system can make it difficult to keep track of task status, priorities, descriptions, and deadlines.

Users need a simple task management interface where they can:

- Create and organize tasks
- Track task status
- Assign task priorities
- Set due dates
- View complete task information
- Update tasks when requirements change
- Remove completed or unnecessary tasks

Therefore, this project provides a lightweight task management application with a clean, responsive interface and a structured REST API.

---

## 💡 Proposed Solution

The application follows a **client-server architecture**.

<p align="center">

🖥️ <b>React Frontend</b>

<br>
⬇️
<br>

🌐 <b>REST API</b>

<br>
⬇️
<br>

⚙️ <b>Express Backend</b>

<br>
⬇️
<br>

🧠 <b>Task Service</b>

<br>
⬇️
<br>

📦 <b>In-Memory Storage</b>

</p>

The frontend provides reusable components for creating, viewing, editing, and deleting tasks.

The backend follows a structured architecture consisting of:

- Routes
- Controllers
- Services
- Middleware

This separation keeps the application organized, maintainable, and easy to extend.

---

# ✨ Key Features

## 📝 Task Creation

Users can create tasks by providing:

| Field | Description |
|:-----:|:------------|
| **Title** | Task title |
| **Description** | Detailed task information |
| **Status** | Current task state |
| **Priority** | Task importance |
| **Due Date** | Task deadline |

Title and description are required fields and are validated on the frontend and backend.

---

## 👁️ Task Details

Users can view complete information about an individual task, including:

- Title
- Description
- Status
- Priority
- Due Date
- Created Date
- Last Updated Date

---

## ✏️ Task Editing

Existing tasks can be updated using the **Edit** functionality.

Users can modify:

- Title
- Description
- Status
- Priority
- Due Date

The `updatedAt` timestamp is automatically refreshed whenever a task is modified.

---

## 🗑️ Task Deletion

Users can delete tasks through the **Delete** action.

A confirmation dialog is displayed before deletion to prevent accidental removal.

---

## 🔄 Task Status Management

Tasks support three statuses:

| Status | Description |
|:------:|:------------|
| `pending` | Task has not been started |
| `in_progress` | Task is currently being worked on |
| `completed` | Task has been completed |

---

## 🚨 Priority Management

Tasks support three priority levels:

| Priority | Description |
|:--------:|:------------|
| `low` | Low priority task |
| `medium` | Normal priority task |
| `high` | High priority task |

---

## ⚠️ Validation & Error Handling

The application handles:

- Required field validation
- Invalid status values
- Invalid priority values
- Task not found errors
- API request failures
- Loading states
- Empty task states

The backend also uses **centralized error-handling middleware**.

---

# 📦 Task Data Structure

Each task follows the following structure:

```json
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


---
