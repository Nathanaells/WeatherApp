import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { showError, showSuccess } from "../UI/toastUI";

export default function RegisterForm({ onClose }) {
  const [input, setInput] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "http://localhost:3000/users/register",
        input
      );

      showSuccess(data.message);
    } catch (error) {
      showError(error.response.data.message);
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
        <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={input.username}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
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
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
