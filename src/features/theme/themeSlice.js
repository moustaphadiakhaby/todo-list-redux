import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    SWITCH_THEME: (state) => {
      state.theme = !state.theme;
    },
  },
});

export default themeSlice.reducer;

export const { SWITCH_THEME } = themeSlice.actions;
