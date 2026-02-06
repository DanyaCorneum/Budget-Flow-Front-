import styles from "./Home.module.scss"
import {Footer, GoalSlider, PieDiagram} from "../../widgets";
import type {GoalProps} from "../../features/goal-manage/model/types.ts";
import {AddGoal} from "../../features";
import {useState} from "react";

function Home() {
    const [goals, setGoals] = useState<GoalProps[]>([{name: "not lol", priority: "1", goal: "123", id: "2"}])
    const segments = [
  { id: '1', percentage: 30, color: '#FF4545', label: 'Еда' },
  { id: '2', percentage: 25, color: '#FFD445', label: 'Транспорт' },
  { id: '3', percentage: 25, color: '#979797', label: 'Жилье' },
  {id: '4', percentage: 20, color: '#D9D9D9', label: 'Оставшийся бюджет'}];
    return (<><div className={styles["home"]}>
        <PieDiagram segments={segments}/>
        <AddGoal goals={goals} onNewGoal={setGoals}/>
        <GoalSlider goalList={goals}/>
    
    </div>
    <Footer/></>)
}

export default Home;