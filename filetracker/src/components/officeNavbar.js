import { Link } from 'react-router-dom';
import '../adminNavbar.css';
import { AuthContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OfficeNavbar() {
    const { setIsOfficeLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        setIsOfficeLoggedIn(false);
        navigate("/office")
    }

    return (
        <nav className="admin-navbar">
            <ul>
                <li><Link to="/officeWorking">Home</Link></li>
                <li><Link to="/addAppType">Add Application Type</Link></li>
                <li><Link to="/officeabout">About Us</Link></li>
                <li><Link to="/officeGO">G.O</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

