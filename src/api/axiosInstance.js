import axios from 'axios';
import { getToken } from '../utils/authHelpers';

const instance = axios.create({
  baseURL: 'http://localhost:7143', // Auth Svc base URL, or gateway if you have one
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
