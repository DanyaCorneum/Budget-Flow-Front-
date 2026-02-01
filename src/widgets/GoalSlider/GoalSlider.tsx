import styles from "./Goalslider.module.scss"
import {GoalCard} from "../../features";
import type {GoalProps} from "../../features/goal-manage/model/types.ts";
interface GoalSliderProps {
    goalList: GoalProps[]
}

function GoalSlider({goalList}: GoalSliderProps) {
    return (
        <div className={styles["goal-slider"]}>
            <div className={styles["goal-slider__container"]}>
                {goalList.map((goal) => {
                    return (
                        <GoalCard date={goal.date} progress={1} key={goal.id} name={goal.name} priority={Number(goal.priority)} goal={Number(goal.goal)}/>
                    )
                })}
            </div>
        </div>
    )
}

export default GoalSlider;