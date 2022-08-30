import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // "not-authenticated", "authenticated"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    loggin: (state, action) => {},
    logout: (state, action) => {},
    checkingCredentials: (state, action) => {},
  },
});

export const { loggin, logout, checkingCredentials } = authSlice.actions;
