import { useEffect, useRef, useState } from "react";
import GlobeRef from "globe.gl";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchWeatherAsync } from "../features/weather/weatherSlice";
import { fetchUserWeatherAsync } from "../features/userWeather/userWeatherSlice";
import WeatherDetailPanel from "./WeatherDetailPanel";
import UserWeatherPanel from "./UserWeatherPanel";
import Legend from "./Legend";

export default function EarthGlobe() {
  const globeRef = useRef();
  const globeInstanceRef = useRef(null);
  const dispatch = useDispatch();

  const [selectedWeather, setSelectedWeather] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const { globalData } = useSelector((state) => state.weather);
  const { data: userData } = useSelector((state) => state.userWeather);

  useEffect(() => {
    dispatch(fetchWeatherAsync());
    dispatch(fetchUserWeatherAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!globeRef.current) return;

    const globe = GlobeRef()(globeRef.current)
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      )
      .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
      .showAtmosphere(true)
      .atmosphereColor("lightskyblue")
      .atmosphereAltitude(0.25);

    globe.pointOfView({ lat: 0, lng: 0, altitude: 2.5 });

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.3;

    globeInstanceRef.current = globe;
  }, []);

  useEffect(() => {
    if (!globeInstanceRef.current) return;

    const globalMarkers = (Array.isArray(globalData) ? globalData : []).map(
      (country) => ({
        lat: country.lat,
        lng: country.lon,
        label: `${country.name} (${country.cityCount} cities)`,
        color: "deepskyblue",
        size: 0.05 + country.cityCount * 0.004,
        data: country,
      })
    );

    const userMarkers = (Array.isArray(userData) ? userData : [])
      .filter((u) => u.lat != null && u.lon != null)
      .map((u) => ({
        lat: u.lat || 0,
        lng: u.lon || 0,
        label: `${u.cityName}, ${u.country || ""}\nTemp: ${u.temperature}°C\n${
          u.description || ""
        }`,
        color: "orange",
        size: 0.12,
        data: u,
      }));

    const combinedMarkers = [...globalMarkers, ...userMarkers];

    globeInstanceRef.current
      .pointsData(combinedMarkers)
      .pointAltitude("size")
      .pointColor("color")
      .pointLabel("label")
      .onPointClick(async (point) => {
        const data = point.data;

        if (data.cityName) {
          setSelectedWeather({ ...data, type: "user" });
          return;
        }

        setLoadingDetail(true);
        try {
          const res = await axios.get(
            `http://localhost:3000/weather/country/${data.name}`
          );
          if (res.data && Array.isArray(res.data.cities)) {
            setSelectedWeather({
              country: data.name,
              cities: res.data.cities,
              type: "global",
            });
          }
        } catch (err) {
          console.error("Error fetching country details:", err);
        } finally {
          setLoadingDetail(false);
        }
      });
  }, [globalData, userData]);

  return (
    <>
      <div
        ref={globeRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000510",
        }}
      />

      {loadingDetail && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded-lg shadow-md z-50">
          Loading weather detail...
        </div>
      )}

      {selectedWeather?.type === "global" && (
        <WeatherDetailPanel
          weather={selectedWeather}
          onClose={() => setSelectedWeather(null)}
        />
      )}

      {selectedWeather?.type === "user" && (
        <UserWeatherPanel
          key={selectedWeather.id + "-" + selectedWeather.votes}
          weather={selectedWeather}
          onClose={() => setSelectedWeather(null)}
        />
      )}
      <Legend />
    </>
  );
}
