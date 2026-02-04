import { useState } from "react";
import type {GoalProps} from "../types.ts";


export function useAddGoalForm(props: GoalProps = {name: "", goal: "", date: null, id: ""}) {
    const [form, setForm] = useState<GoalProps>({
        name: props.name,
        goal: props.goal,
        date: props.date,
        id: props.id
    });

    const updateForm = (field: keyof typeof form, value: string | null | Date) => {
        setForm(perv => ({...perv, [field]: value}))
    }

    const clearForm = (field: keyof typeof form) => {
        updateForm(field, "")
    }


    return {form, clearForm, updateForm}
}