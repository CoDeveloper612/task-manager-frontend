import React, { useState } from 'react';
import axios from 'axios';
import TaskEdit from './TaskEdit';

const TaskItem = ({ task, fetchTasks }) => {
    const [ edit, setEdit ] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [completed, setCompleted] = useState(task.completed);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/remove/${task._id}`);
            fetchTasks();
        } catch (error) {
            console.log(error);
        }
        
    };

    const handleUpdate = async (updateTask) => {
        try {
            await axios.put(`http://localhost:5000/api/tasks/${task._id}`, updateTask);
            // fetchTasks();
            setTitle(updateTask.title);
            setDescription(updateTask.description);
            handleEdit(false);
        } catch (error) {
            console.log(error);
        }
    }

    const updateCompeted = async(value) => {
        try {
            await axios.put(`http://localhost:5000/api/completed/${task._id}`, {completed: value});
            // fetchTasks();
            setCompleted(value);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = (value) => {
        setEdit(value);
    }

    return (
        <div className='row'>
            <div className='col-md-4'>
                <h3>{title}</h3>
            </div>
            <div className='col-md-2'>
                <span>{description}</span>
                
            </div>
            <div className='col-md-2'>
                <p>{completed ? 'Completed' : 'Pending'}</p>
            </div>
            <div className='col-md-4'>
                <div class="btn-group btn-group-sm">
                    <button onClick={() => { setEdit(!edit)}} btn btn-primary>Edit</button>
                    {completed ? <button onClick={() => updateCompeted(false)}>Mark as Pending</button>
                    : <button onClick={() => updateCompeted(true)}>Mark as Completed</button>}
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            
            <TaskEdit edit={edit} handleEdit={handleEdit} handleUpdate={handleUpdate} task={task} />
        </div>
    );
};

export default TaskItem;
