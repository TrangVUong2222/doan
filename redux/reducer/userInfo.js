import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userName: 'Nguyễn Lâm Chi',
    email: 'nlchi159003@gmail.com',
    passWord: '******',
    userID: '0210966'
  },
  
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassWord: (state, action) => {
      state.passWord = action.payload;
    }
  }
});

export const { updateUserName, updateEmail, updatePassWord } = userInfoSlice.actions;

export default userInfoSlice.reducer;
