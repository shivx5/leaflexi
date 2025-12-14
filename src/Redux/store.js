import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./slice/userSlice";
export const store = configureStore({
  reducer: {
    // car:carDetailReducer
    user: userDetailsReducer,
    // calender:calenderReducer
  },
});
