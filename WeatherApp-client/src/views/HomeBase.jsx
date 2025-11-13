import React, { useState, useEffect } from "react";
import TopLeftPanel from "../components/TopLeftPanel";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import CountryList from "../components/CountryList";
import AddWeatherForm from "../components/AddWeatherForm";
import EarthGlobe from "../components/EarthGlobe";
import HardRefreshButton from "../components/HardRefreshButton";
import GeminiPanel from "../components/GeminiPanel";
import axios from "axios";
import url from "../constant/url";

export default function HomeBase() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("access_token")
  );
  const [authFormVisible, setAuthFormVisible] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [userWeather, setUserWeather] = useState([]); // state untuk data Globe

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserWeather([]); // reset Globe / data user
  };

  const openAuthForm = (mode) => {
    setAuthMode(mode);
    setAuthFormVisible(true);
  };
  const closeAuthForm = () => setAuthFormVisible(false);

  // Login sukses handler
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    refreshUserWeather(); // refresh Globe / user data
  };

  const handleRegisterSuccess = () => {
    setIsLoggedIn(true);
    refreshUserWeather();
  };

  const refreshUserWeather = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      const { data } = await axios.get(`${url}/user-weather`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserWeather(data.weather || []);
    } catch (err) {
      console.error("Failed to fetch user weather:", err);
    }
  };
  useEffect(() => {
    if (isLoggedIn) refreshUserWeather();
  }, [isLoggedIn]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <EarthGlobe userWeather={userWeather} />

      <HardRefreshButton refresh={refreshUserWeather} />

      <TopLeftPanel
        isLoggedIn={isLoggedIn}
        onOpenAuthForm={openAuthForm}
        onLogout={handleLogout}
        onLoginSuccess={handleLoginSuccess}
        refreshUserWeather={refreshUserWeather}
      />

      <CountryList />
      <AddWeatherForm isLoggedIn={isLoggedIn} />
      <GeminiPanel />

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
