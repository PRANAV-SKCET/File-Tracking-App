import React, { useState, useEffect, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';
import axios from 'axios';
import '../addApplications.css';
import { AuthContext } from './context';

export default function AddApplication() {
    const { officeId } = useContext(AuthContext);

    const formatDate = (date) => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    
    const [applicationData, setApplicationData] = useState({
        applicationNumber: '',
        applicantName: '',
        applicantMail: '',
        applicantMobileNumber: '',
        applicantAddress: '',
        applicationTypeId: '',
        applicationName: '',
        applicationStatus: 'opened',
        applicationDate: formatDate(new Date()),
        applicationClosedDate: ''
    });

    const [applicationTypes, setApplicationTypes] = useState([]);
    const [responseMessage, setResponseMessage] = useState(null);

    useEffect(() => {
        fetchApplicationTypes();
    }, []);

    const fetchApplicationTypes = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/getApplicationTypes/${officeId}`);
            const transformedData = response.data.map(({ applicationId, applicationName }) => ({ applicationId, applicationName }));
            console.log(transformedData);
            setApplicationTypes(transformedData);
        } catch (error) {
            console.error('Error fetching application types:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'applicationTypeId') {
            const selectedType = applicationTypes.find(type => type.applicationId === value);
            setApplicationData(prevState => ({
                ...prevState,
                [name]: value,
                applicationName: selectedType ? selectedType.applicationName : ''
            }));
        } else {
            setApplicationData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/createApplication", applicationData);
            // Set response to state to display it
            setResponseMessage(response.data);

            // Clear response after 3 seconds
            setTimeout(() => {
                setResponseMessage(null);
            }, 3000);

            // Clear form fields
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
        } catch (error) {
            console.error('Error submitting application:', error);
            // Handle error if necessary
        }
    };

    return (
        <div className="form-container">
            <h1>Add Application</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    select
                    label="Application Type ID"
                    variant="outlined"
                    name="applicationTypeId"
                    value={applicationData.applicationTypeId}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                >
                    {applicationTypes.map(type => (
                        <MenuItem key={type.applicationId} value={type.applicationId}>
                            {type.applicationId}
                        </MenuItem>
                    ))}
                </TextField>
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
                    label="Application Number"
                    variant="outlined"
                    name="applicationNumber"
                    value={applicationData.applicationNumber}
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
               <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            {responseMessage && (
                <div className="response-message">
                    {responseMessage}
                </div>
            )}
        </div>
    );
}
