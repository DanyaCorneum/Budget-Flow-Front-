import styles from "./Home.module.scss"
import {Footer} from "../../widgets";
import BankMiniCard from "../../widgets/BankMiniCard/BankMiniCard.tsx";
import {PlansCard} from "../../widgets";

function Home() {
    return <div className={styles["home"]}>
        <BankMiniCard/>
        <PlansCard/>
        <Footer/>
    </div>
}

export default Home;