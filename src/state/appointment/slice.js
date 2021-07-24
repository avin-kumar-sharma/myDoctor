import { createSlice } from '@reduxjs/toolkit';
import {
  bookAppointment,
} from './api';


const initialState = {
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
  },
});

export const {
  showLoading,
  hideLoading,
  setBookingSucessful,
  setBookingFailed
} = slice.actions;

export default slice.reducer;

export const bookNewAppointment = (payload) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const res = await bookAppointment(payload);
    console.log(`RESPONSE : ${res}`);
    dispatch(setBookingSucessful(res));
  } catch (err) {
    console.log(`ERROR : ${err}`);
    dispatch(setBookingFailed());
  }
};
