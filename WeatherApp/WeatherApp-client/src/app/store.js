import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice";
import userWeatherReducer from "../features/userWeather/userWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    userWeather: userWeatherReducer,
  },
});
