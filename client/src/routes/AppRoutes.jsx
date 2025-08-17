import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../pages/NavBar.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import '../styles/globals.css';
import AuthPage from "../pages/Authentication/AuthPage.jsx";
import AdminPannel from '../pages/AdminPannel.jsx';
import ProductDetailsPage from '../pages/ProductDetailsPage.jsx';
import UserProfileSetupPage from '../pages/UserProfileSetupPage.jsx';

const AppRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>  
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />

        {/* Single page with Login + Register tabs */}
        <Route path="/auth" element={<AuthPage />} />  

        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="/admin" element={<AdminPannel />} />
        <Route path="/userProfileSetup" element={<UserProfileSetupPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;