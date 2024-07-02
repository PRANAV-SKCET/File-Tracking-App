import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./context";

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

    return (
        <div>
            <h1>Rejected Applications</h1>
            {rejectedApplications.length > 0 ? (
                <ul>
                    {rejectedApplications.map((application, index) => (
                        <li key={index}>
                            <strong>Application Number:</strong> {application.applicationNumber} <br />
                            <strong>Comment:</strong> {application.comment} <br />
                            <strong>Date of Rejection:</strong> {application.dateOfRejection} <br />
                            <strong>Reason for Rejection:</strong> {application.reasonForRejection} <br />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No rejected applications found.</p>
            )}
        </div>
    );
}
