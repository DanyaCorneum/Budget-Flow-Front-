import {default as Tbank} from "../../assets/tbank.svg"
import styles from "./SignIn.module.scss"
import cn from "classnames"
import {Button, Input} from "../../shared";
import {handleNumbers} from "../../shared/lib/index..ts";
import {Exit} from "../../widgets";
import {useNavigate} from "react-router-dom";


function SignIn() {
    const navigate = useNavigate()

    const watchForm = (e) => {
        e.preventDefault()
    }
    return (
        <div className={cn(styles["sign-in"])}>
            <img src={Tbank} alt={"tbank"}></img>

            <div className={cn(styles["sign-in-window"])}>
                <h2 className={cn(styles["title"])}>Sign In to Budget Flow</h2>
                <form onSubmit={watchForm} className={cn(styles["sign-in-form"])}>
                    <Input className={cn(styles["input-number"])} placeholder={"Number"} isValid={true}
                           handleData={handleNumbers}/>
                    <Button className={cn(styles["sign-in-button"])} onClick={() => navigate("/")}>sign in</Button>
                </form>
            </div>
            <Exit className={cn(styles["go-to-main"])}/>
        </div>
    )
}

export default SignIn;