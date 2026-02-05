import {AddGoal} from "../../features";
import GoalSlider from "../../features/goal-manage/ui/GoalSlider/GoalSlider.tsx";
import styles from "./GoalCardManage.module.scss"

function GoalCardManage() {
    return (
        <div className={styles["goal-card-manage"]}>
            <header>
                <h2> Цели </h2>
                <AddGoal/>
            </header>
            <GoalSlider/>
        </div>
    )
}

export default GoalCardManage;