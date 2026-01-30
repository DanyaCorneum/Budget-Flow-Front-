import styles from "./Home.module.scss"
import {Footer, GoalSlider} from "../../widgets";
import type {GoalProps} from "../../features/goal-manage/model/types.ts";
import {AddGoal} from "../../features";
import {useState} from "react";

function Home() {
    const [goals, setGoals] = useState<GoalProps[]>([{name: "not lol", priority: "1", goal: "123", id: "2"}])

    return <div className={styles["home"]}>
        <AddGoal goals={goals} onNewGoal={setGoals}/>
        <GoalSlider goalList={goals}/>
        <Footer/>
    </div>
}

export default Home;