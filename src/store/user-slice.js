import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: null,
    userEmail: null,
    userImg: null,
  },
  reducers: {
    signInUserWithGoogle(state, action) {
      const user = action.payload;
      state.userEmail = user.email;
      state.userName = user.displayName;
      state.userImg = user.photoURL;
    },

    signInUser(state, action) {
      const user = action.payload;
      state.userEmail = user.email;
      state.userName = user.displayName;
    },

    signOutUser(state) {
      state.userEmail = null;
      state.userName = null;
      state.userImg = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
