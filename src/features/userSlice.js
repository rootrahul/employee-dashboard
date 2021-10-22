import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userEmail",
  initialState: {
    email: null,
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.email = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.email.email;
export default userSlice.reducer;
