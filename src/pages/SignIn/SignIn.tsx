import {default as Tbank} from "../../assets/tbank.svg"
import styles from "./SignIn.module.scss"
import cn from "classnames"
import {Button, Input} from "../../shared";
import {handleNumbers} from "../../shared/lib/index..ts";
import {Exit} from "../../widgets";


function SignIn() {
    return (
        <div className={cn(styles["sign-in"])}>
            <img src={Tbank} alt={"tbank"}></img>

            <div className={cn(styles["sign-in-window"])}>
                <h2 className={cn(styles["title"])}>Sign In to Budget Flow</h2>
                <form className={cn(styles["sign-in-form"])}>
                    <Input className={cn(styles["input-number"])} placeholder={"Number"} isValid={true}
                           handleData={handleNumbers}/>
                    <Button>sign in</Button>
                </form>
            </div>
            <Exit/>
        </div>
    )
}

export default SignIn;