import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../officePage.css'; // Ensure the correct path to your CSS file
import { AuthContext } from './context';
import Navbar from './navbar';
import DomainIcon from '@mui/icons-material/Domain';
export default function OfficePage() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setIsOfficeLoggedIn, setOfficeId, setDistrictId, isOfficeLoggedIn, officeMail, setOfficeMail } = useContext(AuthContext);

    const handleEmailChange = (e) => {
        setOfficeMail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/OfficeLogin/${officeMail}/${password}`);
            if (response.data === true) {
                const response2 = await axios.get(`http://localhost:8080/OfficeLoginDetails/${officeMail}/${password}`);
                setOfficeId(response2.data.officeId);
                setDistrictId(response2.data.districtId);
                setIsOfficeLoggedIn(true);
                setMessage('Login successful');
                setTimeout(() => {
                    navigate("/officeWorking");
                }, 0);
            } else {
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
        <div className="background-container">
            {isOfficeLoggedIn ? null : <Navbar />}
            <div className="office-container">
                <h1 className="office-title">
                    <DomainIcon className="icon-title" style={{ fontSize: 40 }} />
                    Office Login
                </h1>
                <form onSubmit={handleSubmit}>
                    <label className="form-label">
                        Email:
                        <input className="form-input" type="email" value={officeMail} onChange={handleEmailChange} />
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
