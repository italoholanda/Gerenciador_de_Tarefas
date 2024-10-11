import React from "react";

/*
 * @ToDo: convert it to .tsx file (Typescript)
 * - don't use the `any` type
 * - don't leave errors on terminal
*/
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
