import API from '../../api';

export function getProfileAPI() {
  const profile = JSON.parse(localStorage.getItem('profile'));
  return Promise.resolve(profile);
}

export function loginAPI(payload) {
  return API.post('/login', payload);
}

export function signupAPI(payload) {
  return API.post('/signup', payload);
}
