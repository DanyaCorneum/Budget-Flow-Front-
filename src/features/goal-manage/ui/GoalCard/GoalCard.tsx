import {Card} from "../../../../shared";
import styles from "./GoalCard.module.scss"
import cn from "classnames";

function GoalCard(){
    return (
        <Card className={cn(styles["goal-card"])}>
            <h2>Goal card</h2>
            <div className={cn(styles["goal-card__container"])}>
                <p>Goal</p>
                <h3>10 000</h3>
            </div>
        </Card>
    )
}

export default GoalCard;