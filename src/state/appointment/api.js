import API from '../../api';

export function bookAppointment(payload) {
  return API.post("/appointments", payload);
}