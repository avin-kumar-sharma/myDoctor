import { combineReducers } from '@reduxjs/toolkit';
import { enableMapSet } from 'immer';
import userReducer from './user/slice';
import doctorsReducer from './doctors/slice';

enableMapSet();
const rootReducer = combineReducers({
  user: userReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
