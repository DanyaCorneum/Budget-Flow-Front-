import cn from "classnames";
import styles from "./LoginForm.module.scss";
import {Button, Input, useFormValidation} from "../../../shared";
import {type ChangeEvent, type FormEvent, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {default as Arrow} from "../../../assets/arrow.svg";
import type {AppDispatch} from "../../../app/providers/store/store.ts";
import {useDispatch} from "react-redux";
import {userSliceActions} from "../../../app/providers/store/slice/user.slice.ts";
import {useLoginForm} from "../model/hooks/useLoginForm.ts";

const INITIAL_STATE = {number: true, password: true}


function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {
        validation,
        validateField,
    } = useFormValidation<typeof INITIAL_STATE>(INITIAL_STATE)
    const {form, updateForm, clearForm} = useLoginForm()
    const [showInput, setShowInput] = useState<boolean>(true);

    const inputNumber = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const handleChange = (field: keyof typeof form) => {
        return (event: ChangeEvent<HTMLInputElement>) => {
            let value = event.target.value;
            if (field === "number") {
                const digits = value.replace(/\D/g, '');

                // 2. Формируем строку с +7
                // Если пользователь стер всё, оставляем пусто или "+7"
                // Если ввел цифры, следим, чтобы семерка не дублировалась в начале
                if (digits.length === 0) {
                    value = "";
                } else if (digits.startsWith('7')) {
                    value = "+" + digits;
                } else {
                    value = "+7" + digits;
                }
                if (value.length <= 12) {

                    updateForm("number", value);
                }
            } else if (field === "password") {
                if (value.length <= 15) {

                    updateForm("password", value);
                }
            }
            validateField(field, event.target.value)
        }
    }

    const handleClear = (field: keyof typeof form) => {
        clearForm(field)
    }

    const watchForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const sendInfo = () => {
        if (showInput) {
            if (!validation.number || form.number === "" || form.number.length < 12) {
                validateField("number", "")
                return
            } else {
                setShowInput(false);
                return;
            }
        } else {
            if (!validation.password || form.password === "") {
                validateField("password", "")
                return
            }
        }
        dispatch(userSliceActions.setCurrentUser("kasjnflasfk"))
        navigate("/")
    }


    return (
        <form onSubmit={watchForm} className={cn(styles["sign-in-form"])}>
            <Input
                ref={inputNumber}
                className={cn(styles["input-number"], {
                    [styles.hide]: !showInput,
                })}
                placeholder="Номер телефона"
                isValid={validation.number}
                clearable={true}
                onClear={() => handleClear("number")}
                onChange={handleChange("number")}
                value={form.number }
            />

            <Input
                ref={inputPassword}
                className={cn(styles["input-password"], {
                    [styles.hide]: showInput,
                })}
                placeholder="Пароль"
                isValid={validation.password}
                value={form.password}
                onChange={handleChange("password")}
                onClear={() => handleClear("password")}
                clearable={true}
                type="password"
            />

            <Button
                className={cn(styles["sign-in-button"])}
                onClick={sendInfo}
                data-testid="sign-in-button"
            >
                {window.outerWidth > 800 ? (
                    <img src={Arrow} alt="Sign in"/>
                ) : (
                    "Next"
                )}
            </Button>
        </form>
    );
}

export default LoginForm;