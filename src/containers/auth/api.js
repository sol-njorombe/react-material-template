import axios from '../../rootAxios';

export const cleanSession = () => {
  if (typeof (Storage) === 'undefined') {
    alert('Local storage is not supported by this browser');
    return;
  }
  localStorage.removeItem('access-token');
  localStorage.removeItem('uid');
  localStorage.removeItem('client');
  localStorage.removeItem('expiry');
  localStorage.removeItem('token-type');
};

export const storeSession = (headers) => {
  if (typeof (Storage) === 'undefined') {
    alert('Local storage is not supported by this browser');
    return;
  }
  cleanSession();
  localStorage.setItem('access-token', headers['access-token']);
  localStorage.setItem('uid', headers.uid);
  localStorage.setItem('client', headers.client);
  localStorage.setItem('expiry', headers.expiry);
  localStorage.setItem('token-type', headers['token-type']);
};

export const logIn = (email, password) => axios({
  url: '/auth/sign_in',
  method: 'POST',
  data: {
    email,
    password,
  },
});

export const register = user => axios({
  url: '/auth',
  method: 'POST',
  data: {
    firstname: user.firstname,
    middlename: user.middlename,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    confirm_password: user.confirmPassword,
  },
});

export const updateUser = user => axios({
  url: '/auth',
  method: 'PUT',
  data: {
    firstname: user.firstname,
    middlename: user.middlename,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    confirm_password: user.confirmPassword,
  },
});

export const forgotPassword = email => axios({
  url: '/auth/password',
  method: 'POST',
  data: {
    email,
    redirect_url: 'http://localhost:3000/resetpw',
  },
});


export const resetPassword = passwords => axios({
  url: '/auth/password',
  method: 'PUT',
  data: passwords,
});

export const validateToken = () => axios.get('/auth/validate_token');

export const logOut = () => axios.get('/auth/validate_token');

