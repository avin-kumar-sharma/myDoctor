import API from '../../api';

export function getProfileAPI() {
  return API.get('/profile');
}

export function loginAPI(email, password) {
  return API.get('/login', {
    email,
    password,
  });
}

export function signupAPI(name, email, mobile, password) {
  return API.post('/users', {
    name,
    email,
    mobile,
    password,
  });
}
