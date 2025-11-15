import {forwardRef, useRef, useState} from "react";
import type {InputProps} from "./Input.props.ts";
import cn from "classnames";
import styles from "./Input.module.scss"
import crossExit from "../../../assets/cross-exit.svg"

const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({className = "", isValid = true, placeholder = "Placeholder", handleData, ...props}, ref) {
        // Генерируем уникальный id для связи input и label
        const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
        const [isData, setIsData] = useState("")
        const inputRef = useRef<HTMLInputElement | null>(null)

        const setRefs = (element: HTMLInputElement) => {
            inputRef.current = element;

            if (typeof ref === 'function') {
                ref(element);
            } else if (ref) {
                ref.current = element;
            }
        }

        const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {

            if (handleData) {
                if (handleData(e)){
                    setIsData(e.target.value)
                    if (isData === "") {
                        e.target.value = ""
                    }
                }
            }

        }

        const resetData = () => {
            setIsData("")
            inputRef.current?.focus()
        }

        return (
            <div className={cn(styles["input-group"], className)}>
                <input
                    id={inputId}
                    placeholder={placeholder}
                    ref={setRefs}
                    onChange={handleInputData}
                    {...props}
                    className={cn(styles["input"], {
                        [styles["invalid"]]: !isValid
                    })}
                    value={isData}
                />
                <label htmlFor={inputId} className={styles["input-label"]}>
                    {placeholder}
                </label>
                <button
                    onClick={resetData}
                    className={cn(styles["reset-button"], {
                        [styles["hide"]]: !(isData !== "")
                    })}
                ><img src={crossExit} alt={"exit"}/></button>
            </div>
        )
    }
)

export default Input