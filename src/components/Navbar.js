import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App'; // Import the useAuth hook to access auth state

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth(); // Access the auth state and logout function

  return (
    <nav>
      <ul>
        {!isAuthenticated ? (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/account-overview">Account Overview</Link></li>
            <li><Link to="/transaction-history">Transaction History</Link></li>
            <li><Link to="/transfer-funds">Transfer Funds</Link></li>
            <li><Link to="/bill-payment">Bill Payment</Link></li>
            <li><Link to="/manage-beneficiaries">Manage Beneficiaries</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
