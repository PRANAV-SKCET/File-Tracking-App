import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Monitoring.css';

export default function Monitoring() {
    const [applicationNumber, setApplicationNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleApplicationNumberChange = (e) => {
        setApplicationNumber(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleTrackButtonClick = () => {
        console.log('Tracking...');
    };

    return(
        <div className="monitoring-container">
            <h1>Track your Application</h1>
            <div>
                <TextField 
                    className="input-field"
                    label="Application Number"
                    value={applicationNumber} 
                    onChange={handleApplicationNumberChange} 
                />
            </div>
            <div>
                <TextField 
                    className="input-field" 
                    label="Mobile Number"
                    value={mobileNumber} 
                    onChange={handleMobileNumberChange} 
                />
            </div>
            <Button className="track-button" variant="contained" onClick={handleTrackButtonClick}>Track</Button>
        </div>
    );
}
