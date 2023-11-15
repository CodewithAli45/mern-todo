import React, { useEffect, useState } from 'react';
import DisplayTask from './DisplayTask';
import axios from 'axios'
import './Task.css';

const Tasks = () => {
  const [inputText, setInputText] = useState('');
  const [tasks, setTask] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const baseUrl = 'https://todo-services-zajb.onrender.com/api/v1'

  const postURL = baseUrl+'/createTask';
  const getURL = baseUrl + '/getAllTasks';

  function addTask(){
    const tasks = {description : inputText, completed : false};
    // sl should be dynamic
    axios.post(postURL, tasks).then(() => {
      console.log('added in db');
      setInputText('');
      setIsAdded(true);
    }).catch((error) => {
      console.error('Error creating user:', error);
      
    });
  }

  function handleAddTask(e){
    e.preventDefault();
    addTask();
  }

  useEffect(() => {
    axios.get(getURL).then((data) => {
      const taskData = data.data.data;
      console.log(taskData);
      setTask(taskData.tasks);
      
    })
  }, [getURL, isAdded]);

  function handleTaskComplete(id){
    const updateTask = tasks.map((task) => {
      return task.sl === id ? {...task, completed : !task.completed} : task
    })
    setTask(updateTask);
  }

  function handleDeleteTask(id){
    const deletedTask = tasks.filter((task) => task.sl !== id);
    setTask(deletedTask);
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
              key={task._id}
              id={task.sl}
              text={task.description}
              completed={task.completed}
              onCompletedTask={() => handleTaskComplete(task.sl)}
              onDeleteTask={() => handleDeleteTask(task.sl)}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Tasks;
