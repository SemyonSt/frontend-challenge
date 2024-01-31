import { configureStore } from '@reduxjs/toolkit';
import likeCatsReducer from './likeCatsSlice.js';

export default configureStore({
  reducer: {
    likeCatsReducer,
  },
});
