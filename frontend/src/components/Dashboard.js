import React from 'react';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="user-info-card">
          <h2>User Information</h2>
          <div className="user-details">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        </div>

        <div className="features-card">
          <h2>Available Features</h2>
          <ul>
            <li>✅ Secure Authentication</li>
            <li>✅ JWT Token Management</li>
            <li>✅ Protected Routes</li>
            <li>✅ User Session Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;