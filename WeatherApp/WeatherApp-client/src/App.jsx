import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBase from "./views/HomeBase";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [authMode, setAuthMode] = useState(null); // "login" | "register" | null

  const handleOpenAuthForm = (mode) => setAuthMode(mode);
  const handleCloseAuthForm = () => setAuthMode(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeBase onOpenAuthForm={handleOpenAuthForm} isLoggedIn={false} />
          }
        />
      </Routes>

      {authMode === "login" && <LoginForm onClose={handleCloseAuthForm} />}
      {authMode === "register" && (
        <RegisterForm onClose={handleCloseAuthForm} />
      )}
    </BrowserRouter>
  );
}

export default App;
