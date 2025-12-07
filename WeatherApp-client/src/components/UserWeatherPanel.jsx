// UserWeatherPanel.jsx
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showError, showSuccess } from "../UI/toastUI";
import EditWeatherForm from "./EditWeatherForm";
import { fetchUserWeatherAsync } from "../features/userWeather/userWeatherSlice";
import url from "../constant/url";

export default function UserWeatherPanel({ weather, onClose }) {
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);
  const [localWeather, setLocalWeather] = useState(weather);

  useEffect(() => {
    setLocalWeather(weather);
  }, [weather]);

  const handleVote = async () => {
    try {
      const token = localStorage.getItem("access_token");
      await axios.patch(
        `${url}/user-weather/${localWeather.id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      showSuccess("Vote berhasil!");
      setLocalWeather((prev) => ({
        ...prev,
        votes: prev.votes + 1,
      }));

      dispatch(fetchUserWeatherAsync());
    } catch (error) {
      console.log(error);
      showError(error.response?.data?.message || "Gagal vote");
    }
  };

  const handleEdit = () => setShowEditForm(true);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("access_token");
      await axios.delete(`${url}/user-weather/${localWeather.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showSuccess("Data berhasil dihapus!");

      dispatch(fetchUserWeatherAsync());

      onClose();
    } catch (err) {
      showError(err.response?.data?.message || "Gagal menghapus");
    }
  };

  return (
    <>
      {console.log(weather)}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg p-4 w-96 z-50">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{localWeather.cityName}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            <X />
          </button>
        </div>

        <div className="space-y-1 text-sm text-gray-700">
          <p>🌍 Country: {localWeather.country}</p>
          <p>🌡 Temperature: {localWeather.temperature}°C</p>
          <p>💧 Humidity: {localWeather.humidity}%</p>
          <p>💨 Wind: {localWeather.windSpeed} km/h</p>
          <p>🌤 Description: {localWeather.description}</p>
          <p>🌤 Total Vote: {localWeather.votes}</p>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            onClick={handleVote}
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md"
          >
            Vote
          </button>
          <button
            onClick={handleEdit}
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>

      {showEditForm && (
        <EditWeatherForm
          mode="edit"
          weatherData={localWeather}
          onClose={() => setShowEditForm(false)}
          onWeatherSaved={(updated) => {
            showSuccess("Data berhasil diperbarui!");
            setLocalWeather(updated);
            dispatch(fetchUserWeatherAsync());
            setShowEditForm(false);
          }}
        />
      )}
    </>
  );
}
