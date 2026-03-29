import { createSlice } from "@reduxjs/toolkit"


interface userSliceState {
    jwt: string | null
}

const initialState:  userSliceState = {
    jwt: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.jwt = action.payload;
        }
    }
})

export default userSlice.reducer;
export const userSliceActions = userSlice.actions;