const taskService = require("../services/task.service");

const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();

  res.status(200).json({
    success: true,
    data: tasks,
  });
};

const createTask = (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  // Validate required fields
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Title and description are required",
    });
  }

  const validStatuses = ["pending", "in_progress", "completed"];
  const validPriorities = ["low", "medium", "high"];

  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status",
    });
  }

  if (priority && !validPriorities.includes(priority)) {
    return res.status(400).json({
      success: false,
      message: "Invalid priority",
    });
  }

  const newTask = taskService.createTask({
    title,
    description,
    status,
    priority,
    dueDate,
  });

  res.status(201).json({
    success: true,
    data: newTask,
  });
};

const getTaskById = (req, res) => {
  const { id } = req.params;

  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    data: task,
  });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status, priority, dueDate } = req.body;

  // Validate required fields
  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Title and description are required",
    });
  }

  const validStatuses = ["pending", "in_progress", "completed"];
  const validPriorities = ["low", "medium", "high"];

  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status",
    });
  }

  if (priority && !validPriorities.includes(priority)) {
    return res.status(400).json({
      success: false,
      message: "Invalid priority",
    });
  }

  const updatedTask = taskService.updateTask(id, {
    title,
    description,
    status,
    priority,
    dueDate,
  });

  if (!updatedTask) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    data: updatedTask,
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;

  const deleted = taskService.deleteTask(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
  });
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};