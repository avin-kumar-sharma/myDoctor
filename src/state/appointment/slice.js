
import { createSlice } from '@reduxjs/toolkit';
import {
  bookAppointment,
  getAppointments,
} from './api';

const initialState = {
  data: null,
  appointments: {},
  loading: false,
  error: null,
  created: null,
};

const slice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    showLoading(state) {
      state.loading = true;
      state.created = null;
      state.error = null;
    },
    hideLoading(state) {
      state.loading = false;
      state.created = null;
      state.error = null;
    },
    setBookingSucessful(state, action) {
      state.loading = false;
      state.created = true;
      state.error = null;
    },
    setBookingFailed(state, action) {
      state.error = action.payload;
      state.created = null;
      state.loading = false;
    },
    fetchAppointmentsSuccess(state, action) {
      state.appointments = {
        ...state.appointments,
        [action.payload.userId]: action.payload.appointments
      };
      state.loading = false;
      state.error = null;
    },
    fetchAppointmentsFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
      state.appointments = {
        ...state.appointments,
        [action.payload.userId]: [],
      };
    },
    setAppointmentData(state, action) {
      state.data = action.payload;
    },
  },
});

export const {
  showLoading,
  hideLoading,
  setBookingSucessful,
  setBookingFailed,
  setAppointmentData,
  fetchAppointmentsSuccess,
  fetchAppointmentsFail,
} = slice.actions;

export default slice.reducer;

export const bookNewAppointment = (payload) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await bookAppointment(payload);
    dispatch(setBookingSucessful(res));
  } catch (err) {
    dispatch(setBookingFailed());
  }
};

export const fetchAppointments = ({ userId }) => async (dispatch) => {
  try {
    dispatch(showLoading());
    const res = await getAppointments({ userId });
    dispatch(fetchAppointmentsSuccess({
      userId,
      appointments: res.data.data
    }));
  } catch (error) {
    dispatch(fetchAppointmentsFail({
      userId,
      error,
    }));
  }
};
