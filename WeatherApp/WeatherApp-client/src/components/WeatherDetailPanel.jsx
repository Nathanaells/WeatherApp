export default function WeatherDetailPanel({ weather, onClose }) {
  return (
    <div className="fixed top-10 right-10 bg-white shadow-xl rounded-lg p-4 w-96 max-h-[80vh] overflow-y-auto z-100">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{weather.country}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          ✖
        </button>
      </div>

      {weather.cities && weather.cities.length > 0 ? (
        <div className="space-y-3">
          {weather.cities.map((city, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition"
            >
              <p className="font-medium text-gray-800">{city.cityName}</p>
              <p className="text-sm text-gray-700 capitalize">
                🌤️ {city.description}
              </p>
              <p className="text-sm">🌡️ Suhu: {city.temperature}°C</p>
              <p className="text-sm">💧 Kelembapan: {city.humidity}%</p>
              <p className="text-sm">💨 Angin: {city.windSpeed} km/jam</p>
              {city.source && (
                <p className="text-xs text-gray-500 mt-1 italic">
                  Source: {city.source}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-600 italic">
          Tidak ada data kota untuk negara ini.
        </p>
      )}
    </div>
  );
}
