import { useEffect, useState } from "react";
import axios from "axios";
import url from "../constant/url";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [cities, setCities] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios
      .get(`${url}/weather/countries`)
      .then((res) => setCountries(res.data.countries || []))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

  async function handleExpand(countryName) {
    if (expanded === countryName) {
      setExpanded(null);
      return;
    }

    if (!cities[countryName]) {
      try {
        const res = await axios.get(`${url}/weather/country/${countryName}`);
        setCities((prev) => ({
          ...prev,
          [countryName]: res.data.cities || [],
        }));
      } catch (err) {
        console.error(`Error fetching cities for ${countryName}:`, err);
      }
    }

    setExpanded(countryName);
  }

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow-lg z-40"
      >
        {visible ? "Tutup" : "Country List"}
      </button>

      <div
        className={`fixed top-1/2 left-6 -translate-y-1/3 bg-gray-900/90 text-white rounded-2xl w-[300px] shadow-2xl z-50 transition-all duration-500 ${
          visible
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 -translate-x-full pointer-events-none"
        } relative`}
      >
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-5 text-gray-300 hover:text-white text-xl z-50"
        >
          ❌
        </button>

        <div className="p-6 max-h-[50vh] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Country List
          </h2>

          {countries.length === 0 && (
            <p className="text-gray-400 text-sm text-center">
              Loading countries...
            </p>
          )}

          {countries.map((c) => (
            <div key={c.name} className="mb-2">
              <button
                onClick={() => handleExpand(c.name)}
                className="w-full text-left font-medium bg-gray-800 hover:bg-gray-700 p-2 rounded-md flex justify-between"
              >
                <span>{c.name}</span>
                <span className="text-sm text-gray-300">
                  {c.cityCount > 1
                    ? `${c.cityCount} Cities`
                    : `${c.cityCount} City`}
                </span>
              </button>

              {expanded === c.name && (
                <div className="ml-4 mt-2 text-sm">
                  {!cities[c.name] ? (
                    <p className="text-gray-400 text-xs">Loading cities...</p>
                  ) : cities[c.name].length === 0 ? (
                    <p className="text-gray-400 text-xs">
                      No cities available.
                    </p>
                  ) : (
                    <div className="bg-gray-700 rounded-md p-2 space-y-2 max-h-64 overflow-y-auto">
                      {cities[c.name].map((city) => (
                        <div
                          key={city.id || city.cityName}
                          className="bg-gray-600 p-2 rounded-md hover:bg-gray-500 transition"
                        >
                          <p className="font-medium text-white">
                            {city.cityName}
                          </p>
                          <p className="text-xs text-gray-300 capitalize">
                            🌤️ {city.description}
                          </p>
                          <p className="text-xs text-gray-300">
                            🌡️ Suhu: {city.temperature}°C
                          </p>
                          <p className="text-xs text-gray-300">
                            💧 Kelembapan: {city.humidity}%
                          </p>
                          <p className="text-xs text-gray-300">
                            💨 Angin: {city.windSpeed} km/jam
                          </p>
                          {city.source && (
                            <p className="text-xxs text-gray-400 italic mt-1">
                              Source: {city.source}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
