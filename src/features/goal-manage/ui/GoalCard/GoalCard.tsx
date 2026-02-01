import {Card, useModal} from "../../../../shared";
import styles from "./GoalCard.module.scss"
import cn from "classnames";
import type {GoalCardProps} from "./GoalCard.props.ts";
import GoalEditModal from "../GoalEditModal/GoalEditModal.tsx";

function GoalCard({name, goal, progress, priority = 1, date}: GoalCardProps) {
    const {isOpen, open, close} = useModal()

    return (
        <>
            {isOpen && <GoalEditModal close={close}/>}
            <Card className={cn(styles["goal-card"])} onClick={open}>
                <h3 className={cn(styles["priority"])}>
                    <i className={"bi bi-star-fill"}/>
                    {priority}
                </h3>
                <h2>{goal} ₽</h2>
                <div className={cn(styles["goal-card__container"])}>
                    <p>{name}</p>
                </div>
                <div> Срок: {date.toLocaleDateString("ru-RU")}</div>
                <div className={cn(styles["progress"])} style={{
                    // @ts-expect-error - игнорировать проверку типов для кастомных свойств
                    '--progress-width': `${progress}%`
                }}>{progress.toString() + "%"}
                </div>
            </Card>
        </>
    )
}

export default GoalCard;