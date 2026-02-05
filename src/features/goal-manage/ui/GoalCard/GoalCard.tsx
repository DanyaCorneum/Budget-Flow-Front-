import {Card, useModal} from "../../../../shared";
import styles from "./GoalCard.module.scss"
import cn from "classnames";
import GoalEditModal from "../GoalEditModal/GoalEditModal.tsx";
import type {GoalProps} from "../../model/types.ts";
import type {HTMLAttributes} from "react";

export interface GoalCardProps extends GoalProps, HTMLAttributes<HTMLDivElement> {
    progress: number;
    id: string;
    name: string;
}

function GoalCard({name, goal, progress, date, id, ...props}: GoalCardProps) {
    const {isOpen, open, close} = useModal()
    return (
        <>
            {isOpen && <GoalEditModal name={name} goal={goal} date={date} id={id} close={close}/>}
            <div className={styles["goal-card__wrapper"]}>

                <Card className={cn(styles["goal-card"])} onClick={open} {...props}>
                    <h2>{goal} ₽</h2>
                    <div className={cn(styles["goal-card__container"])}>
                        <p>{name}</p>
                    </div>
                    <div> Срок: {date ? date.toLocaleDateString("ru-RU") : "01.01.2026"}</div>
                    <div className={cn(styles["progress"])} style={{
                        // @ts-expect-error - игнорировать проверку типов для кастомных свойств
                        '--progress-width': `${progress}%`
                    }}>{progress.toString() + "%"}
                    </div>
                </Card>
            </div>
        </>
    )
}

export default GoalCard;