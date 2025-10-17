import { configureStore } from "@reduxjs/toolkit";
import { placeHolderApi } from "../services/placeholderfetch";
import CommentReducer from "./slices/commentslice"

export const store = configureStore({
    reducer: {
        [placeHolderApi.reducerPath]: placeHolderApi.reducer,
        comments: CommentReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch