/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedCats: [],
};

const likeCatsSlice = createSlice({
  name: 'likeCats',
  initialState,
  reducers: {
    likeCat: (state, { payload }) => {
      state.likedCats.push(payload);
    },
    removeLike: (state, { payload }) => {
      const update = state.likedCats.filter((url) => url !== payload);
      state.likedCats = update;
    },
    setLikedCats: (state, action) => {
      state.likedCats = action.payload;
    },
  },
});

export const { actions } = likeCatsSlice;
export default likeCatsSlice.reducer;
