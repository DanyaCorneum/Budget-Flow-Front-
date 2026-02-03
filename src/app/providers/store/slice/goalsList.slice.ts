import {createSlice} from "@reduxjs/toolkit";
import type {GoalProps} from "../../../../features/goal-manage/model/types.ts";

interface GoalListState {
    goalList: GoalProps[];
}

const initialState: GoalListState =  {
    goalList: [],
}


export const goalsListSlice = createSlice({
    name: "goalList",
    initialState:  initialState,
    reducers: {
        addGoal: (state, action) => {
            state.goalList.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.goalList.filter(goal => goal.id !== action.payload);
        }
    }
})

export default goalsListSlice.reducer;
export const goalListActions = goalsListSlice.actions;