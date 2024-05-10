import { useNavigate } from 'react-router-dom';
import '../adminWorking.css';

export default function AdminWorking() {
    const navigate = useNavigate();

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <div className="admin-working">
            <div className="card" onClick={() => handleCardClick('/add-office')}>
                <h2>Add Office</h2>
            </div>
            <div className="card" onClick={() => handleCardClick('/delete-office')}>
                <h2>Delete Office</h2>
            </div>
        </div>
    );
}
