import axios from 'axios';
import * as responseActions from './containers/notifications/actions';

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
  return request;
});

/**
 * Response Interceptor to handle response errors
 */
axiosInstance.interceptors.response.use(response => response, (error) => {
  // console.log('response interceptor:', error.response);
  const response = error.response || null;
  const status = response.status || null;

  switch (true) {
    case status === 404:
      responseActions.createNotification('Unathorized request', 'error');
      break;
    case status >= 500:
      responseActions.createNotification('Server Error', 'error');
      break;
    default:
      responseActions.createNotification('Unknown error in response', 'error');
  }
  return Promise.reject(error);
});

export default axiosInstance;
