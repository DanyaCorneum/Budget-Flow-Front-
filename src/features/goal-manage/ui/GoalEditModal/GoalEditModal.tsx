import styles from "./GoalEditModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import {createPortal} from "react-dom";
import {Button, Input, useFormValidation} from "../../../../shared";
import {useGoalForm} from "../../model/hooks/useGoalForm.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../../app/providers/store/store.ts";
import type {ChangeEvent} from "react";
import {handleField} from "../../model/utils/handleField.ts";
import {goalListActions} from "../../../../app/providers/store/slice/goalsList.slice.ts";
import type {GoalProps} from "../../model/types.ts";

interface GoalEditModalProps extends GoalProps{
    close: () => void
}

const INITIAL_VALUE_VALID = {
    name: true, goal: true, date: true, id: true
}


function GoalEditModal({close, name, goal, date, id}: GoalEditModalProps) {
    const {form, updateForm, clearForm} = useGoalForm({name, goal, date, id});
    const dispatch = useDispatch<AppDispatch>();
    const {
        validateField,
    } = useFormValidation<typeof INITIAL_VALUE_VALID>(INITIAL_VALUE_VALID)

    // TODO: Вынести в отдельный файл
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

    const changeGoal = () => {
        dispatch(goalListActions.changeGoal(form))
        close()
    }

    const deleteGoal = () => {
        dispatch(goalListActions.removeGoal(form))
        close()
    }

    const modalContent = (
        <ModalWindow close={close} className={styles["goal-edit"]}>
            <div className={styles["goal-card__container"]} onClick={(e) => {
                e.stopPropagation()
            }}>
                <h2>Изменить цель</h2>
                <form onSubmit={(event) => {
                    event.preventDefault()
                    changeGoal()
                }}>
                    <Input placeholder={"Имя"} isValid={true} onChange={handleChange("name")} clearable={true}
                           onClear={onNameClear} value={form.name}/>
                    <Input placeholder={"Сумма"} isValid={true} onChange={handleChange("goal")} clearable={true}
                           onClear={onClearGoal} value={form.goal}/>
                    <Input style={form.date ? {} : {color: "#999"}} type={"date"} isValid={true} onChange={handleChange("date")} value={form.date?.toISOString().split('T')[0]}/>
                    <Button>
                        Подтвердить
                    </Button>
                    <Button onClick={deleteGoal}>
                        Удаление
                    </Button>
                </form>
            </div>
        </ModalWindow>
    )

    return createPortal(modalContent, document.body)
}

export default GoalEditModal