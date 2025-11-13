import React, { useState, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";
import { showError, showSuccess } from "../UI/toastUI";

export default function EditWeatherForm({
  weatherData,
  onClose,
  onWeatherUpdated,
}) {
  const [input, setInput] = useState({
    temperature: "",
    description: "",
    humidity: "",
    windSpeed: "",
  });

  useEffect(() => {
    if (weatherData) {
      setInput({
        temperature: weatherData.temperature || "",
        description: weatherData.description || "",
        humidity: weatherData.humidity || "",
        windSpeed: weatherData.windSpeed || "",
      });
    }
  }, [weatherData]);

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const payload = {
        ...input,
        temperature: input.temperature ? parseFloat(input.temperature) : 0.0,
        humidity: input.humidity ? parseFloat(input.humidity) : 0.0,
        windSpeed: input.windSpeed ? parseFloat(input.windSpeed) : 0.0,
      };

      await axios.put(
        `http://localhost:3000/user-weather/${weatherData.id}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      showSuccess("Data cuaca berhasil diperbarui!");
      if (onWeatherUpdated) onWeatherUpdated(payload);
      onClose();
    } catch (err) {
      console.error(err);
      showError(err.response?.data?.message || "Gagal memperbarui data cuaca");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-xl relative w-96 max-h-[90vh] overflow-y-auto">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-lg font-semibold mb-3 text-center text-gray-800">
          Edit Data Cuaca
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Temperature (°C)
            </label>
            <input
              type="number"
              name="temperature"
              placeholder="Temperature"
              value={input.temperature}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description"
              value={input.description}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Humidity (%)
            </label>
            <input
              type="number"
              name="humidity"
              placeholder="Humidity"
              value={input.humidity}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Wind Speed (km/h)
            </label>
            <input
              type="number"
              name="windSpeed"
              placeholder="Wind Speed"
              value={input.windSpeed}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
