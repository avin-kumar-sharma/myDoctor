import API from '../../api';

export function getDoctorsAPI(page = 1) {
  return API.get(`/doctors?_page=${page}`);
}

