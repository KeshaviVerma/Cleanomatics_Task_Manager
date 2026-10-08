const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRoutes = require("./routes/task.routes");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Task Manager API is running",
  });
});

// Task routes
app.use("/api/tasks", taskRoutes);

// Centralized error handler
app.use(errorHandler);

module.exports = app;