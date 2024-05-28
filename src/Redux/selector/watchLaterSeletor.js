import { createSelector } from '@reduxjs/toolkit';
import { watchLaterAdapter } from '../features/watchLater/watchLaterSlice'; // Điều chỉnh đường dẫn nếu cần
import { selectMovieById } from './moviesSelector'; // Selector để lấy thông tin của một phim
import { selectEpisodeById } from './episodesSelector'; // Selector để lấy thông tin của một tập
  
// Selector để lấy tất cả các item trong watch later
export const selectAllWatchLaterItems = state => watchLaterAdapter.getSelectors().selectAll(state.watchLater);

// Selector để lấy thông tin cần thiết của một item trong watch later
export const selectWatchLaterItemsDetails = createSelector(
  [selectAllWatchLaterItems, selectMovieById, selectEpisodeById],
  (watchLaterItems, selectMovieById, selectEpisodeById) => {
    return watchLaterItems.map(item => ({
      IdW: item.IdW,
      IdE: item.IdE,
      // Lấy thông tin từ phim
      movieInfo: selectMovieById(state, selectEpisodeById(state, item.IdE).IdM),
      // Lấy thông tin từ tập
      episodeInfo: selectEpisodeById(state, item.IdE),
    })) || [];
  }
);
