import type {GoalProps} from "./types.ts";
import {useState} from "react";

export function useGoalList(list: Array<GoalProps>)  {
    const [goalList, setGoalList] = useState<Array<GoalProps>>(list)

    const addGoal = (goal: GoalProps) => {
        setGoalList(perv => [...perv, goal]);
    }

    const removeGoal = (goalId: string) => {
        setGoalList(prev => prev.filter(goal => goal.id !== goalId));
    }

    return {goalList, addGoal, removeGoal};
}
