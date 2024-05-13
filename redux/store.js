// import { combineReducers } from "redux";
// import info from './userInfo'
// const reducers = combineReducers({
//     infoUser : info
// });
// export default (state, action) => reducers(state,action)

import { configureStore } from '@reduxjs/toolkit';

import userInfoReducer from './reducer/userInfo';
import SreachMovie from './reducer/Sreach'

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer, 
    SreachData: SreachMovie,
  },
});

export default store;
