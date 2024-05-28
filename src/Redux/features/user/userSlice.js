import { createSlice, createAsyncThunk,  createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { DefaultUrl } from '../../ConfigAPI';
// Hàm thunk để gửi yêu cầu đăng nhập và lưu trữ thông tin người dùng
export const resetUserState = createAction('user/resetUserState');
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (Data, { rejectWithValue }) => {
    try {
      console.log("callAPI to login")
      const response = await axios.post(`${DefaultUrl}/api/Account/SignIn`, Data);
      // Trả về thông tin người dùng nếu đăng nhập thành công
      return response.data;  // XỬ LÝ DATA
    } catch (error) {
      // Trả về lỗi nếu đăng nhập không thành công
      return rejectWithValue(error.response.data);
    }
  }
);
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (Data, { rejectWithValue }) => {
    try {
      console.log("callAPI register");
      const response = await axios.post(`${DefaultUrl}/api/Account/SignUp`, Data);
      // Trả về thông tin người dùng nếu đăng ký thành công
      return response.data;
    } catch (error) {
      // Trả về lỗi nếu đăng ký không thành công
      return rejectWithValue(error.response.data);
    }
  }
);

// Hàm thunk để gửi yêu cầu đăng xuất và xóa token
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      // Lấy token từ trạng thái Redux
      const { token } = getState().user;

      // Gửi yêu cầu đăng xuất đến API
      await axios.post('URL_API_Logout', { token });

      // Trả về null để biểu thị rằng đăng xuất đã thành công
      return null;
    } catch (error) {
      // Trả về lỗi nếu đăng xuất không thành công
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    isLoggedIn: false,
    loading: "false",
    username: '',
    email: '',
    IdU: "",
    error: null,
    signUp:null
  },
  reducers: {
    resetState: state => {
      // Trạng thái mới sau khi reset
      return {
        ...state,
        token: null,
        isLoggedIn: false,
        loading: false,
        IdU: "",
        username: '',
        email: '',
        error: null,
        signUp:null
      };
    }

  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.rejected, (state, action) => {
        console.log("khong thanh cong!")
        state.error = "error";
        state.loading =false;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.pending, (state)=>{
        state.loading =true,
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Nếu đăng nhập thành công, cập nhật thông tin người dùng
        const { username, email, token, IdU } = action.payload;
        state.username = username;
        state.email = email;
        state.loading =false;
        state.IdU = IdU
        state.token = token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log("Đăng ký thành công!");      
        state.loading = false;
        state.error = null;
        state.signUp = true
      })
      .addCase(signUpUser.rejected, (state, action)=>{
        console.log("dang ky khong thanh cong!")
        state.loading= false
        state.error  ="errorSignUp"
        state.signUp=false
      })
      .addCase(logoutUser.rejected, (state, action) => {
        // Nếu đăng xuất không thành công, lưu thông báo lỗi vào trạng thái Redux
        state.error = 'error';
      })

      .addCase(logoutUser.fulfilled, (state) => {
        // Nếu đăng xuất thành công, đặt lại trạng thái của người dùng
        state.token = null;
        state.isLoggedIn = false;
        state.username = '';
        state.IdU ="";
        state.loading =false;
        state.email = '';
        state.error = null;
      });
  }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
