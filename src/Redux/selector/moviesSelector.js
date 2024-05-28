import { createSelector } from '@reduxjs/toolkit';
import { movieAdapter } from '../features/movies/moviesSlice'; // Điều chỉnh đường dẫn nếu cần

// Selector để lấy tất cả các bộ phim
const selectMoviesState = state => state.movies;


export const selectMovieById = (IdM) => createSelector(
  [selectMoviesState],
  (moviesState) => movieAdapter.getSelectors().selectById(moviesState, IdM)
);
// Selector để lấy status của movies
export const selectMoviesStatus = createSelector(
  [selectMoviesState],
  (moviesState) => moviesState.status
);
export const selectAllMovies = createSelector(
  [selectMoviesState],
  moviesState => movieAdapter.getSelectors().selectAll(moviesState)
);

// Selector tùy chỉnh để lọc các bộ phim dựa trên `Origin`
const selectMoviesByOrigin = (origin) => createSelector(
  [selectAllMovies],
  (movies) => movies.filter((movie) => movie.Origin === origin) || []

);

// Tạo các selector cụ thể cho từng `origin`
export const selectNewMovies = selectMoviesByOrigin('NewMovie');
export const selectSlideMovies = selectMoviesByOrigin('Slide');
export const selectSingleMovies = selectMoviesByOrigin('SingleMovie');
export const selectTvSeriesMovies = selectMoviesByOrigin('TvSeries');
export const selectTvSearchMovies = selectMoviesByOrigin('Search');
