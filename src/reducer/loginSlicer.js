import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoggedIn: false,
    email: "",
    password:""
}

const loginSlice= createSlice({
    name: "login",
    initialState,
    reducer: {
        login: (state,action) =>{
            state.isLoggedIn= true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn=false;
            state.user = null;
        },
    },
});

export const {login,logout} = loginSlice.actions;
export default loginSlice.reducer;