import { createSlice } from '@reduxjs/toolkit';
import {
  bookAppointment,
} from './api';


const initialState = {
  data: null,
  loading: false,
  error: null,
  created: null,
};

const slice = createSlice({
  name: 'appointment',
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
    setAppointmentData(state, action) {
      state.data = action.payload;
    }
  },
});

export const {
  showLoading,
  hideLoading,
  setBookingSucessful,
  setBookingFailed,
  setAppointmentData,
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
