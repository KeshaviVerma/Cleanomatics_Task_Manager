let tasks = [];

const getAllTasks = () => {
  return tasks;
};

const createTask = (taskData) => {
  const now = new Date().toISOString();

  const newTask = {
    id: Date.now().toString(),
    title: taskData.title,
    description: taskData.description,
    status: taskData.status || "pending",
    priority: taskData.priority || "medium",
    dueDate: taskData.dueDate || null,
    createdAt: now,
    updatedAt: now,
  };

  tasks.push(newTask);

  return newTask;
};

const getTaskById = (id) => {
  return tasks.find((task) => task.id === id);
};

const updateTask = (id, taskData) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  const existingTask = tasks[taskIndex];

  const updatedTask = {
    ...existingTask,
    title: taskData.title,
    description: taskData.description,
    status: taskData.status,
    priority: taskData.priority,
    dueDate: taskData.dueDate,
    updatedAt: new Date().toISOString(),
  };

  tasks[taskIndex] = updatedTask;

  return updatedTask;
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return false;
  }

  tasks.splice(taskIndex, 1);

  return true;
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};