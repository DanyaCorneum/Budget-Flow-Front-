import styles from "./Home.module.scss"
import {Footer, GoalSlider} from "../../widgets";
import type {GoalProps} from "../../features/goal-manage/model/types.ts";
import {AddGoal} from "../../features";
import {useEffect, useState} from "react";

function Home() {
    const [goals, setGoals] = useState<GoalProps[]>([{
        name: "not lol",
        goal: "123",
        date: new Date(),
        id: "2"
    }])

    useEffect(() => {
        console.log(goals)
    }, [goals]);

    return <div className={styles["home"]}>
        <AddGoal goals={goals} onNewGoal={setGoals}/>
        <GoalSlider goalList={goals}/>
        <Footer/>
    </div>
}

export default Home;