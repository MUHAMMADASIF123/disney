import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import userSlice from '../features/User/UserSlice'
import  useReducer  from '../features/User/UserSlice';
// import movieReducer from '../features/movies/movieSlice'
export const store = configureStore({
  reducer: {
    user:userSlice
  },
});
