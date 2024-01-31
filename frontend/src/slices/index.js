import { configureStore } from '@reduxjs/toolkit';
import likeCatsReducer from './likeCatsSlice';

export default configureStore({
  reducer: {
    likeCatsReducer,
  },
});
