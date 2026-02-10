import {createSlice} from "@reduxjs/toolkit";
import type {GoalProps} from "../../../../features/goal-manage/model/types.ts";

interface GoalListState {
    goalList: GoalProps[];
}

const initialState: GoalListState = {
    goalList: [],
}


export const goalsListSlice = createSlice({
    name: "goalList",
    initialState: initialState,
    reducers: {
        addGoal: (state, action) => {
            state.goalList.push(action.payload);
        },
        removeGoal: (state, action) => {
            state.goalList = state.goalList.filter(goal => goal.id !== action.payload.id);
        },
        changeGoal: (state, action) => {
            // Находим конкретный объект в массиве
            const goal = state.goalList.find(g => g.id === action.payload.id);

            if (goal) {
                // Прямо обновляем поля найденного объекта (Immer это обработает)
                goal.date = action.payload.date ? action.payload.date : goal.date;
                goal.goal = action.payload.goal ? action.payload.goal : goal.goal;
                goal.name = action.payload.name ? action.payload.name : goal.name;
            }
        }
    }
})

export default goalsListSlice.reducer;
export const goalListActions = goalsListSlice.actions;