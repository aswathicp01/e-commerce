import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import ArtistSignup from './components/ArtistSignUp';
import Login from './components/Login';
import ArtistProfile from './components/ArtistProfile';
import Home from './components/Home';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleAuth = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <BrowserRouter>
        <div className="app-container">
          <div className="auth-container">
            <Routes>
              <Route path="/login" element={<Login onLogin={handleAuth} />} />
              <Route path="/signup" element={<ArtistSignup onSignup={handleAuth} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header user={user} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/profile" element={<ArtistProfile user={user} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
