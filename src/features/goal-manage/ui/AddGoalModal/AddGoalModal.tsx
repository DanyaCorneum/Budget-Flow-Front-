import styles from "./AddGoalModal.module.scss";
import ModalWindow from "../../../../shared/ui/ModalWindow/ModalWindow.tsx";
import {Button, Input, useFormValidation} from "../../../../shared";
import {type ChangeEvent, useEffect} from "react";
import {useGoalForm} from "../../model/hooks/useGoalForm.ts";
import {handleField} from "../../model/utils/handleField.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../../app/providers/store/store.ts";
import {goalListActions} from "../../../../app/providers/store/slice/goalsList.slice.ts";
import {createPortal} from "react-dom";

export interface AddGoalModalProps {
    close: () => void;
}

const INITIAL_VALUE_VALID = {
    name: true, goal: true, date: true, id: true
}

function AddGoalModal({close}: AddGoalModalProps) {
    const {form, updateForm, clearForm} = useGoalForm()
    const goalList = useSelector((state: RootState) => state.goalList.goalList);
    const dispatch = useDispatch<AppDispatch>();
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
        if (formValid && goalList.length < 10) {
            dispatch(goalListActions.addGoal({...form, id: (Math.random()*100).toString()}))
            close()
        }
        if(goalList.length > 10){
            alert("to many goals")
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

    const modalContent = (
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
                    <Input placeholder={"Цель"} onChange={handleChange("name")} isValid={validation.name}
                           value={form.name}
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
    return (
        createPortal(modalContent, document.body)
    )
}

export default AddGoalModal;