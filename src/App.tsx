import React, { useState } from "react";
import Task from "./Task";
import "./styles.css";

type Task = {
  task: string
  completed: boolean
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask("");
      setShowClearButton(true);
    }
  };

  const handleTaskClick = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleClearTasks = () => {
    setTasks([]);
    setShowClearButton(false);
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Tarefas</h1>
      <input
        type="text"
        className="task-input"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
      {showClearButton && (
        <button className="clear-button" onClick={handleClearTasks}>
          Limpar Tarefas
        </button>
      )}

      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task.task}
            completed={task.completed}
            onClick={() => handleTaskClick(index)}
          />
        ))}
      </ul>
      <footer className="footer">
        A simplicidade é o último grau de sofisticação - Leonard Thiessen
      </footer>
    </div>
  );
};

export default App;
