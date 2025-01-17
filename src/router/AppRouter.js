// src/router/AppRouter.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import BrandDashboard from '../pages/BrandDashboard';
import InfluencerDashboard from '../pages/InfluencerDashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/brand/dashboard" element={<BrandDashboard />} />
        <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
