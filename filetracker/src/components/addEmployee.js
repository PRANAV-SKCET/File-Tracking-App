import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const { officeId } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employeeId: '',
        employeeName: '',
        employeeDesignation:'',
        email: '',
        password: '',
        officeId: officeId
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/addEmployee', formData)
            .then(response => {
                setResponseMessage(response.data);
    
                if (response.data === "New Employee Added") {
                    setTimeout(() => {
                        navigate("/officeWorking");
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
                    <Typography variant="h4" gutterBottom>Add Employee</Typography>
                </div>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        label="Employee Id"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleChange}
                        label="Employee Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        name="employeeDesignation"
                        value={formData.employeeDesignation}
                        onChange={handleChange}
                        label="Employee Designation"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <TextField
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                        Add New Employee
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

export default AddEmployee;
