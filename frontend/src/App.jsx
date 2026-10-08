import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import EditTaskForm from "./components/EditTaskForm";
import { getTasks, deleteTask } from "./services/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const handleTaskCreated = (newTask) => {
    setTasks((previousTasks) => [
      newTask,
      ...previousTasks,
    ]);
  };

  const handleTaskDelete = async (task) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${task.title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteTask(task.id);

      setTasks((previousTasks) =>
        previousTasks.filter(
          (existingTask) => existingTask.id !== task.id
        )
      );
    } catch (err) {
      window.alert(err.message);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Task Manager</h1>
          <p>Manage your tasks easily</p>
        </div>

        <button
          className="create-task-button"
          onClick={() => setShowTaskForm(true)}
        >
          + Create Task
        </button>
      </header>

      <main className="dashboard">
        <section className="task-section">
          <h2>Your Tasks</h2>

          {loading && (
            <div className="empty-state">
              <p>Loading tasks...</p>
            </div>
          )}

          {!loading && error && (
            <div className="empty-state">
              <h3>Something went wrong</h3>
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && tasks.length === 0 && (
            <div className="empty-state">
              <h3>No tasks yet</h3>
              <p>Create your first task to get started.</p>
            </div>
          )}

          {!loading && !error && tasks.length > 0 && (
            <div>
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onView={(task) => setSelectedTask(task)}
                  onEdit={(task) => setTaskToEdit(task)}
                  onDelete={handleTaskDelete}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {showTaskForm && (
        <TaskForm
          onClose={() => setShowTaskForm(false)}
          onTaskCreated={handleTaskCreated}
        />
      )}

      {selectedTask && (
        <TaskDetails
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />
      )}

      {taskToEdit && (
        <EditTaskForm
          task={taskToEdit}
          onClose={() => setTaskToEdit(null)}
          onTaskUpdated={(updatedTask) => {
            setTasks((previousTasks) =>
              previousTasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
              )
            );
          }}
        />
      )}
    </div>
  );
}

export default App;