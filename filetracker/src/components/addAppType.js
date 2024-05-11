import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../addAppType.css';
import { AuthContext } from './context';

export default function AddAppType() {
    const [applicationId, setApplicationId] = useState('');
    const [applicationName, setApplicationName] = useState('');
    const [steps, setSteps] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [submitMessage, setSubmitMessage] = useState('');
    const { officeId, districtId } = useContext(AuthContext);

    useEffect(() => {
        async function fetchEmployees() {
            try {            
                const response = await axios.get(`http://localhost:8080/getEmployees/${officeId}`)
                setEmployees(response.data); 
            } catch (error) {
                console.error('Error fetching employees:', error.message);
            }
        }

        fetchEmployees();
    }, []);

    const handleAddStep = () => {
        setSteps([...steps, { employeeId: '', employeeName: '', employeeDesignation: '', description: '', noOfDays: '', applicationId: applicationId, districtId: districtId, officeId: officeId }]);
    };

    const handleStepChange = (index, field, value) => {
        const newSteps = [...steps];
        newSteps[index][field] = value;
        setSteps(newSteps);
    };

    const handleEmployeeIdChange = (index, value) => {
        const employee = employees.find(emp => emp.employeeId == value);
        if (employee) {
            handleStepChange(index, 'employeeId', value);
            handleStepChange(index, 'employeeName', employee.employeeName);
            handleStepChange(index, 'employeeDesignation', employee.employeeDesignation);
        }
    };

    const handleRemoveStep = (index) => {
        const newSteps = [...steps];
        newSteps.splice(index, 1);
        setSteps(newSteps);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/saveApplicationType', {
                applicationId,
                applicationName,
                officeId,
                districtId
            });
            console.log(response.data);
            // Save application steps
            await axios.post('http://localhost:8080/saveApplicationSteps', steps);
            console.log(steps);
            setApplicationId('');
            setApplicationName('');
            setSteps([]);
            setSubmitMessage('Application created successfully');

            setTimeout(() => {
                setSubmitMessage('');
            }, 1500);
        } catch (error) {
            console.error('Error submitting application:', error.message);
        }
    };

    return (
        <div className="containerType">
            <h1>New Application Type</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-groupType">
                    <label htmlFor="applicationId">Application ID:</label>
                    <input
                        type="text"
                        id="applicationId"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-groupType">
                    <label htmlFor="applicationName">Application Name:</label>
                    <input
                        type="text"
                        id="applicationName"
                        value={applicationName}
                        onChange={(e) => setApplicationName(e.target.value)}
                        required
                    />
                </div>
                <h2>Steps</h2>
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <div className="form-groupType">
                            <label htmlFor={`employeeId_${index}`}>Employee ID:</label>
                            <select
                                id={`employeeId_${index}`}
                                value={step.employeeId}
                                onChange={(e) => handleEmployeeIdChange(index, e.target.value)}
                            >
                                <option value="">Select Employee ID</option>
                                {employees.map(employee => (
                                    <option key={employee.employeeId} value={employee.employeeId}>
                                        {employee.employeeId}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-groupType">
                            <label htmlFor={`employeeName_${index}`}>Employee Name:</label>
                            <input
                                type="text"
                                id={`employeeName_${index}`}
                                value={step.employeeName}
                                onChange={(e) => handleStepChange(index, 'employeeName', e.target.value)}
                                readOnly // Prevent manual editing
                            />
                        </div>
                        <div className="form-groupType">
                            <label htmlFor={`employeeDesignation_${index}`}>Employee Designation:</label>
                            <input
                                type="text"
                                id={`employeeDesignation_${index}`}
                                value={step.employeeDesignation}
                                onChange={(e) => handleStepChange(index, 'employeeDesignation', e.target.value)}
                                readOnly // Prevent manual editing
                            />
                        </div>
                        <div className="form-groupType">
                            <label htmlFor={`description_${index}`}>Description:</label>
                            <input
                                type="text"
                                id={`description_${index}`}
                                value={step.description}
                                onChange={(e) => handleStepChange(index, 'description', e.target.value)}
                            />
                        </div>
                        <div className="form-groupType">
                            <label htmlFor={`noOfDays_${index}`}>No of Days:</label>
                            <input
                                type="text"
                                id={`noOfDays_${index}`}
                                value={step.noOfDays}
                                onChange={(e) => handleStepChange(index, 'noOfDays', e.target.value)}
                            />
                        </div>
                        <button type="button" onClick={() => handleRemoveStep(index)}>Remove Step</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddStep}>Add Step</button>
                <br />
                <button type="submit">Submit</button>
            </form>
            {submitMessage && <div className="submit-message">{submitMessage}</div>}
        </div>
    );
}
