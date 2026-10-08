function TaskCard({ task, onView, onEdit, onDelete }) {
  return (
    <article className="task-card">
      <div className="task-card-header">
        <h3>{task.title}</h3>

        <span className={`priority priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>

      <p className="task-description">
        {task.description}
      </p>

      <div className="task-meta">
        <span>
          Status: <strong>{task.status.replace("_", " ")}</strong>
        </span>

        <span>
          Due: <strong>{task.dueDate || "No due date"}</strong>
        </span>
      </div>

      <div className="task-actions">
        <button
          type="button"
          onClick={() => onView(task)}
        >
          View
        </button>

        <button
          type="button"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(task)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskCard;