import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar'; // Import the NavBar component
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AccountOverviewPage from './pages/AccountOverviewPage';
import TransactionHistoryPage from './pages/TransactionHistoryPage';
import TransferFundsPage from './pages/TransferFundsPage';
import BillPaymentPage from './pages/BillPaymentPage';
import ManageBeneficiariesPage from './pages/ManageBeneficiariesPage';
import ProfilePage from './pages/ProfilePage';
import LogoutPage from './pages/LogoutPage';
import './App.css';


// Create an AuthContext to manage the authentication state
const AuthContext = createContext();

function App() {
  // State to track whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login/signup and set authentication state
  const login = () => {
    setIsAuthenticated(true); // Simulate login success
  };

  const logout = () => {
    setIsAuthenticated(false); // Simulate logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <Router>
        <NavBar /> {/* Include NavBar */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />}
          />
          <Route
            path="/account-overview"
            element={isAuthenticated ? <AccountOverviewPage /> : <Navigate to="/" />}
          />
          <Route
            path="/transaction-history"
            element={isAuthenticated ? <TransactionHistoryPage /> : <Navigate to="/" />}
          />
          <Route
            path="/transfer-funds"
            element={isAuthenticated ? <TransferFundsPage /> : <Navigate to="/" />}
          />
          <Route
            path="/bill-payment"
            element={isAuthenticated ? <BillPaymentPage /> : <Navigate to="/" />}
          />
          <Route
            path="/manage-beneficiaries"
            element={isAuthenticated ? <ManageBeneficiariesPage /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <ProfilePage /> : <Navigate to="/" />}
          />
          <Route
            path="/logout"
            element={isAuthenticated ? <LogoutPage /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

// Custom Hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default App;
