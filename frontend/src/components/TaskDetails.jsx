function TaskDetails({ task, onClose }) {
  return (
    <div className="form-overlay">
      <div className="task-details-container">
        <div className="form-header">
          <h2>Task Details</h2>

          <button
            type="button"
            className="close-button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="task-details-content">
          <div className="detail-item">
            <span className="detail-label">Title</span>
            <p>{task.title}</p>
          </div>

          <div className="detail-item">
            <span className="detail-label">Description</span>
            <p>{task.description}</p>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <p>{task.status.replace("_", " ")}</p>
            </div>

            <div className="detail-item">
              <span className="detail-label">Priority</span>
              <p>{task.priority}</p>
            </div>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Due Date</span>
              <p>{task.dueDate || "No due date"}</p>
            </div>

            <div className="detail-item">
              <span className="detail-label">Created At</span>
              <p>{new Date(task.createdAt).toLocaleString()}</p>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-label">Last Updated</span>
            <p>{new Date(task.updatedAt).toLocaleString()}</p>
          </div>
        </div>

        <div className="details-footer">
          <button
            type="button"
            className="cancel-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;