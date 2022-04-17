import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import postSlice from "./post-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
  },
});

export default store;
