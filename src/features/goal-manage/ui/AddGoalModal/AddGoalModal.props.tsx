import type {GoalProps} from "../../model/types.ts";

export interface AddGoalModalProps{
    close: () => void;
    goals: Array<GoalProps>;
    onNew: any;
}