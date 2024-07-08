import React, { useState } from "react";
import axios from "axios";

export default function AdminGO() {
    const [goNumber, setGoNumber] = useState("");
    const [pdfFile, setPdfFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (event) => {
        setPdfFile(event.target.files[0]);
    };

    const handleGoNumberChange = (event) => {
        setGoNumber(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("goNumber", goNumber);
        formData.append("file", pdfFile);

        try {
            const response = await axios.post("http://localhost:8080/uploadgo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setMessage(response.data);
        } catch (error) {
            console.error("Failed to upload document:", error);
            setMessage("Failed to upload document.");
        }
    };

    return (
        <div>
            <h1>AdminGO</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>GO Number:</label>
                    <input
                        type="text"
                        value={goNumber}
                        onChange={handleGoNumberChange}
                        required
                    />
                </div>
                <div>
                    <label>Upload PDF:</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
