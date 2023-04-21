import { createAsyncThunk } from '@reduxjs/toolkit';

import { publicApi, token } from '../../http/http';

export const authLoginThunk = createAsyncThunk('POST auth', async (values) => {
  const { data } = await publicApi.post(values.authType, values);
  token.set(data);
  return data;
});

