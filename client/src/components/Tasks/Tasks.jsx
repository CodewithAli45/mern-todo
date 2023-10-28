import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8080/api/v1/createTask';

const Tasks = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
          const response = await axios.get(url);
          setTasks(response.data.tasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };

    async function addTask(){
        try {
            await axios.post(url, {
              title: task,
              description: '', // Add a description if needed
              completed: false, // Initially, the task is not completed
            });
            // Clear the input field and update the task list
            setTask('');
            fetchTasks();
          } catch (error) {
            console.error('Error adding task:', error);
          }
    }

    function handleTaskChange(e){
        setTask(e.target.value);
    }
    return (
        <div>
      <div className="tasks">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="display">
        <h2>Task List</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              {task.description}
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
}

export default Tasks;
