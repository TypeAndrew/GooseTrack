import axios from 'axios';
import serverConnection from 'components/constants/PARAMS';

export const publicApi = axios.create({
    baseURL: `${serverConnection}/`,
});

export const privateApi = axios.create({
    baseURL: `${serverConnection}/`,
});

export const token = {
    set: (data) => {
        privateApi.defaults.headers.Authorization = `Bearer ${data}`;
    },

    remove: () => {
        privateApi.defaults.headers.Authorization = null;
    },
};