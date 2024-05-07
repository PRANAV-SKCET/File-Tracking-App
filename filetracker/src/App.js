import OpeningPage from './components/openingPage';
import './App.css';
import { AuthContext } from './components/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
        </Routes>
      </Router>
    </div>

  </AuthContext.Provider>
  );
}

export default App;
