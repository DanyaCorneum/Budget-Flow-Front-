import {default as Tbank} from "../../assets/tbank.svg"
import styles from "./SignIn.module.scss"
import cn from "classnames"
import {Exit, RegisterUser} from "../../widgets";


function SignIn() {

    return (
        <div className={cn(styles["sign-in"])}>
            <div className={cn(styles["header"])}>
                <img src={Tbank} alt={"tbank"}></img>
                <Exit className={cn(styles["go-to-main"])}/>
            </div>
                <RegisterUser/>
        </div>
    )
}

export default SignIn;