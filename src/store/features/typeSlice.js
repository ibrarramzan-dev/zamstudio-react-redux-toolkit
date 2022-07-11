import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { httpClient } from "../../util/Api";

export const addType = createAsyncThunk(
  "type/add",
  async ({ name, description, image, token }, { rejectWithValue }) => {
    try {
      const { data } = await httpClient.post(
        "http://safetydevapis.safetytracker.be/public/api/management/information/type",
        { name, description },
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
    [addType.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.data = payload;
    },
    [addType.rejected]: (state, { payload }) => {
      state.message = payload;
      state.success = false;
    },
  },
});

export default typeSlice;
