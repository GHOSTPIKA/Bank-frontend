import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountOverviewPage = () => {
  const [balance, setBalance] = useState(0);
  const customerId = 1; // Replace with the actual logged-in user ID

  useEffect(() => {
    // Fetch balance on page load
    axios.get(`http://localhost:1600/api/users/${customerId}/balance`)
      .then(response => {
        setBalance(response.data);
      })
      .catch(error => {
        console.error('Error fetching balance', error);
      });
  }, [customerId]);

  return (
    <div>
      <h2>Account Overview</h2>
      <p>Current Balance: ${balance}</p>
      {/* Add other account information as needed */}
    </div>
  );
};

export default AccountOverviewPage;
