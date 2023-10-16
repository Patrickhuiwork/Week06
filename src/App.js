import React, { useState } from "react";
import "./styles.css";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTaskText = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
            editTaskText={editTaskText}
          />
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
      >
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
