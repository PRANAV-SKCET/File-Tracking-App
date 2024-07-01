import { Link } from 'react-router-dom';
import '../adminNavbar.css';
import { AuthContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmployeeNavbar() {
    const { setIsEmployeeLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        setIsEmployeeLoggedIn(false);
        navigate("/employee")
    }

    return (
        <nav className="admin-navbar">
            <ul>
                <li><Link to="/employeeWorking">Home</Link></li>
                <li><Link to="/pending">Delayed applications</Link></li>
                <li><Link to="/officeabout">About Us</Link></li>
                <li><Link to="/officeGO">G.O</Link></li>
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}

