import styles from "./Goalslider.module.scss"
import {GoalCard} from "../../../index.ts";
import {Button} from "../../../../shared";
import {useState} from "react";
import {type RootState} from "../../../../app/providers/store/store.ts"
import {useSelector} from "react-redux";
import cn from "classnames";


function GoalSlider() {
    const goalList = useSelector((state: RootState) => state.goalList.goalList);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const VISIBLE_COUNT = 4;

    const moveNext = () => {
        if (currentIndex + VISIBLE_COUNT < goalList.length) {
            setCurrentIndex(prev => prev + 1);
        }
    }

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    }

    return (
        <div className={styles["goal-slider"]}>
            <Button onClick={movePrev} className={cn(styles["arrow"], {
                [styles["arrow-inactive"]] : (currentIndex === 0),
            })}>
                <i className="bi bi-arrow-left-short"/>
            </Button>
            <div className={styles["goal-slider__container"]}>
                <div className={styles["goal-slider__elements"]}>
                    {goalList.length > 0 ? (
                        goalList.map((goal, index) => {
                            // Логика видимости:
                            // Карточка видна, если её индекс >= текущего
                            // И меньше, чем текущий + количество видимых
                            const isVisible = index >= currentIndex && index < currentIndex + VISIBLE_COUNT;

                            if (!isVisible) return null; // Или можно возвращать <div style={{display: 'none'}} />

                            return (
                                <GoalCard
                                    key={goal.id}
                                    id={goal.id}
                                    date={goal.date}
                                    progress={1}
                                    name={goal.name}
                                    goal={goal.goal}
                                />
                            );
                        })
                    ) : (
                        <p style={{color: "gray"}}>Добавьте новую цель</p>
                    )}
                </div>
            </div>
            <Button onClick={moveNext} className={cn(styles["arrow"], {
                 [styles["arrow-inactive"]] : !(currentIndex + VISIBLE_COUNT < goalList.length),
            })}>
                <i className="bi bi-arrow-right-short"/>
            </Button>

        </div>
    );
}

export default GoalSlider;