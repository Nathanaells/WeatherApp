import { useState } from "react";
import axios from "axios";
import { showError, showSuccess } from "../UI/toastUI";

export default function AddUserWeatherButton({ isLoggedIn, onWeatherAdded }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({});

  function handleForm(e, fieldName) {
    let { value } = e.target;
    if (["temperature", "humidity", "windSpeed"].includes(fieldName)) {
      value = value === "" || isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    }
    setForm((old) => ({ ...old, [fieldName]: value }));
  }

  const handleOpenForm = () => {
    if (!isLoggedIn) {
      showError("Please log in to add weather data.");
      return;
    }
    setShowForm(true);
  };

  const handleCloseForm = () => setShowForm(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      const res = await axios.post("http://localhost:3000/user-weather", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showSuccess("Data cuaca berhasil ditambahkan!");
      if (onWeatherAdded) onWeatherAdded(res.data);
      handleCloseForm();
      setForm({});
    } catch (err) {
      console.error(err);
      showError(err.response?.data?.message || "Gagal menambahkan data cuaca");
    }
  }

  return (
    <>
      <div className="absolute right-4 top-25 transform -translate-y-1/2 z-20">
        <button
          onClick={handleOpenForm}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg transition"
        >
          Add Weather
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-xl relative w-96 max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={handleCloseForm}
            >
              X
            </button>
            <h2 className="text-lg font-semibold mb-3 text-center text-gray-800">
              Tambah Data Cuaca
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Negara"
                  onChange={(e) => handleForm(e, "country")}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City Name
                </label>
                <input
                  type="text"
                  placeholder="Nama Kota"
                  onChange={(e) => handleForm(e, "cityName")}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Temperature (°C)
                </label>
                <input
                  type="number"
                  placeholder="Temperature"
                  onChange={(e) => handleForm(e, "temperature")}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Humidity (%)
                </label>
                <input
                  type="number"
                  placeholder="Humidity"
                  onChange={(e) => handleForm(e, "humidity")}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Wind Speed (km/h)
                </label>
                <input
                  type="number"
                  placeholder="Wind Speed"
                  onChange={(e) => handleForm(e, "windSpeed")}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  placeholder="Deskripsi cuaca"
                  onChange={(e) => handleForm(e, "description")}
                  className="border p-2 rounded-md w-full"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-2"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
