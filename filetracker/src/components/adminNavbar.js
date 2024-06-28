// import { Link } from 'react-router-dom';
// import '../adminNavbar.css';
// import { AuthContext } from './context';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function AdminNavbar() {
//     const { setIsAdminLoggedIn} = useContext(AuthContext);
//     const navigate = useNavigate();

//     function handleLogout() {
//         setIsAdminLoggedIn(false);
//         navigate("/admin")
//     }

//     return (
//         <nav className="admin-navbar">
//             <ul>
//                 <li><Link to="/adminWorking">Home</Link></li>
//                 <li><Link to="/admininfo">Administrative Information</Link></li>
//                 <li><Link to="/adminabout">About Us</Link></li>
//                 <li><Link to="/adminGO">G.O</Link></li>
//             </ul>
//             <button onClick={handleLogout}>Logout</button>
//         </nav>
//     );
// }
import { Link } from 'react-router-dom';
import '../adminNavbar.css';
import { AuthContext } from './context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminNavbar() {
    const { setIsAdminLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        setIsAdminLoggedIn(false);
        navigate("/admin");
    }

    return (
        <nav className="admin-navbar">
            <ul>
                <li><Link to="/adminWorking">Home</Link></li>
                <li><Link to="/admininfo">Administrative Information</Link></li>
                <li><Link to="/adminabout">About Us</Link></li>
                <li><Link to="/adminGO">G.O</Link></li>
            </ul>
            
        </nav>
    );
}

