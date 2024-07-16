import rootSlice from "../features/rootSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userForm: rootSlice,
  },
});

export default store;
