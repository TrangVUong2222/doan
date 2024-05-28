import {configureStore} from '@reduxjs/toolkit';
// import reducer
import userReducer from './features/user/userSlice';
import moviesReducer from './features/movies/moviesSlice';
import watchLaterReducer from './features/watchLater/watchLaterSlice';
import commentsReducer from './features/comments/commentsSlice';
import episodesReducer from './features/episodes/episodesSlice'

export default store =  configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,  
        watchLater: watchLaterReducer,
        comments: commentsReducer,
        episodes: episodesReducer
    }
})