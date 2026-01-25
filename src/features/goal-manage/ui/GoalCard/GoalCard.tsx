import {Card} from "../../../../shared";
import styles from "./GoalCard.module.scss"
import cn from "classnames";
import type {GoalCardProps} from "./GoalCard.props.ts";
import {useModal} from "../../lib/useModal.ts";
import GoalEditModal from "../GoalEditModal/GoalEditModal.tsx";

function GoalCard({progress, priority = 1}: GoalCardProps) {
    const {isOpen, open, close} = useModal(styles["modal-open"])

    return (
        <>
            {isOpen && <GoalEditModal close={close}/>}
            <Card className={cn(styles["goal-card"])} onClick={open}>
                <h3 className={cn(styles["priority"])}>
                    <i className={"bi bi-star-fill"}/>
                    {priority}
                </h3>
                <h2>Goal card</h2>
                <div className={cn(styles["goal-card__container"])}>
                    <p>Goal</p>
                    <h3>10 000</h3>
                </div>
                <div className={cn(styles["progress"])} style={{
                    // @ts-expect-error - игнорировать проверку типов для кастомных свойств
                    '--progress-width': `${progress}%`
                }}>{progress.toString() + "%"}</div>
            </Card>
        </>
    )
}

export default GoalCard;