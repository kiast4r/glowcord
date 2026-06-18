import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainDashboard from './pages/MainDashboard';

export default function App() {
  const [user, setUser] = useState(null); // Tracks logged-in user profile status

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/chat" />} />
        <Route path="/register" element={!user ? <Register setUser={setUser} /> : <Navigate to="/chat" />} />
        <Route path="/chat" element={user ? <MainDashboard user={user} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
