import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ completed, setCompleted ] = useState(false);

    const handleInit = () => {
        
        setTitle('');
        setDescription('');
        setCompleted(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/api/tasks', { title, description, completed });
        fetchTasks();
        handleInit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" required />
            <textarea value={description} className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Task description" required></textarea>
            <label>Status:</label>
            <select value={completed} className="form-control" onChange={(e) => { console.log(e.target.value); setCompleted(e.target.value)}}>
                <option value={true}>Completed</option>
                <option value={false}>Pending</option>
            </select>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
};

export default AddTask;
