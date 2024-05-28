import { createSelector } from '@reduxjs/toolkit'

// Selector cơ bản để lấy state user từ state toàn cục
const selectUserState = state => state.user;

// Selector để lấy ra trạng thái đăng nhập
export const selectIsLoggedIn = createSelector(
  [selectUserState],
  user => user.isLoggedIn
);

// Selector để lấy ra thông tin người dùng
export const selectUserInfo = createSelector(
  [selectUserState],
  user => ({
    username: user.username,
    email: user.email,
    IdU: user.IdU,
  }) || {}
);

export const selectUserToken = createSelector(
    [selectUserState],
    user => user.token
  );
  
  // Selector để lấy ra error
  export const selectUserError = createSelector(
    [selectUserState],
    user => user.error
  );