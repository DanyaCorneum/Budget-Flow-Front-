import {configureStore} from "@reduxjs/toolkit";
import GoalsListSlice from "./slice/goalsList.slice.ts";

export const store = configureStore({
    reducer: {
        goalList: GoalsListSlice
    },

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;