import { createSelector } from '@reduxjs/toolkit';
import { episodeAdapter } from '../features/episodes/episodesSlice'; // Điều chỉnh đường dẫn nếu cần

// Selector để lấy trạng thái episodes từ state
const selectEpisodesState = state => state.episodes;

// Selector để lấy tất cả các tập phim
export const selectAllEpisodes = createSelector(
  [selectEpisodesState],
  episodesState => episodeAdapter.getSelectors().selectAll(episodesState)
);

// Selector để lấy một tập phim cụ thể theo `IdM` và `Order`
export const selectEpisodeByIdMAndOrder = (IdM, Order) => createSelector(
  [selectAllEpisodes],
  (episodes) => episodes.find((episode) => episode.IdM == IdM && episode.Order == Order) || []
);
