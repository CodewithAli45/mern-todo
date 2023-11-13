import React from 'react';

const DisplayTask = ({id, text, completed, onCompletedTask}) => {
    return (
        <div className={`display-contianer ${completed ? 'completed' : ''}`}>
            <div className='task'>{id}. {text}</div>
            <button onClick={onCompletedTask}>{completed ? 'Completed' : 'Pending'}</button>
        </div>
    );
}

export default DisplayTask;
