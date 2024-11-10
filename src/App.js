import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTask from './components/AddTask';
// import TaskList from './components/TaskList';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="container pt-3">
            <h1>Task Manager</h1>
            <AddTask fetchTasks={fetchTasks} />
            // <TaskList tasks={tasks} fetchTasks={fetchTasks} />
        </div>
    );
};

export default App;
