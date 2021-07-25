import API from '../../api';

export function getDoctorsAPI(page = 1) {
  return API.post(`/doctors`, {page});
}

