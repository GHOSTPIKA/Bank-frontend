import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TransactionConfirmationPage = () => {
  const { transactionId } = useParams(); // Assuming transaction ID comes from the URL
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    const customerId = 1; // Replace with actual logged-in user ID
    
    // Fetch specific transaction details from the backend
    axios.get(`http://localhost:1600/api/users/${customerId}/transactions/${transactionId}`)
      .then(response => {
        setTransaction(response.data); // Set transaction details
      })
      .catch(error => {
        console.error('Error fetching transaction', error);
      });
  }, [transactionId]);

  if (!transaction) return <p>Loading...</p>;

  return (
    <div>
      <h2>Transaction Confirmed</h2>
      <p>Transaction ID: {transaction.id}</p>
      <p>Amount: ${transaction.amount}</p>
      <p>Date: {new Date(transaction.date).toLocaleString()}</p>
    </div>
  );
};

export default TransactionConfirmationPage;
