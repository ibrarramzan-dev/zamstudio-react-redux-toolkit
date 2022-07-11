import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (arg, { rejectWithValue }) => {
    console.log("Args: ", arg);
    try {
      const { data } = await axios.post(
        "http://safetydevapis.safetytracker.be/public/api/login",
        arg
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    message: "",
    success: false,
  },
  reducers: {
    logout: (state, action) => {
      state.token = "";
      state.success = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.success = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.message = payload;
      state.success = false;
    },
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
