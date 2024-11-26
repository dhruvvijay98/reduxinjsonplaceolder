import { createSlice } from "@reduxjs/toolkit";

const signUpSlicer = createSlice({
  name: "auth",
  initialState: {
    user: [], // Stores signed-up user information
    isLoggedIn: false,
  },
  reducers: {
    signup: (state, action) => {
      state.user = [...state.user,action.payload];
      state.isLoggedIn = true; // Mark the user as logged in
    },
  },
});

export const { signup } = signUpSlicer.actions; // Export actions
export default signUpSlicer.reducer; // Export reducer
