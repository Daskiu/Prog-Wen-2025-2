import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./slices/characterSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
