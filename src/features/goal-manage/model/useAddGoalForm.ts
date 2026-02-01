import { useState} from "react";
import type {GoalProps} from "./types.ts";


export function useAddGoalForm() {
    const [form, setForm] = useState<GoalProps>({
        name: "",
        goal: "",
        priority: "",
        date: null,
        id: ""
    });

    const updateForm = (field: keyof typeof form, value: string | null | Date) => {
        setForm(perv => ({...perv, [field]: value}))
    }

    const clearForm = (field: keyof typeof form) => {
        updateForm(field, "")
    }


    return {form, clearForm, updateForm}
}