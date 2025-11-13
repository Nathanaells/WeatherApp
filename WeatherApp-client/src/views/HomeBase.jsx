import React, { useState } from "react";
import TopLeftPanel from "../components/TopLeftPanel";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import CountryList from "../components/CountryList";
import AddWeatherForm from "../components/AddWeatherForm";
import EarthGlobe from "../components/EarthGlobe";
import HardRefreshButton from "../components/HardRefreshButton";
import GeminiPanel from "../components/GeminiPanel";

export default function HomeBase() {
  // 🔹 State autentikasi
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );
  const [authFormVisible, setAuthFormVisible] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" | "register"

  // 🔹 Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  // 🔹 Buka/tutup form login & register
  const openAuthForm = (mode) => {
    setAuthMode(mode);
    setAuthFormVisible(true);
  };
  const closeAuthForm = () => setAuthFormVisible(false);

  // 🔹 Setelah login/register sukses
  const handleLoginSuccess = () => setIsLoggedIn(true);
  const handleRegisterSuccess = () => setIsLoggedIn(true);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* 🌍 Globe utama */}
      <EarthGlobe />

      {/* 🔄 Tombol Hard Refresh */}
      <HardRefreshButton />

      {/* 👤 Panel login/register/logout di pojok kiri atas */}
      <TopLeftPanel
        isLoggedIn={isLoggedIn}
        onOpenAuthForm={openAuthForm}
        onLogout={handleLogout}
      />

      {/* 📜 List negara + tombol tambah cuaca */}
      <CountryList />
      <AddWeatherForm isLoggedIn={isLoggedIn} />

      {/* 🤖 Panel Gemini AI (analisis cuaca via prompt) */}
      <GeminiPanel />

      {/* 🔐 Popup form login/register */}
      {authFormVisible &&
        (authMode === "login" ? (
          <LoginForm
            onClose={closeAuthForm}
            onLoginSuccess={handleLoginSuccess}
          />
        ) : (
          <RegisterForm
            onClose={closeAuthForm}
            onRegisterSuccess={handleRegisterSuccess}
          />
        ))}
    </div>
  );
}
