import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function DeleteOffice() {
    const [officeId, setOfficeId] = useState('');
    const [responseMessage, setResponseMessage] = useState('');    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setOfficeId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/deleteOffice/${officeId}`)
                    .then(response => {
                setResponseMessage(response.data);
    
                if (response.data === "Office Deleted") {
                    setTimeout(() => {
                        navigate("/adminWorking");
                    }, 1500); 
                } else {
                    setTimeout(() => {
                        setResponseMessage('');
                    }, 1500);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Typography variant="h4" gutterBottom>Delete Office</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="officeId"
                        value={officeId}
                        onChange={handleChange}
                        label="Office ID"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                        Delete Office
                    </Button>
                    {responseMessage && (
                        <Typography variant="body1" style={{ marginTop: '10px' }}>
                            {responseMessage}
                        </Typography>
                    )}
                </form>
            </Grid>
        </Grid>
    );
}

export default DeleteOffice;
