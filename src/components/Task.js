import React, { useState } from "react";
import "../styles.css";

function Task({ task, toggleComplete, removeTask, editTaskText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const startEditing = () => {
    setIsEditing(true);
  };

  const finishEditing = () => {
    editTaskText(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <div className="task-text-container">
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          ) : (
            <p className="task-text">{task.text}</p>
          )}
        </div>
      </div>
      <div>
        {isEditing ? (
          <button className="save-button" onClick={finishEditing}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={startEditing}>
            Edit
          </button>
        )}
        <button className="remove-button" onClick={() => removeTask(task.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default Task;
