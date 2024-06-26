import React from 'react';
import { Link } from 'react-router-dom';
import "../OpeningPage.css";

export default function OpeningPage() {
  return (
    <div className="card-container">
      <div className="welcome-text">Welcome to FileTracker App</div>
      
      <div className="card-row">
        <div className="card">
          <Link to="/admin" className="card-link">
            <h2>Admin Login</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/office" className="card-link">
            <h2>Office Login</h2>
          </Link>
        </div>
      </div>
      <div className="card-row">
        <div className="card">
          <Link to="/employee" className="card-link">
            <h2>Employee Login</h2>
          </Link>
        </div>
        <div className="card">
          <Link to="/monitoring" className="card-link">
            <h2>Monitoring</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
