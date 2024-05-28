import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { DefaultUrl } from '../../ConfigAPI'; 
// Adapter to manage watch later items
const watchLaterAdapter = createEntityAdapter({
  selectId: (watchLater) => watchLater.IdW,
});

// Thunk to fetch watch later items
export const getListWatchLater = createAsyncThunk(
  'watchLater/getListWatchLater',
  async (IdU) => {
    try {
      const response = await axios.get(`${DefaultUrl}/api/WatchLater/${IdU}`); 
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch watch later items');
    }
  }
);

// Thunk to add a new watch later item
export const addWatchLater = createAsyncThunk(
  'watchLater/addWatchLater',
  async (newWatchLater) => {
    try {
      const response = await axios.post('URL_API_WatchLater', newWatchLater);
      return response.data;
    } catch (error) {
      throw Error('Failed to add new watch later item');
    }
  }
);

// Thunk to delete a watch later item
export const deleteWatchLater = createAsyncThunk(
  'watchLater/deleteWatchLater',
  async (idW) => {
    try {
      await axios.delete(`URL_API_WatchLater/${idW}`);
      return idW;
    } catch (error) {
      throw Error('Failed to delete watch later item');
    }
  }
);

// Initial state with some dummy data
const initialState = watchLaterAdapter.getInitialState({
  entities: [
    {
      IdW: 1,
      IdE: 1,
    },
    {
      IdW: 2,
      IdE: 2,
    },
    {
      IdW: 3,
      IdE: 3,
    },
  ],
});

// Create the watch later slice
export const watchLaterSlice = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    // Add your own reducers if needed
  },
  extraReducers: builder => {
    builder
      .addCase(getListWatchLater.fulfilled, (state, action) => {
        // If the request succeeds, update the state with the new data
        watchLaterAdapter.upsertMany(state, action.payload);
      })
      .addCase(addWatchLater.fulfilled, (state, action) => {
        watchLaterAdapter.addOne(state, action.payload);
      })
      .addCase(deleteWatchLater.fulfilled, (state, action) => {
        watchLaterAdapter.removeOne(state, action.payload);
      });
  }
});

// Export the selectors and reducer
export const { selectAll: selectAllWatchLater, selectById: selectWatchLaterById } = watchLaterAdapter.getSelectors(state => state.watchLater);
export default watchLaterSlice.reducer;
