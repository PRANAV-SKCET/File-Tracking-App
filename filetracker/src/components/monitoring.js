import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import '../Monitoring.css';
import Navbar from './navbar';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

export default function Monitoring() {
    const [applicationNumber, setApplicationNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState([]);
    const [error, setError] = useState(null);

    const handleApplicationNumberChange = (e) => {
        setApplicationNumber(e.target.value);
    };

    const handleTrackButtonClick = async () => {
        setTrackingInfo(null);
        setError(null);
        await axios.get(`http://localhost:8080/track/${applicationNumber}`)
            .then(response => {
                setTrackingInfo(response.data);
            })
            .catch(error => {
                setError('Failed to track application. Please try again.');
            });
    };

    return (
        <div>
            <Navbar />
            <div className="monitoring-backgroundpage">
                <div className="monitoring-containercard">
                    <h1>
                        <AddLocationAltIcon style={{ verticalAlign: 'middle', marginRight: '10px', fontSize: '40px' }} />
                        Track your Application
                    </h1>
                    <div>
                        <TextField
                            type="text"
                            name="application number"
                            className="input-field"
                            InputProps={{ className: 'input-field' }}
                            label="Application Number"
                            value={applicationNumber}
                            onChange={handleApplicationNumberChange}
                            multiline
                            rows={1}
                             // Adjust the number of rows as needed
                            
                        />
                    </div>
                    {trackingInfo && trackingInfo.length > 0 && (
                        <div className="tracking-info">
                            <h2>Tracking Information</h2>
                            {trackingInfo.map((info, index) => (
                                <div key={index} className="tracking-info-item">
                                    <p>Status: {info.status}</p>
                                    <p>Assigned To: {info.Assigned_To}</p>
                                    <p>Date: {info.Date}</p>
                                    <p>Comments: {info.Comments}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    )}
                    {error && <div className="error-message">{error}</div>}
                </div>
                <Button className="track-button" variant="contained" onClick={handleTrackButtonClick}>Track</Button>
            </div>
        </div>
    );
}
