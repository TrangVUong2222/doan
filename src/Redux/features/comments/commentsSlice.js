import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { DefaultUrl } from '../../ConfigAPI';
// Adapter to manage comments
export const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.IdC,
});
// Thunk to fetch comments
export const getListDataComments = createAsyncThunk(
  'comments/getListDataComments',
  async (IdE1) => {
    try {
      data ={
        IdE: IdE1
      }
      // console.log("call api de lay comment")
      const response = await axios.get(`${DefaultUrl}/api/MovieSreen/GetCommnet`, {params: data}); 
      let data = response.data;
      // console.log("datatu server", data)
      if (!Array.isArray(data)) {
        data = [data];
        // console.log('chuyen sang list')
      }
      // console.log(typeof data)
      return data;
    } catch (error) {
      console.log('Failed to fetch comments');
    }
  }
);

// Thunk to add a new comment
export const addComment = createAsyncThunk(
  'comments/addComment',
  async (newComment) => {
    try {
      const response = await axios.post(`${DefaultUrl}/api/MovieSreen/CreateComment`, newComment,{
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      );
      // console.log(typeof response.data)
      return response.data;
    } catch (error) {
      if (error.response) {
        // Yêu cầu đã được gửi và máy chủ đã phản hồi với trạng thái không nằm trong phạm vi 2xx
        console.log('Error response data:', error.response.data);
        console.log('Error response status:', error.response.status);
        console.log('Error response headers:', error.response.headers);
      } else if (error.request) {
        // Yêu cầu đã được gửi nhưng không có phản hồi
        console.log('Error request:', error.request);
      } else {
        // Một điều gì đó đã xảy ra trong khi thiết lập yêu cầu và gây ra lỗi
        console.log('Error message:', error.message);
      }
      console.log('Error config:', error.config);
      throw error;
    }
  }
);

// Initial state with some dummy data
const initialState = commentsAdapter.getInitialState({
  entities: [
    {
      IdC: 1,
      IdE: 1,
      IdU: 1,
      Content: 'Great episode!',
      Rate: 5,
      Username: 'user1',
    },
    {
      IdC: 2,
      IdE: 1,
      IdU: 2,
      Content: 'Not bad',
      Rate: 3,
      UserName: 'user2',
    },
    {
      IdC: 3,
      IdE: 2,
      IdU: 1,
      Content: 'Loved it!',
      Rate: 5,
      UserName: 'user1',
    },
  ],
  ids: []
});

// Create the comment slice
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // Add your own reducers if needed
  },
  extraReducers: builder => {
    builder
      .addCase(getListDataComments.fulfilled, (state, action) => {
        console.log("dang dien du lieu")
        commentsAdapter.removeAll(state); // Đặt lại trạng thái của state
        commentsAdapter.setAll(state, action.payload); // Thêm dữ liệu mới từ server
      })
      .addCase(addComment.rejected, (state, action) => {
        console.log("loi khi them cmt")
        
      })
      .addCase(addComment.fulfilled, (state, action) => {
        console.log("dang them cmm moi du lieu")
        commentsAdapter.setOne(state, action.payload);
        
      });
  }
});

// Export the selectors and reducer
export const { selectAll: selectAllComments, selectById: selectCommentById } = commentsAdapter.getSelectors(state => state.comments);
export default commentsSlice.reducer;
