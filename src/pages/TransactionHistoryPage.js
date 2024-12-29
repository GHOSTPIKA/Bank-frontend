import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const customerId = 1; // Replace with actual logged-in user ID
    
    // Fetch transaction history from the backend
    axios.get(`http://localhost:1600/api/users/${customerId}/transactions`)
      .then(response => {
        setTransactions(response.data); // Set transactions from the response
      })
      .catch(error => {
        console.error('There was an error fetching transactions!', error);
      });
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{new Date(transaction.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryPage;
