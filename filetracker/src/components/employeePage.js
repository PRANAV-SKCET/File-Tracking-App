import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './context';
import '../employeePage.css';
import Navbar from './navbar';

export default function EmployeePage() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setIsEmployeeLoggedIn,isEmployeeLoggedIn,employeeMail,setEmployeeMail} = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setEmployeeMail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:8080/EmployeeLogin/${employeeMail}/${password}`);
            if (response.data === true) 
            {
                setIsEmployeeLoggedIn(true);
                setMessage('Login successful');
                setTimeout(() => {
                    navigate("/employeeWorking");
                }, 1);
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
            {!isEmployeeLoggedIn && <Navbar/>}
        <div className="admin-container">
            <h1 className="admin-title">Employee Login</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Email:
                    <input className="form-input" type="email" value={employeeMail} onChange={handleEmailChange} />
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
