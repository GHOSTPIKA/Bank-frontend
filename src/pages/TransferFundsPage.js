import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransferFundsPage = ({ onTransferSuccess }) => {
  const [recipientUsername, setRecipientUsername] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [balance, setBalance] = useState(0);
  const customerId = 1;

  useEffect(() => {
    axios.get(`http://localhost:1600/api/users/${customerId}/balance`)
      .then(response => {
        setBalance(response.data);
      })
      .catch(error => {
        console.error('Error fetching balance', error);
      });
  }, [customerId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (parseFloat(amount) > balance) {
      setStatus("Limit exceeded");
      return;
    }

    axios.post(`http://localhost:1600/api/users/${customerId}/transfer-funds`, {
      recipientUsername,
      amount: parseFloat(amount),
    })
      .then(response => {
        setStatus(response.data);
        setBalance(prevBalance => prevBalance - parseFloat(amount));
        onTransferSuccess();
      })
      .catch(error => {
        setStatus('Transfer failed');
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <p>Current Balance: ${balance}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipient Username:</label>
          <input
            type="text"
            value={recipientUsername}
            onChange={(e) => setRecipientUsername(e.target.value)}
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
        <button type="submit">Transfer</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default TransferFundsPage;
