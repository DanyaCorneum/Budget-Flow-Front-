import {configureStore} from "@reduxjs/toolkit";
import GoalsListSlice from "./slice/goalsList.slice.ts";
import userSlice from "./slice/user.slice.ts";

export const store = configureStore({
    reducer: {
        goalList: GoalsListSlice,
        user: userSlice
    },

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;