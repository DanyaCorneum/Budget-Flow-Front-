import styles from "./Goalslider.module.scss"
import {GoalCard} from "../../../index.ts";
import {Button} from "../../../../shared";
import { useState} from "react";
import {type RootState} from "../../../../app/providers/store/store.ts"
import {useSelector} from "react-redux";


function GoalSlider() {

    // TODO: переделать потом логику
    const goalList = useSelector((state: RootState) => state.goalList.goalList);
    const VISIBLE_COUNT = 6;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const maxIndex = Math.max(0, goalList.length - VISIBLE_COUNT);

    const moveLeft = () => {
        if (!(currentIndex >= maxIndex)) {
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        }
    }
    const moveRight = () => {
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    const offset = currentIndex * 220;

    return (
        <div className={styles["goal-slider"]}>
            {goalList.length > 6 &&
                < Button onClick={moveRight} className={styles["arrow"]}>
                    <i className={"bi bi-arrow-left-short"}/>
                </Button>
            }
            <div className={styles["goal-slider__container"]}>
                <div className={styles["goal-slider__elements"]} style={{transform: `translateX(-${offset}px)`}}>
                    {goalList.length > 0 ? goalList.map((goal) => {
                        return (
                            <GoalCard date={goal.date} progress={1} key={goal.id} name={goal.name}
                                      goal={goal.goal}/>
                        )
                    }) : <p style={{color: "gray"}}>Добавьте новую цель</p>}
                </div>
            </div>
            {
                goalList.length > 6 &&
                <Button onClick={moveLeft} className={styles["arrow"]}>
                    <i className="bi bi-arrow-right-short"/>
                </Button>
            }
        </div>
    )
}

export default GoalSlider;