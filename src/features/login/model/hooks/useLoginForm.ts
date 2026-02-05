import {useCallback, useState} from "react";
import type {LoginFormFields} from "../types.ts";


export function useLoginForm({number, password}: LoginFormFields = {number: "", password: ""}) {
    const [form, setForm] = useState<LoginFormFields>({
        number: number,
        password: password,
    });

    const updateForm = useCallback((field: keyof typeof form, value: string | null | Date) => {
        setForm(perv => ({...perv, [field]: value}))
    }, [])

    const clearForm = useCallback((field: keyof typeof form) => {
        updateForm(field, "")
    }, [updateForm]);


    return {form, clearForm, updateForm}
}