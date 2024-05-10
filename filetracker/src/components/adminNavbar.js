import { Link } from 'react-router-dom';
import '../adminNavbar.css';

export default function AdminNavbar() {

    function handleLogout() {
    }

    return (
        <nav className="admin-navbar">
            <ul>
                <li><Link to="/adminWorking">Home</Link></li>
                <li><Link to="/admininfo">Administrative Information</Link></li>
                <li><Link to="/adminabout">About Us</Link></li>
                <li><Link to="/adminGO">G.O</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

