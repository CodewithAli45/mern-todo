import React from 'react';

const DisplayTask = ({id, text, completed, onCompletedTask, onDeleteTask}) => {
    return (
        <div className={`display-contianer ${completed ? 'completed' : ''}`}>
            <div className='task'>{id}. {text}</div>
            <button onClick={onCompletedTask}>{completed ? 'Completed' : 'Pending'}</button>
            <button onClick={onDeleteTask}>X</button>
        </div>
    );
}

export default DisplayTask;
