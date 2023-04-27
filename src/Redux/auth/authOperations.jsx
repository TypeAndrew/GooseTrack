import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://goose-track-back.onrender.com";

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.newUser.token); 
      return res.data.newUser;
    } catch (error) {
      toast.error(`${error.response.status} ${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error(`${error.response.status} ${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    toast.error(`${error.response.status} ${error.response.data.message}`, {
      position: toast.POSITION.TOP_RIGHT
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.post('/user/current');
      return res.data;
    } catch (error) {
      toast.error(`${error.response.status} ${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateInfo = createAsyncThunk(
  'auth/update',
 async (user, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user/info', user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);