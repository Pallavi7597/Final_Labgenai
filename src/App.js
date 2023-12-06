// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login'; // Correct the import path

const Dashboard = () => (
  <div>
    <h2>Welcome to CodeCraftHub Dashboard!</h2>
    {/* Add more dashboard components here */}
  </div>
);

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* Add more navigation links */}
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* Add more routes for different components */}
      </Routes>
    </div>
  </Router>
);

export default App;
