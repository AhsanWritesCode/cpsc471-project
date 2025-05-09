import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerPage from './pages/Customer/CustomerPortal';
import EmployeePage from './pages/Employee/EmployeePortal';
import HomePage from './pages/LandingPage/HomePage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/customer" element={<CustomerPage />} />
                    <Route path="/employee" element={<EmployeePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;