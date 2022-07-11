import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import typeSlice from "./features/typeSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    type: typeSlice.reducer,
  },
});

export default store;
