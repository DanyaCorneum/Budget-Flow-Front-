import {default as Tbank} from "../../assets/tbank.svg"
import {default as Arrow} from "../../assets/arrow.svg"
import styles from "./SignIn.module.scss"
import cn from "classnames"
import {Button, Input} from "../../shared";
import {handleNumbers} from "../../shared/lib/index..ts";
import {Exit} from "../../widgets";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";


function SignIn() {
    const [showInput, setShowInput] = useState<boolean>(true)
    const navigate = useNavigate()
    const inputNumber = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)

    const watchForm = (e) => {
        e.preventDefault()
    }
    const sendInfo = () => {
        setShowInput(false)
        if (!showInput) {
            navigate("/")
        }

    }

    return (
        <div className={cn(styles["sign-in"])}>
            <div className={cn(styles["header"])}>

                <img src={Tbank} alt={"tbank"}></img>
                <Exit className={cn(styles["go-to-main"])}/>
            </div>

            <div className={cn(styles["sign-in-window"])}>
                <h2 className={cn(styles["title"])}>Sign In to Budget Flow</h2>
                <form onSubmit={watchForm} className={cn(styles["sign-in-form"])}>
                    <Input ref={inputNumber}
                           className={cn(styles["input-number"],
                               {
                                   [styles.hide]: !showInput
                               }
                           )}
                           placeholder={"Number"} isValid={true}
                           handleData={handleNumbers}/>
                    <Input ref={inputPassword} style={{display: `${showInput ? "none" : "block"}`}}
                           className={cn(styles["input-password"],
                               {
                                   [styles.hide]: showInput
                               }
                           )}
                           placeholder={"Password"} isValid={true}
                           handleData={handleNumbers}/>
                    <Button className={cn(styles["sign-in-button"])} onClick={sendInfo}><img src={Arrow} alt={"Sign in"}/></Button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;