import React from "react";
import './App.css';
import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const[tasks, setTasks] = useState([]);
  const[newtask, setNewTask] = useState("");


  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput/>
      <TaskList tasks= {tasks}/>
    </div>
  );
}

export default App;
