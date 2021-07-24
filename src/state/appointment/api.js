import API from '../../api';

export function bookAppointment(payload) {
  console.log(`POST /appointments : ${JSON.stringify(payload)}`);
  return API.post("/appointments", payload);
}