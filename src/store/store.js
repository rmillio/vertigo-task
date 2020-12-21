import { configureStore } from "@reduxjs/toolkit";
import { getData } from "../api/api";

export default configureStore({
  // Simulating a reducer
  reducer: {
    data: getData,
  },
});
