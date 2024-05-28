import { createSelector } from '@reduxjs/toolkit';
import { commentsAdapter } from '../features/comments/commentsSlice';

const selectCommentsState = state => state.comments;

// Selector để lấy tất cả các comment
export const selectAllComments = createSelector(
  [selectCommentsState],
  commentsState => commentsAdapter.getSelectors().selectAll(commentsState) || []
);

// Selector tùy chỉnh để lọc các comment theo `IdE`
export const selectCommentsByEpisodeId = episodeId => createSelector(
  [selectAllComments],
  comments => comments.filter(comment => comment.IdE = episodeId) || []
);
