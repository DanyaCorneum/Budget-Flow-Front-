import styles from "./AddGoalModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import type {AddGoalModalProps} from "./AddGoalModal.props.tsx";
import {Button, Input} from "../../../../shared";
import {type ChangeEvent, useState} from "react";
import {handleNumbers} from "../../../../shared/lib";
import {useAddGoalForm} from "../../model/useAddGoalForm.ts";
import {useGoalList} from "../../model/useGoalList.ts";


function AddGoalModal({close, goals, onNew}: AddGoalModalProps) {
    const {form, updateForm, clearForm} = useAddGoalForm()
    const {goalList, addGoal} = useGoalList(goals);
    const [isFormValid, setFromValid] = useState({
        name: form.name !== "", goal:  form.name !== "", priority:  form.name !== ""
    });

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        updateForm("name", event.target.value)
        setFromValid(prevState =>  ({...prevState, name: event.target.value !== ""}))
    }
    const handleGoalChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (handleNumbers(event)) {
            updateForm("goal", event.target.value)
            setFromValid(prevState =>  ({...prevState, goal: event.target.value !== ""}))

        }
    }
    const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (handleNumbers(event)) {
            updateForm("priority", event.target.value)
            setFromValid(prevState =>  ({...prevState, priority: event.target.value !== ""}))

        }
    }
    const onNameClear = () => {
        clearForm("name")
        setFromValid(prevState =>  ({...prevState, name: false}))
    }
    const onClearGoal = () => {
        clearForm("goal")
        setFromValid(prevState =>  ({...prevState, goal: false}))

    }
    const onClearPriority = () => {
        clearForm("priority")
        setFromValid(prevState =>  ({...prevState, priority: false}))

    }
    const addNewGoal = () => {
        if (!isFormValid.name) {
            setFromValid(prev => ({...prev, name: false}))
            return
        } else if (!isFormValid.goal) {
            setFromValid(prev => ({...prev, goal: false}))
            return;
        } else if (!isFormValid.priority) {
            setFromValid(prev => ({...prev, priority: false}))
            return;
        } else {
            addGoal({...form, id: Date.now().toString()})
            onNew([...goalList, form])
        }
    }

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
                    <Input placeholder={"Цель"} onChange={handleNameChange} isValid={isFormValid.name} value={form.name}
                           clearable={true}
                           onClear={onNameClear}
                    />
                    <Input placeholder={"Сумма"} onChange={handleGoalChange} isValid={isFormValid.goal} value={form.goal}
                           clearable={true}
                           onClear={onClearGoal}/>
                    <Input placeholder={"Приоритет"} onChange={handlePriorityChange} isValid={isFormValid.priority}
                           value={form.priority}
                           clearable={true} onClear={onClearPriority}
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