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
function mapServerToClientEpisode(serverData) {
  return {
    IdE: serverData.IdE,
    IdM: serverData.IdM,
    Order: serverData.Order,
    Duration: serverData.Duration,
    VideoUrl: fixUrl(serverData.VideoUrl || ''),
    ReleaseDate: new Date(serverData.ReleaseDate).toISOString().split('T')[0] // assuming server returns a valid date format
  };
}

export const episodeAdapter = createEntityAdapter({
  selectId: (item) => item.IdE
});

export const getListDataEpisodes = createAsyncThunk(
  'episodes/getListDataEpisodes',
  async (data) => {
    try {
      console.log("Fetching data for ListEpisode");
      const response = await axios.get(`${DefaultUrl}/api/MovieSreen/GetEpisode`,data); 
      let data = response.data;
      console.log(typeof data)
      // console.log(data)
      if (!Array.isArray(data)) {
        data = [data];
        console.log('chuyen sang list')
      }
      const mappedData = data.map(mapServerToClientEpisode);
      // console.log(mappedData)
      return mappedData;
     
    } catch (error) {
      throw Error('Failed to fetch episodes');
    }
  }
);

export const addEpisode = createAsyncThunk(
  'episodes/addEpisode',
  async (data) => {
    try {
      const response = await axios.get(`${DefaultUrl}/api/MovieSreen/GetEpisode`,{params : data}); 
      let data1 = response.data;
      // console.log(data)
      let data2 = response.data
      if (!Array.isArray(data)) {
        data2 = [data2];
        console.log('chuyen sang list')
      }
      const mappedData = data2.map(mapServerToClientEpisode);
      console.log(mappedData)
      return mappedData;
      
    } catch (error) {
      throw Error('Failed to add new episode');
    }
  }
);

const initialState = episodeAdapter.getInitialState({
  entities: [
    {

    IdE:"bab-d",
    IdM: "1913",
    Order: 1,
    Duration: 0,
    VideoUrl: '',
    ReleaseDate: "",

    },
    {
      IdE:"bas-d",
      IdM: "913",
      Order: 1,
      Duration: 0,
      VideoUrl: '',
      ReleaseDate: "",
  
      },
],
  ids: []
});

const episodeSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    // Add your own reducers if needed
  },
  extraReducers: builder => {
    builder
      .addCase(getListDataEpisodes.fulfilled, (state, action) => {
        episodeAdapter.setMany(state, action.payload);
      })
      .addCase(addEpisode.fulfilled, (state, action) => {
          console.log("chạy vào hàm thêm")
          episodeAdapter.setAll(state, action.payload);
      });
  }
});

export const { selectAll: selectAllEpisodes, selectById: selectEpisodeById } = episodeAdapter.getSelectors(state => state.episodes);
export default episodeSlice.reducer;
