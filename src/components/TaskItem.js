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
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <div>
                <h3>{title}</h3>
                <span>{description}</span>
                
                <p>{completed ? 'Completed' : 'Pending'}</p>
                <div class="btn-group btn-group-sm">
                    <button onClick={() => { setEdit(!edit)}} btn btn-primary>Edit</button>
                    {completed ? <button onClick={() => updateCompeted(false)}>Mark as Pending</button>
                    : <button onClick={() => updateCompeted(true)}>Mark as Completed</button>}
                    <button onClick={handleDelete}>Delete</button>
                </div>
            
            <TaskEdit edit={edit} handleEdit={handleEdit} handleUpdate={handleUpdate} task={task} />
        </div>
    );
};

export default TaskItem;
