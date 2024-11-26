import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginTest: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    // logout: (state) => {
    //     state.isLoggedIn=false;
    //     state.email = null;
    //     state.password = null;
    // },
  },
});

export const { loginTest } = loginSlice.actions;
export default loginSlice.reducer;
