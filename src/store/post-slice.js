import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    name: null,
    likes: null,
    imageURL: null,
    caption: null,
    profileImg: null,
  },
  reducers: {
    setPostData(state, action) {
      state.name = action.payload.name;
      state.likes = action.payload.likes;
      state.imageURL = action.payload.imageURL;
      state.caption = action.payload.caption;
      state.profileImg = action.payload.profileImg;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
