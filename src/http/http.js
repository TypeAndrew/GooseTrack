import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'http://localhost:3001/api/users/',
});

export const privateApi = axios.create({
  baseURL: 'https://localhost:3001/',
});

export const token = {
  set: (data) => {
    privateApi.defaults.headers.Authorization = `Bearer ${data.token}`;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
