import {createSlice,} from "@reduxjs/toolkit";
import { fetchPosts } from "./apiCallingPost";

const initialState = {
  posts: [],
  error: false,
  loading: false,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {}, // Add synchronous reducers if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.posts = action.payload; // Update state with fetched posts
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Update state with error message
      });
  },
});

// Export actions and reducer
export const { increment, decrement, incrementByAmount } = postsSlice.actions;
export default postsSlice.reducer;
