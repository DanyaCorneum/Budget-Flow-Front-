import type {ChangeEvent} from "react";

export default function handleNumbers(e: ChangeEvent<HTMLInputElement>) {
    return /^-?\d+(\.\d+)?$/.test(e.target.value) && e.target.value.length <= 11
}