import cn from "classnames";
import styles from "./LoginForm.module.scss";
import { Button, Input } from "../../../shared";
import { handleNumbers } from "../../../shared/lib";
import { type Dispatch, type FormEvent, type SetStateAction, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { default as Arrow } from "../../../assets/arrow.svg";

function LoginForm() {
    const [showInput, setShowInput] = useState<boolean>(true);
    const navigate = useNavigate();

    // ✅ Исправлено: правильные типы для useRef
    const inputNumber = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);

    const [number, setNumber] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const watchForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const sendInfo = () => {
        setShowInput(false);
        if (!showInput) {
            navigate("/");
        }
    };

    // Обработчик изменения
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        handler: Dispatch<SetStateAction<string>>
    ) => {
        if (handler === setNumber && handleNumbers) {
            if (handleNumbers(e) || e.target.value.length === 0) {
                handler(e.target.value.toString());
            }
        } else {
            handler(e.target.value);
        }
    };

    // ✅ Исправлено: правильный тип для inputRef
    const handleClear = (
        handler: Dispatch<SetStateAction<string>>,
        inputRef: React.RefObject<HTMLInputElement | null> // ✅ Изменено
    ) => {
        handler(""); // Очищаем значение
        inputRef.current?.focus(); // Возвращаем фокус (используем optional chaining)
    };

    return (
        <form onSubmit={watchForm} className={cn(styles["sign-in-form"])}>
            <Input
                ref={inputNumber}
                className={cn(styles["input-number"], {
                    [styles.hide]: !showInput,
                })}
                placeholder="Number"
                isValid={true}
                clearable={true}
                onClear={() => handleClear(setNumber, inputNumber)}
                onChange={(e) => handleChange(e, setNumber)}
                value={number}
            />

            <Input
                ref={inputPassword}
                style={{ display: `${showInput ? "none" : "block"}` }}
                className={cn(styles["input-password"], {
                    [styles.hide]: showInput,
                })}
                placeholder="Password"
                isValid={true}
                value={password}
                onChange={(e) => handleChange(e, setPassword)}
                onClear={() => handleClear(setPassword, inputPassword)}
                clearable={true}
                type="password" // Добавьте type="password"
            />

            <Button
                className={cn(styles["sign-in-button"])}
                onClick={sendInfo}
                data-testid="sign-in-button"// Добавьте type="button"
            >
                {window.outerWidth > 800 ? (
                    <img src={Arrow} alt="Sign in" />
                ) : (
                    "Next"
                )}
            </Button>
        </form>
    );
}

export default LoginForm;