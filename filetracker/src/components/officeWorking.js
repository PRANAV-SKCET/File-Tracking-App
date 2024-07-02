import { useNavigate } from 'react-router-dom';
import '../adminWorking.css';

export default function OfficeWorking() {
    const navigate = useNavigate();

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <div className="admin-working">
            <div className="card" onClick={() => handleCardClick('/add-employee')}>
                <h2>Add Employee</h2>
            </div>
            <div className="card" onClick={() => handleCardClick('/delete-employee')}>
                <h2>Delete Employee</h2>
            </div>
            <div className="card" onClick={() => handleCardClick('/add-application')}>
                <h2>New Application</h2>
            </div>
            <div className="card" onClick={() => handleCardClick('/rejected-application')}>
                <h2>Rejected Application</h2>
            </div>
        </div>
    );
}
