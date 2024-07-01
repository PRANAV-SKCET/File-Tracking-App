import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context';
import '../Pending.css'; // Import the CSS file

export default function Pending() {
    const { employeeMail } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    useEffect(() => {
        const fetchPendingTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/delayed/${employeeMail}`);
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

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error loading tasks: {error.message}</div>;
    }

    return (
        <div className="pending-container">
            <h1>Delayed Work</h1>
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        <div><strong>Application Number:</strong> {task.ApplicationNumber}</div>
                        <div><strong>Status:</strong> {task.status}</div>
                        <div><strong>Created At:</strong> {formatDate(task.created_at)}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
