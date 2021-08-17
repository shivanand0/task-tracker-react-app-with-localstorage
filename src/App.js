// import React from 'react'
import './App.css';
import { useState, useEffect } from "react";

import {Header} from './components/Header';
import {Tasks} from './components/Tasks';
import {AddTask} from './components/AddTask';
function App() {

  let initTask;
  localStorage.getItem("tasks") === null ? initTask = [] : initTask = JSON.parse(localStorage.getItem("tasks"))
  
  //show hide add task form
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(initTask);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  

  //Delete a task
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))

    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  //toggle reminder from true to false or false to true
  const toggleReminder =(id) => {
    // alert(id);
    setTasks(
      tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder } : task)
      )
  }

  //add task
  const addTask = (task) => {
    let id;
    tasks.length === 0 ? id=1 : id = tasks[tasks.length - 1].id + 1
    
    // const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    // console.log(task)
    
  }

  return (
    <div className="App">

      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* <Header title = "task manager"/> */}

      { showAddTask && <AddTask onAdd={addTask} />}

      { tasks.length > 0 ?
        //passing tasks as a prop tasks={tasks} to tasks.js
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : <p style={{ textAlign: 'center', color: 'red'}}>Nothing to show</p>
      }

    </div>
  );
}

// class method
// class App extends React.Component{
//   render() {
//   return <h1>Hello from class</h1>
//   }
// }



export default App;
