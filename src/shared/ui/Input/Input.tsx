import {forwardRef, useRef} from "react";
import type {InputProps} from "./Input.props.ts";
import cn from "classnames";
import styles from "./Input.module.scss"
import ClearIcon from "../icons/CrosExit.tsx";

const Input = forwardRef<HTMLInputElement, InputProps>(
    function Input({
                       className = "",
                       isValid = true,
                       type = "text",
                       placeholder = undefined,
                       clearable = false,
                       onChange,
                       onClear,
                       value = "",
                       ...props
                   }, ref) {
        const inputId = props.id || `input-${Math.random().toString(36).slice(2, 11)}`;
        const inputRef = useRef<HTMLInputElement | null>(null)

        const setRefs = (element: HTMLInputElement) => {
            inputRef.current = element;
            if (typeof ref === 'function') {
                ref(element);
            } else if (ref) {
                ref.current = element;
            }
        }

        const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onClear?.();
        }

        return (
            <div className={cn(styles["input-group"], className)}>
                <input
                    type={type}
                    id={inputId}
                    placeholder={placeholder}
                    ref={setRefs}
                    {...props}
                    className={cn(styles["input"], {
                        [styles["invalid"]]: !isValid
                    })}
                    value={value ? value.toString() : ""}
                    onChange={onChange}
                />{
                placeholder &&
                <label htmlFor={inputId} className={styles["input-label"]}>
                    {placeholder ? placeholder : null}
                </label>
                }
                {clearable && value && (
                    <button
                        onClick={handleClear}
                        className={styles["reset-button"]}
                        type="button"
                        aria-label="Очистить поле"
                    >
                        <ClearIcon/>
                    </button>
                )}
            </div>
        )
    }
)

export default Input