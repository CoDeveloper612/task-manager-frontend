import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, fetchTasks }) => {
    return (
        <div className='mt-3'>
            {tasks.map(task => <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />)}
        </div>
    );
};

export default TaskList;
