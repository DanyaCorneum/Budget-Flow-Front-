import styles from "./Home.module.scss"
import {Footer, GoalCardManage} from "../../widgets";

function Home() {
    return <div className={styles["home"]}>
        <GoalCardManage/>
        <Footer/>
    </div>
}

export default Home;