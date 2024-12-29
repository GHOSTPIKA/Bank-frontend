import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [initialBalance, setInitialBalance] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the payload for signup
    const payload = {
        name: username, // Use 'name' instead of 'username' based on your Customer model
        password,
        email,
        balance: parseFloat(initialBalance), // Store the initial balance as a number
    };

    axios.post('http://localhost:1600/api/users/signup', payload)
      .then(response => {
        setStatus('Signup successful');
      })
      .catch(error => {
        setStatus('Signup failed');
        console.error('There was an error!', error);
      });
};


  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Initial Balance:</label>
          <input
            type="number"
            value={initialBalance}
            onChange={(e) => setInitialBalance(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default SignupPage;
