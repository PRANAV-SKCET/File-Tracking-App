import OpeningPage from './components/openingPage';
import './App.css';
import { AuthContext } from './components/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Monitoring from './components/monitoring';
import AdminPage from './components/adminPage';
import OfficePage from './components/officePage';
import EmployeePage from './components/employeePage';

function App() {
  return (
    <AuthContext.Provider
    value={{
    }}
  >

    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/monitoring" element={<Monitoring />} />
        </Routes>
      </Router>
    </div>

  </AuthContext.Provider>
  );
}

export default App;
