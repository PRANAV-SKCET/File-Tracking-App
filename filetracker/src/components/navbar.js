import React from 'react';
import { Link } from 'react-router-dom';
import '../navbar.css'; 

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/admin">Admin Login</Link></li>
                <li><Link to="/office">Office Login</Link></li>
                <li><Link to="/employee">Employee Login</Link></li>
                <li><Link to="/monitoring">Track Application</Link></li>
            </ul>
        </nav>
    );
}
