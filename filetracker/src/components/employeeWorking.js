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
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPendingTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/pending/${employeeMail}`);
                setTasks(response.data);
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

    const handleComplete = async (taskId,ApplicationNumber) => {
        const comment = comments[taskId] || '';
        try {
            const response = await axios.post(`http://localhost:8080/complete/${ApplicationNumber}/${comment}/${employeeMail}`);
            console.log(response.data);
        } catch (err) {
            console.error(`Failed to complete task ${taskId}:`, err);
        }
    };

    const handleReject = async (taskId,ApplicationNumber) => {
        const comment = comments[taskId] || '';
        try {
            await axios.post(`http://localhost:8080/reject/${ApplicationNumber}/${comment}/${employeeMail}`);
        } catch (err) {
            console.error(`Failed to reject task ${taskId}:`, err);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredTasks = tasks.filter(task =>
        task.ApplicationNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading tasks: {error.message}</div>;
    }

    return (
        <div>
            <h1>Your Tasks</h1>
            <input
                type="text"
                placeholder="Search by Application Number"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-box"
            />
            <ul>
                {filteredTasks.map(task => (
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
                        <button onClick={() => handleComplete(task.id,task.ApplicationNumber)}>Complete</button>
                        <button onClick={() => handleReject(task.id,task.ApplicationNumber)}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
