import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../adminPage.css';
import { AuthContext } from './context';


export default function AdminPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setIsAdminLoggedIn} = useContext(AuthContext);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:8080/AdminLogin/${email}/${password}`);
            if (response.data === true) 
            {
                setIsAdminLoggedIn(true);
                setMessage('Login successful');
                setTimeout(() => {
                    navigate("/adminWorking");
                }, 0);
            } else 
            {
                setMessage('Invalid email or password. Please try again.');
                setTimeout(() => {
                    setMessage('');
                }, 2500);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <div>
        <div className="admin-container">
            <h1 className="admin-title">Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Email:
                    <input className="form-input" type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label className="form-label">
                    Password:
                    <input className="form-input" type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button className="submit-button" type="submit">Login</button>
            </form>
            {message && (
                <div className="response-message">{message}</div>
            )}
        </div>
        </div>
    );
}
