import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context';
import '../EmployeeWorking.css';

export default function EmployeeWorking() {
    const { employeeMail } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState({});

    useEffect(() => {
        const fetchPendingTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pending/${employeeMail}`);
                setTasks(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchPendingTasks();
    }, [employeeMail]);

    const handleCommentChange = (taskId, comment) => {
        setComments({ ...comments, [taskId]: comment });
    };

    const handleComplete = (taskId) => {
        // Add your complete task logic here
        console.log(`Complete task ${taskId} with comment: ${comments[taskId]}`);
    };

    const handleReject = (taskId) => {
        // Add your reject task logic here
        console.log(`Reject task ${taskId} with comment: ${comments[taskId]}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading tasks: {error.message}</div>;
    }

    return (
        <div>
            <h1>Pending Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div className="task-info">
                            <span className="task-number">{task.ApplicationNumber}</span>
                            <span className="task-status">{task.status}</span>
                            <span className="task-date">{task.created_at}</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter comment"
                            value={comments[task.id] || ''}
                            onChange={(e) => handleCommentChange(task.id, e.target.value)}
                        />
                        <button onClick={() => handleComplete(task.id)}>Complete</button>
                        <button onClick={() => handleReject(task.id)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
