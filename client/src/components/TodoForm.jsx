import React, { useEffect, useState } from 'react';
import axios from 'axios';


const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const fetchTodos = async () => {
       try {
        const response = await axios.get('http://192.168.167.185:5000');
        setTodos(response.data);
       } catch (error) {
        console.log("something went wrong in fetching ", error);
       }
    }
    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        try {
            if(newTodo.trim() === "") return;
            const response = await axios.post('http://192.168.167.185:5000/createTask', {description: newTodo});
            setTodos([...todos, response.data]);
            fetchTodos();
            setNewTodo('');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Todo App</h2>
            <input 
                type="text" 
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}> Add </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>{todo.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoForm;
