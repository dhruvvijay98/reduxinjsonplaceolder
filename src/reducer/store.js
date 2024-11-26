import { configureStore } from '@reduxjs/toolkit'
import apiReducer from "./apiSlicer";
import loginReducer from "./loginSlicer";
import { thunk } from 'redux-thunk';
import signUpReducer from "./signUpSlicer";

export const store = configureStore({
  reducer: {
    jsonPlaceHolderReducer:apiReducer,
    loginReducer:loginReducer,
    signUpReducer:signUpReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), 
  devTools: process.env.NODE_ENV !== 'production',
})