import {default as Tbank} from "../../assets/tbank.svg"
import styles from "./Home.module.scss"

import {Loading} from "../../shared";

function Home(){
    return <div className={styles["home"]}>
        <img src={Tbank} alt={"tbank"}></img>
        <Loading/>
    </div>
}

export default  Home;