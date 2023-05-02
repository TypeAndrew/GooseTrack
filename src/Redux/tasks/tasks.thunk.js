import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from 'Redux/selectors';
import { privateApi, token } from '../../http/http';
import axios from 'axios';

export const getTasksThunk = createAsyncThunk(
  'GET tasks',
  async (dateMonth, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
      return { data, dateMonth };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const postTasksThunk = createAsyncThunk(
  'POST tasks',
  async (values, { getState }, rejectWithValue) => {
    const stateTocken = selectToken(getState());
    token.set(stateTocken);
    const { data } = await privateApi.post('tasks', values);
    return data;
  }
);

export const patchTasksThunk = createAsyncThunk(
  'PATCH tasks',
  async (values, { getState }) => {
    const stateTocken = selectToken(getState());
    token.set(stateTocken);
    const { data } = await privateApi.patch(`tasks/${values.id}`, {
      ...values.data,
    });
    return data;
  }
);

export const deleteTasksThunk = createAsyncThunk(
  'DELETE tasks',
  async (id, { getState }) => {
    const stateTocken = selectToken(getState());
    token.set(stateTocken);
    const { data } = await privateApi.delete(`tasks/${id}`);
    return data;
  }
);
