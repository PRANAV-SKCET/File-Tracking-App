import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../addApplications.css'; // Import CSS file

export default function AddApplication() {
    const [applicationData, setApplicationData] = useState({
        applicationNumber: '',
        applicantName: '',
        applicantMail: '',
        applicantMobileNumber: '',
        applicantAddress: '',
        applicationTypeId: '',
        applicationName: '',
        applicationStatus: '',
        applicationDate: '',
        applicationClosedDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApplicationData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, like sending the data to an API
        console.log(applicationData);
        // Reset form fields
        setApplicationData({
            applicationNumber: '',
            applicantName: '',
            applicantMail: '',
            applicantMobileNumber: '',
            applicantAddress: '',
            applicationTypeId: '',
            applicationName: '',
            applicationStatus: '',
            applicationDate: '',
            applicationClosedDate: ''
        });
    };

    return (
        <div className="form-container"> {/* Apply CSS class */}
            <h1>Add Application</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Application Number"
                    variant="outlined"
                    name="applicationNumber"
                    value={applicationData.applicationNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                    <TextField
                    label="Application Type ID"
                    variant="outlined"
                    name="applicationTypeId"
                    value={applicationData.applicationTypeId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Application Name"
                    variant="outlined"
                    name="applicationName"
                    value={applicationData.applicationName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Applicant Name"
                    variant="outlined"
                    name="applicantName"
                    value={applicationData.applicantName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Applicant Email"
                    variant="outlined"
                    name="applicantMail"
                    value={applicationData.applicantMail}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Mobile Number"
                    variant="outlined"
                    name="applicantMobileNumber"
                    value={applicationData.applicantMobileNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    name="applicantAddress"
                    value={applicationData.applicantAddress}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Application Status"
                    variant="outlined"
                    name="applicationStatus"
                    value={applicationData.applicationStatus}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Application Date"
                    variant="outlined"
                    name="applicationDate"
                    value={applicationData.applicationDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Application Closed Date"
                    variant="outlined"
                    name="applicationClosedDate"
                    value={applicationData.applicationClosedDate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
}
