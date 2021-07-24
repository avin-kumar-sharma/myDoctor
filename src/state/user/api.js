import API from '../../api';

export function getProfileAPI() {
  return API.get('/profile');
}

export function loginAPI(payload) {
  return API.post('/login', payload);
}

export function signupAPI(payload) {
  return API.post('/signup', payload);
}
