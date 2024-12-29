// src/pages/DashboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your online banking dashboard</p>
      <ul>
        <li><Link to="/account-overview">Account Overview</Link></li>
        <li><Link to="/transaction-history">Transaction History</Link></li>
        <li><Link to="/transfer-funds">Transfer Funds</Link></li>
        <li><Link to="/bill-payment">Bill Payment</Link></li>
        <li><Link to="/manage-beneficiaries">Manage Beneficiaries</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default DashboardPage;
