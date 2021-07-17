import API from '../../api';

export function getSpecializationsAPI() {
  return API.get('/specializations');
}
