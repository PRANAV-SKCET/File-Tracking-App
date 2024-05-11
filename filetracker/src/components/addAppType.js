import React, { useState, useContext } from 'react';
import axios from 'axios'; 
import '../addAppType.css';
import { AuthContext } from './context';

export default function AddAppType() {
    const [applicationId, setApplicationId] = useState('');
    const [applicationName, setApplicationName] = useState('');
    const [steps, setSteps] = useState([]);
    const { officeId, districtId } = useContext(AuthContext);

    const handleAddStep = () => {
        setSteps([...steps, { employeeId: '', employeeName: '', description: '', noOfDays: '', employeeDesignation: '',applicationId:applicationId, districtId:districtId,officeId:officeId }]);
    };

    const handleStepChange = (index, field, value) => {
        const newSteps = [...steps];
        newSteps[index][field] = value;
        setSteps(newSteps);
    };

    const handleRemoveStep = (index) => {
        const newSteps = [...steps];
        newSteps.splice(index, 1);
        setSteps(newSteps);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response =  await axios.post('http://localhost:8080/saveApplicationType', {
                applicationId,
                applicationName,
                officeId,
                districtId
            });
            console.log(response.data);
            // Save application steps
            await axios.post('http://localhost:8080/saveApplicationSteps', 

                steps
            );
            console.log(steps);
            setApplicationId('');
            setApplicationName('');
            setSteps([]);

            console.log('Application submitted successfully');
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
                    />
                </div>
                <div className="form-groupType">
                    <label htmlFor="applicationName">Application Name:</label>
                    <input
                        type="text"
                        id="applicationName"
                        value={applicationName}
                        onChange={(e) => setApplicationName(e.target.value)}
                    />
                </div>
                <h2>Steps</h2>
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <div className="form-groupType">
                            <label htmlFor={`employeeId_${index}`}>Employee ID:</label>
                            <input
                                type="text"
                                id={`employeeId_${index}`}
                                value={step.employeeId}
                                onChange={(e) => handleStepChange(index, 'employeeId', e.target.value)}
                            />
                        </div>
                        <div className="form-groupType">
                            <label htmlFor={`employeeName_${index}`}>Employee Name:</label>
                            <input
                                type="text"
                                id={`employeeName_${index}`}
                                value={step.employeeName}
                                onChange={(e) => handleStepChange(index, 'employeeName', e.target.value)}
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
                        <div className="form-groupType">
                            <label htmlFor={`employeeDesignation_${index}`}>Employee Designation:</label>
                            <input
                                type="text"
                                id={`employeeDesignation_${index}`}
                                value={step.employeeDesignation}
                                onChange={(e) => handleStepChange(index, 'employeeDesignation', e.target.value)}
                            />
                        </div>
                        <button type="button" onClick={() => handleRemoveStep(index)}>Remove Step</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddStep}>Add Step</button>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
