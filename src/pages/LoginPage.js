import React, { useState } from 'react';
import { useAuth } from '../App'; // Import the useAuth hook for managing authentication

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Access the login function from the AuthContext

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login data to backend
    fetch('http://localhost:1600/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse JSON response if login is successful
        } else {
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        console.log('Login success:', data);
        login(); // Call login from AuthContext to update authentication state
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Invalid email or password'); // Display error message if login fails
      });

    // Reset form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
