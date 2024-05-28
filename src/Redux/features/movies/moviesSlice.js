import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { DefaultUrl } from '../../ConfigAPI';

function fixUrl(url) {
  // Loại bỏ ký tự ngược
  url = url.replace(/\\/g, '');
  // Thay thế tất cả các ký tự \\/ thành /
  url = url.replace(/\\*\//g, '/');
  // Thêm "https://" vào đầu URL nếu nó không bắt đầu bằng "http://" hoặc "https://"
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  return url;
}
function mapServerToClient(serverData) {
  return {
    IdM: serverData.IdM,
    NameMovie: serverData.NameMovie,
    Genre: serverData.Genre || [],
    Seri: [], // assuming this field is not present in server response
    Status: serverData.Status || '',
    Starring: serverData.Starring || '',
    DescriptionMovie : serverData.DescriptionMovie,
    ImgIntroUrl: fixUrl(serverData.ImgIntroUrl || ''), // Sử dụng hàm fixUrl cho trường ImgIntroUrl
    ImgPosterUrl: fixUrl(serverData.ImgPosterUrl || ''),
    Episode: serverData.Episode,
    Rate: serverData.Rate,
    Released: serverData.Released, // assuming server returns a valid date format
    Classify: serverData.Classify || '',
    Origin: serverData.Origin
  };
}

export const movieAdapter = createEntityAdapter({
  selectId: (item) => item.IdM,
});

export const getDataHomeMovie = createAsyncThunk(
  'movies/getDataHomeMovie',
  async () => {
    try {
      const response = await axios.get(`${DefaultUrl}/api/Home/GetAllDataHomeScreen`);
      let data = response.data;
      // console.log(data)
      if (!Array.isArray(data)) {
        data = [data];
        console.log('chuyen sang list')
      }
      const mappedData = data.map(mapServerToClient);
      // console.log(mappedData)
      return mappedData;
    } catch (error) {
      throw new Error('Failed to fetch movies');
    }
  }
);
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (keyword) => {
    try {
      const response = await axios.get(`${DefaultUrl}/api/Home/Search`, {
        params: {
          Keyword: keyword
        }
      });
      const data = response.data;
      console.log(data)
      console.log(typeof data)
      if (!Array.isArray(data)) {
        data = [data];
        console.log('chuyen sang list')
      }
      const mappedData = data.map(mapServerToClient);
      return mappedData;
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

export const addNewMovie = createAsyncThunk(
  'movies/addNewMovie',
  async (IdM) => {
    try {
      const response = await axios.get(`${DefaultUrl}/api/DetailMovie/GetOneMovie`, {
        params: { 
          IdM: IdM
        }
      });
      const data = response.data;
      if (data) {
        return mapServerToClient(data);
      } else {
        throw new Error('No data received');
      }
    } catch (error) {
      console.log('Failed to get one movies');
    }
  }
);

export const updateMovieInfo = createAsyncThunk(
  'movies/updateMovieInfo',
  async (IdM) => {
    try {
      // console.log(IdM)
      const params = {
        IdM : IdM
      }
      console.log("dang goi data")
      const response = await axios.get(`${DefaultUrl}/api/DetailMovie/InForMovie`, { params });
      const data = response.data;
      // console.log(data)
      return { IdM: IdM, Seri: data };
    } catch (error) {
      console.log('Failed to update movie information');
    }
  }
);

const initialState = movieAdapter.getInitialState({
  entities: [],
  ids: [],
  status: 'idle',
  error: null,
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSearchMovies(state) {
      const searchMovies = Object.values(state.entities).filter(movie => movie.Origin === 'Search');
      searchMovies.forEach(movie => {
        movieAdapter.removeOne(state, movie.IdM);
      });
    },
    
    // Các reducers có thể thêm ở đây nếu cần
  },
  extraReducers: builder => {
    builder
      .addCase(getDataHomeMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataHomeMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        movieAdapter.setAll(state, action.payload);
      })
      .addCase(getDataHomeMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewMovie.fulfilled, (state, action) => {
        movieAdapter.setOne(state, action.payload);
      })
      .addCase(updateMovieInfo.fulfilled, (state, action) => {
        const {IdM, Seri} = action.payload;
        console.log(typeof Seri)
        movieAdapter.updateOne(state, {
          id: IdM,
          changes: {
            Seri:Seri,
          },
        });
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        // Lưu dữ liệu tìm kiếm vào store Redux
        movieAdapter.setMany(state, action.payload);
        state.status = 'succeeded';
      })
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchMovies.rejected, (state, action) => {
        console.log("bi loi lay data")
        state.status = 'failed';
        state.error = action.error.message;
      });
  
      

  }
});

export const { selectAll: selectAllMovies, selectById: selectMovieById } = movieAdapter.getSelectors(state => state.movies);
export const { removeSearchMovies } = movieSlice.actions;
export default movieSlice.reducer;
