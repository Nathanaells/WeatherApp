import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import url from "../../constant/url";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const userWeatherSlice = createSlice({
  name: "userWeather",
  initialState,
  reducers: {
    fetchPending: (state) => {
      state.loading = true;
      state.data = [];
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchFailed: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});

export const { fetchPending, fetchSuccess, fetchFailed } =
  userWeatherSlice.actions;

// 🔹 Thunk untuk ambil data user weather
export const fetchUserWeatherAsync = () => async (dispatch) => {
  try {
    dispatch(fetchPending());

    const token = localStorage.getItem("access_token");
    if (!token) {
      dispatch(fetchSuccess([])); // kalau belum login, kosongkan data aja
      return;
    }

    const { data } = await axios.get(`${url}/user-weather`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(fetchSuccess(data));
  } catch (error) {
    console.error("Error fetching user weather:", error);
    dispatch(fetchFailed(error.message || "Failed to fetch user weather data"));
  }
};

export default userWeatherSlice.reducer;
