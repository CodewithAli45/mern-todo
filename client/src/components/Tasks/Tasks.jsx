import React, { useState } from 'react';
import DisplayTask from './DisplayTask';
import './Task.css';

const Tasks = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTask] = useState([]);

  function handleAddTask(e){
    e.preventDefault();
    if (inputText.trim() !== '') {
      setTask([...tasks, { id: tasks.length + 1, text: inputText, completed: false }]);
      setInputText('');
    }
  }

  function handleTaskComplete(id){
    const updateTask = tasks.map((task) => {
      return task.id === id ? {...task, completed : !task.completed} : task
    })
    setTask(updateTask);
  }

  return (
    <div className='container'>
      <div className='heading'>Welcome to my Todo App</div>
      <form className='input-box'>
        <input 
          type="text" 
          placeholder='enter the task'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </form>
      <div className='display-task'>
        {
          tasks.map((task) => (
            <DisplayTask 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              onCompletedTask = {() => handleTaskComplete(task.id)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Tasks;
