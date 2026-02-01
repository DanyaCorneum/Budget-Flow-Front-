import styles from "./AddGoalModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import type {AddGoalModalProps} from "./AddGoalModal.props.tsx";
import {Button, Input, useFormValidation} from "../../../../shared";
import {type ChangeEvent, useEffect} from "react";
import {handleNumbers} from "../../../../shared/lib";
import {useAddGoalForm} from "../../model/useAddGoalForm.ts";
import {useGoalList} from "../../model/useGoalList.ts";
import {handlePriority} from "../../model/handlePriority.ts";
import {handleName} from "../../model/handleName.ts";

const INITIAL_VALUE_VALID = {
    name: true, goal: true, priority: true, date: true
}

function AddGoalModal({close, goals, onNew}: AddGoalModalProps) {
    const {form, updateForm, clearForm} = useAddGoalForm()
    const {goalList, addGoal} = useGoalList(goals);
    const {
        validation,
        validateField,
        clearValidation
    } = useFormValidation<typeof INITIAL_VALUE_VALID>(INITIAL_VALUE_VALID)

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (handleName(event.target.value)) {
            updateForm("name", event.target.value)
            validateField("name", event.target.value)
        }
    }
    const handleGoalChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (handleNumbers(event) || event.target.value.length === 0) {
            updateForm("goal", event.target.value)
            validateField("goal", event.target.value)
        }
    }
    const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (handlePriority(event.target.value) || event.target.value.length === 0) {
            updateForm("priority", event.target.value)
            validateField("priority", event.target.value)
        }
    }
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateForm("date", event.target.valueAsDate)
    }

    const onNameClear = () => {
        clearForm("name")
    }
    const onClearGoal = () => {
        clearForm("goal")
    }
    const onClearPriority = () => {
        clearForm("priority")
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
        if (!validation.priority || form.priority === "") {
            validateField("priority", "")
            formValid = false;

        }
        if (formValid) {
            addGoal({...form, id: Date.now().toString()})
            onNew([...goalList, form])
        }
    }

    useEffect(() => {
        let timeOutId: number;
        if (!validation.name || !validation.goal || !validation.priority) {
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
                    <Input placeholder={"Цель"} onChange={handleNameChange} isValid={validation.name} value={form.name}
                           clearable={true}
                           onClear={onNameClear}
                    />
                    <Input placeholder={"Сумма"} onChange={handleGoalChange} isValid={validation.goal}
                           value={form.goal}
                           clearable={true}
                           onClear={onClearGoal}/>
                    <Input placeholder={"Приоритет"} onChange={handlePriorityChange} isValid={validation.priority}
                           value={form.priority}
                           clearable={true} onClear={onClearPriority}
                    />
                    <Input type={"date"} style={form.date ? {} : {color: "#999"}} onChange={handleDateChange}
                           isValid={validation.date}
                           value={form.date} onClear={onClearPriority}
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