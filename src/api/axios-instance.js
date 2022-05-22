import axios from 'axios';

const { REACT_APP_API_HOST } = process.env;

export const axiosInstance = axios.create({
  baseURL: REACT_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});
