// import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { AuthProvider } from "./context/AuthContext";
import Home from "./views/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
