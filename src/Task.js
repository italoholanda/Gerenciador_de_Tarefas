import React from "react";

const Task = ({ task, completed, onClick }) => {
  return (
    <li
      className={`task-item ${completed ? "completed" : ""}`}
      onClick={onClick}
    >
      <input type="checkbox" checked={completed} readOnly />
      <span className="task-text">{task}</span>
    </li>
  );
};

export default Task;
