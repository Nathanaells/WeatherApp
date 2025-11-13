import React, { useEffect } from "react";
import { LogIn, UserPlus, LogOut } from "lucide-react";
import axios from "axios";
import { showError, showSuccess } from "../UI/toastUI";
import url from "../constant/url";

export default function TopLeftPanel({
  onOpenAuthForm,
  isLoggedIn,
  onLogout,
  onLoginSuccess,
  refreshUserWeather,
}) {
  async function handleCredentialResponse(response) {
    try {
      const { data } = await axios.post(
        `${url}/users/login/google`,
        {
          googleAccessToken: response.credential,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        showSuccess("Login successful!");

        if (onLoginSuccess) onLoginSuccess();
        if (refreshUserWeather) refreshUserWeather();
      } else {
        throw new Error("No access token received");
      }
    } catch (error) {
      console.error("Google login error:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Google login failed. Please try again.";
      showError(errorMessage);
    }
  }

  useEffect(() => {
    if (!window.google)
      return console.error("Google Sign-In script not loaded");

    try {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
      });

      const buttonDiv = document.getElementById("buttonDiv");
      if (buttonDiv) {
        window.google.accounts.id.renderButton(buttonDiv, {
          theme: "outline",
          size: "large",
          text: "signin_with",
          shape: "rectangular",
          logo_alignment: "left",
        });
      }
    } catch (error) {
      showError(error);
    }

    return () => window.google?.accounts.id.cancel();
  }, []);

  return (
    <div className="absolute top-4 left-4 z-20 bg-gray-900/80 p-4 rounded-2xl shadow-md text-white backdrop-blur-sm">
      <h2 className="text-lg font-bold mb-2">Weather Globe</h2>
      {!isLoggedIn ? (
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onOpenAuthForm("login")}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md transition-colors"
          >
            <LogIn size={18} /> Login
          </button>

          <button
            onClick={() => onOpenAuthForm("register")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md transition-colors"
          >
            <UserPlus size={18} /> Register
          </button>

          <div id="buttonDiv" className="mt-2"></div>
        </div>
      ) : (
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md transition-colors"
        >
          <LogOut size={18} /> Logout
        </button>
      )}
    </div>
  );
}
