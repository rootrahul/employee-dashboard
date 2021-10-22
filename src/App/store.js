import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    email: useReducer,
  },
});
