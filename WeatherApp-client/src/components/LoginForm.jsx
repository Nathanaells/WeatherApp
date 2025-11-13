import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { showError, showSuccess } from "../UI/toastUI";
import url from "../constant/url";

export default function LoginForm({ onClose, onLoginSuccess }) {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${url}/users/login`, input);
      localStorage.setItem("access_token", data.access_token);
      showSuccess("Login successful!");

      if (onLoginSuccess) onLoginSuccess();
    } catch (error) {
      showError(error.response?.data?.message || "Login failed");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-xl relative w-80">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
