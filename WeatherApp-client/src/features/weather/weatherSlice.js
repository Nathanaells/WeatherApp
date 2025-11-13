import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  globalData: [],
  loading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchPending: (state) => {
      state.loading = true;
      state.globalData = [];
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.globalData = action.payload;
      state.error = null;
    },
    fetchFailed: (state, action) => {
      state.loading = false;
      state.globalData = [];
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchFailed } = weatherSlice.actions;
export const fetchWeatherAsync = () => async (dispatch) => {
  try {
    dispatch(fetchPending());

    const { data } = await axios.get("http://localhost:3000/weather/countries");

    // Pastikan bentuk data sesuai — kalau backend kirim { countries: [...] }
    const countries = data.countries || data;

    dispatch(fetchSuccess(countries));
  } catch (error) {
    console.error("Error fetching weather:", error);
    dispatch(fetchFailed(error.message || "Failed to fetch weather data"));
  }
};

export default weatherSlice.reducer;
