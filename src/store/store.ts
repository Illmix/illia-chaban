import { configureStore } from "@reduxjs/toolkit";
import observerReducer from "./reducers/observerReducer.ts";

export const store = configureStore({
    reducer: {
        observer: observerReducer,
    },
});

export type RootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
