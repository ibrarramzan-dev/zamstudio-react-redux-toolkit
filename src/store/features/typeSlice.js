import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { httpClient } from "../../util/Api";

export const addType = createAsyncThunk(
  "type/add",
  async ({ name, description, image, token }, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.post(
        "management/information/type",
        { name, description, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getType = createAsyncThunk(
  "type/get",
  async ({ token }, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.get("management/information/type", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const updateType = createAsyncThunk(
  "type/update",
  async ({ id, name, description, image, token }, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.put(
        "management/information/type",
        { id, name, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const typeSlice = createSlice({
  name: "type",
  initialState: {
    message: "",
    success: false,
    data: {},
  },
  reducers: {},
  extraReducers: {
    // Add Type
    [addType.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.data = payload;
    },
    [addType.rejected]: (state, { payload }) => {
      state.message = payload;
      state.success = false;
    },
    // Get Type
    [getType.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.data = payload;
    },
    [getType.rejected]: (state, { payload }) => {
      state.success = false;
      state.message = payload;
    },
    // Update Type
    [updateType.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.data = payload;
    },
    [updateType.rejected]: (state, { payload }) => {
      state.success = false;
      state.message = payload;
    },
  },
});

export default typeSlice;
