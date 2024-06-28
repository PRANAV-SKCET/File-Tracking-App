import { useNavigate } from 'react-router-dom';
import '../adminWorking.css';
import { useContext } from 'react';
import { AuthContext } from './context';

export default function AdminWorking() {
    const navigate = useNavigate();
    const { setIsAdminLoggedIn } = useContext(AuthContext);

    const handleCardClick = (route) => {
        navigate(route);
    };

    function handleLogout() {
        setIsAdminLoggedIn(false);
        navigate("/admin");
    }

    return (
        <div className="admin-working-container">
            <div className="admin-working">
                <div className="card" onClick={() => handleCardClick('/add-office')}>
                    <h2>Add Office</h2>
                </div>
                <div className="card" onClick={() => handleCardClick('/delete-office')}>
                    <h2>Delete Office</h2>
                </div>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
}
