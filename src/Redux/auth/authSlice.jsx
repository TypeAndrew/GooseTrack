import { createSlice } from '@reduxjs/toolkit'
import { register, logIn, logOut, refreshUser } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.token = action.payload.verificationToken; //ЗАМІНИТИ НА ТОКЕН ПІСЛЯ ЗМІН БЕКЕНДУ
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
})

export const authReducer = authSlice.reducer;
