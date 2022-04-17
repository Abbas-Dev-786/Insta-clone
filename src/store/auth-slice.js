import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { showNav: false },
  reducers: {
    login(state) {
      state.showNav = true;
    },
    logout(state) {
      state.showNav = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
