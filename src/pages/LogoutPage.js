// src/pages/LogoutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Logic to logout
    navigate('/');
  };

  return (
    <div>
      <h2>Logging out...</h2>
      {handleLogout()}
    </div>
  );
};

export default LogoutPage;
