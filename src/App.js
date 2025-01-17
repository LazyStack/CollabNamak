// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme'; // The theme file we created
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BrandDashboard from './pages/BrandDashboard';
import InfluencerDashboard from './pages/InfluencerDashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
