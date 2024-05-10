import OpeningPage from './components/openingPage';
import './App.css';
import { AuthContext } from './components/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Monitoring from './components/monitoring';
import AdminPage from './components/adminPage';
import OfficePage from './components/officePage';
import EmployeePage from './components/employeePage';
import AdminWorking from './components/adminWorking';
import OfficeWorking from './components/officeWorking';
import EmployeeWorking from './components/employeeWorking';
import AdminGO from './components/adminGO';
import { useState } from 'react';
import AdminNavbar from "./components/adminNavbar";
import AdminInfo from './components/adminInfo';
import AdminAbout from './components/adminAbout';
import AddOffice from './components/addOffice';
import DeleteOffice from './components/deleteOffice';
import AddEmployee from './components/addEmployee';
import DeleteEmployee from './components/deleteEmployee';


function App() {

const[isAdminLoggedIn,setIsAdminLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
    value={{
      isAdminLoggedIn,
      setIsAdminLoggedIn,
    }}
  >

    <div className="App">
      <Router>
      {isAdminLoggedIn && <AdminNavbar/>}
        <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/office" element={<OfficePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/adminWorking" element={<AdminWorking />} />
        <Route path="/officeWorking" element={<OfficeWorking />} />
        <Route path="/employeeWorking" element={<EmployeeWorking />} />
        <Route path="/admininfo" element={<AdminInfo />} />
        <Route path="/adminabout" element={<AdminAbout />} />
        <Route path="/adminGO" element={<AdminGO />} />
        <Route path="/add-office" element={<AddOffice />} />
        <Route path="/delete-office" element={<DeleteOffice />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployee />} />
        </Routes>
      </Router>
    </div>

  </AuthContext.Provider>
  );
}

export default App;
