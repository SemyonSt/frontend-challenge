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
  },
});

export const { actions } = likeCatsSlice;
export default likeCatsSlice.reducer;
