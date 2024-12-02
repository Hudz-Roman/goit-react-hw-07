import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.filter;
export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
