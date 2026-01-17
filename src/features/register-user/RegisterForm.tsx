import cn from "classnames";
import styles from "./RegisterForm.module.scss";
import {Button, Input} from "../../shared";
import {handleNumbers} from "../../shared/lib";
import {type FormEvent, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {default as Arrow} from "../../assets/arrow.svg"


function RegisterForm() {
    const [showInput, setShowInput] = useState<boolean>(true)
    const navigate = useNavigate()
    const inputNumber = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)

    const watchForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const sendInfo = () => {
        setShowInput(false)
        if (!showInput) {
            navigate("/")
        }

    }
    return (
            <form onSubmit={watchForm} className={cn(styles["sign-in-form"])}>
                <Input ref={inputNumber}
                       className={cn(styles["input-number"],
                           {
                               [styles.hide]: !showInput
                           }
                       )}
                       placeholder={"Number"} isValid={true}
                       handleData={handleNumbers}
                       type={"phone"}/>
                <Input ref={inputPassword} style={{display: `${showInput ? "none" : "block"}`}}
                       className={cn(styles["input-password"],
                           {
                               [styles.hide]: showInput
                           }
                       )}
                       placeholder={"Password"} isValid={true}
                       handleData={handleNumbers}/>
                <Button className={cn(styles["sign-in-button"])} onClick={sendInfo}>{window.outerWidth > 800 ?
                    <img src={Arrow} alt={"Sign in"}/> : "Next"}</Button>
            </form>
    )
}

export default RegisterForm;