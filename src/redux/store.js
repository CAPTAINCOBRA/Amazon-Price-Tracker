import { configureStore } from "@reduxjs/toolkit";
import trackerSlice from "./Tracker/trackerSlice";

export const store = configureStore({
  reducer: {
    tracker: trackerSlice.reducer,
  },
});
