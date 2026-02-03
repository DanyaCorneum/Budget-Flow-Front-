import styles from "./AddGoalModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import {Button, Input, useFormValidation} from "../../../../shared";
import {type ChangeEvent, useEffect} from "react";
import {useAddGoalForm} from "../../model/hooks/useAddGoalForm.ts";
import {useGoalList} from "../../model/hooks/useGoalList.ts";
import type {GoalProps} from "../../model/types.ts";
import {handleField} from "../../model/utils/handleField.ts";

export interface AddGoalModalProps {
    close: () => void;
    goals: Array<GoalProps>;
    onNew: any;
}

const INITIAL_VALUE_VALID = {
    name: true, goal: true, date: true, id: true
}

function AddGoalModal({close, goals, onNew}: AddGoalModalProps) {
    const {form, updateForm, clearForm} = useAddGoalForm()
    const {goalList, addGoal} = useGoalList(goals);
    const {
        validation,
        validateField,
        clearValidation
    } = useFormValidation<typeof INITIAL_VALUE_VALID>(INITIAL_VALUE_VALID)

    const handleChange = (field: keyof typeof form) => {
        return (event: ChangeEvent<HTMLInputElement>) => {

            if (handleField(field, event.target.value)) {
                if (field !== "date") {
                    updateForm(field, event.target.value)
                } else {
                    updateForm("date", event.target.valueAsDate)
                }
                validateField(field, event.target.value)
            }
        }
    }

    const onNameClear = () => {
        clearForm("name")
    }
    const onClearGoal = () => {
        clearForm("goal")
    }

    const addNewGoal = () => {
        let formValid = true;
        if (!validation.name || form.name === "") {
            validateField("name", "")
            formValid = false;
        }
        if (!validation.goal || form.goal === "") {
            validateField("goal", "")
            formValid = false;
        }
        if (!validation.date || form.date === null) {
            validateField("date", "")
            formValid = false;
        }
        if (formValid) {
            addGoal({...form, id: Date.now().toString()})
            onNew([...goalList, form])
        }
    }

    useEffect(() => {
        let timeOutId: number;
        if (!validation.name || !validation.goal || !validation.date) {
            timeOutId = setTimeout(() =>
                clearValidation(), 2000)
        }
        return () => clearTimeout(timeOutId)
    }, [validation, clearValidation]);

    return (
        <ModalWindow close={close} className={styles["goal-add"]}>
            <div className={styles["goal-add__container"]} onClick={(e) => {
                e.stopPropagation()
            }}>
                <h1>Добавить цель</h1>
                <form className={styles["goal-add__form"]}
                      onSubmit={(event) => {
                          event.preventDefault()
                          addNewGoal()
                      }}>
                    <Input placeholder={"Цель"} onChange={handleChange("name")} isValid={validation.name} value={form.name}
                           clearable={true}
                           onClear={onNameClear}
                    />
                    <Input placeholder={"Сумма"} onChange={handleChange("goal")} isValid={validation.goal}
                           value={form.goal}
                           clearable={true}
                           onClear={onClearGoal}/>
                    <Input type={"date"} style={form.date ? {} : {color: "#999"}} onChange={handleChange("date")}
                           isValid={validation.date}
                           value={form.date?.toISOString().split('T')[0]}
                    />
                    <Button>
                        Добавить цель
                    </Button>
                </form>
            </div>
        </ModalWindow>
    )
}

export default AddGoalModal;