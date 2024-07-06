import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./context";
import "../RejectedApplications.css";

export default function RejectedApplications() {
    const { officeId } = useContext(AuthContext);
    const [rejectedApplications, setRejectedApplications] = useState([]);

    const fetchRejectedApplications = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/getRejectedApplications/${officeId}`);
            setRejectedApplications(response.data);
        } catch (error) {
            console.error("Failed to fetch rejected applications:", error);
        }
    };

    useEffect(() => {
        fetchRejectedApplications();
    }, [officeId]);

    const handleReopen = (applicationNumber) => {
        axios.post(`http://localhost:8080/reopenApplication/${applicationNumber}`)
    };

    return (
        <div className="rejected-applications-container">
            <h1>Rejected Applications</h1>
            {rejectedApplications.length > 0 ? (
                <ul className="rejected-applications-list">
                    {rejectedApplications.map((application, index) => (
                        <li key={index} className="rejected-application-item">
                            <strong>Application Number:</strong> {application.applicationNumber} <br />
                            <strong>Date of Rejection:</strong> {application.dateOfRejection} <br />
                            <strong>Rejected By:</strong> {application.employeeId} <br />
                            <strong>Reason for Rejection:</strong> {application.reasonForRejection} <br />
                            <button onClick={() => handleReopen(application.applicationNumber)}>Reopen</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="no-applications">No rejected applications found.</p>
            )}
        </div>
    );
}
