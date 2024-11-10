import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, fetchTasks }) => {
    return (
        <div>
            {tasks.map(task => <TaskItem key={task._id} task={task} fetchTasks={fetchTasks} />)}
        </div>
    );
};

export default TaskList;
