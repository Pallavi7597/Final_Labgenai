import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
          {/* Add more navigation links */}
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add more routes for different components */}
      </Routes>
    </div>
  </Router>
);

export default App;
