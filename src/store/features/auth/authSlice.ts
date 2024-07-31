import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    showSignIn: true,
  },
  reducers: {
    toggleForm: (state) => {
      state.showSignIn = !state.showSignIn;
    },
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { toggleForm, logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
