import styles from "./Home.module.scss"
import {Footer, GoalSlider} from "../../widgets";
import {AddGoal} from "../../features";

function Home() {
    return <div className={styles["home"]}>
        <AddGoal/>
        <GoalSlider/>
        <Footer/>
    </div>
}

export default Home;