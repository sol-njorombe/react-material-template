import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://104.236.28.48:80',
  /* other custom settings */
});

/**
 * Request Inteceptor to provide auth headers
 */
axiosInstance.interceptors.request.use((request) => {
  request.headers['access-token'] = localStorage.getItem('access-token');
  request.headers.client = localStorage.getItem('client');
  request.headers['token-type'] = localStorage.getItem('token-type');
  request.headers.uid = localStorage.getItem('uid');
  console.log('Request Interceptor: ', request);
  return request;
});

export default axiosInstance;
