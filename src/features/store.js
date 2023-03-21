import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});
