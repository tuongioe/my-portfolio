import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./page/user/LandingPage";
import LoginPage from "./page/user/LoginPage";
import AdminPage from "./page/auth/AdminPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
