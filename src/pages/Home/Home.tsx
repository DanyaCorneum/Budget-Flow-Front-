import {Exit} from "../../widgets";
import {default as Tbank} from "../../assets/tbank.svg"
import styles from "./Home.module.scss"


function Home(){
    return <div className={styles["home"]}>
        <img src={Tbank} alt={"tbank"}></img>

        <Exit/>
    </div>
}

export default  Home;