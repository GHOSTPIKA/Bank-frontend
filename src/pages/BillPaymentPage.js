// src/pages/BillPaymentPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BillPaymentPage = ({ onPaymentSuccess }) => {
  const [biller, setBiller] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [balance, setBalance] = useState(0);
  const customerId = 1; // Replace with the actual logged-in user ID

  useEffect(() => {
    // Fetch balance on page load
    axios.get(`http://localhost:8080/api/users/${customerId}/balance`)
      .then(response => {
        setBalance(response.data);
      })
      .catch(error => {
        console.error('Error fetching balance', error);
      });
  }, [customerId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if amount exceeds the current balance
    if (parseFloat(amount) > balance) {
      setStatus("Limit exceeded");
      return;
    }

    axios.post(`http://localhost:1600/api/users/${customerId}/pay-bill`, {
      biller,
      amount: parseFloat(amount),
    })
      .then(response => {
        setStatus(response.data);
        setBalance(prevBalance => prevBalance - parseFloat(amount)); // Update balance
        onPaymentSuccess(); // Notify the parent to refresh data if needed
      })
      .catch(error => {
        setStatus('Bill payment failed');
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h2>Bill Payment</h2>
      <p>Current Balance: ${balance}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Biller:</label>
          <input
            type="text"
            value={biller}
            onChange={(e) => setBiller(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Pay Bill</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default BillPaymentPage;
