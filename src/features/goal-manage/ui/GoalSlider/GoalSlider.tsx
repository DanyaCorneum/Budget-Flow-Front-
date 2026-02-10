import styles from "./Goalslider.module.scss"
import {GoalCard} from "../../../index.ts";
import {Button} from "../../../../shared";
import {useEffect, useState} from "react";
import {type RootState} from "../../../../app/providers/store/store.ts"
import {useSelector} from "react-redux";
import cn from "classnames";


function GoalSlider() {
    const goalList = useSelector((state: RootState) => state.goalList.goalList);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleCount, setVisibleCount] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 600) setVisibleCount(1);
            else if (width < 900) setVisibleCount(2);
            else if (width < 1200) setVisibleCount(3);
            else if (width < 1900) setVisibleCount(4);
            else if (width < 2500) setVisibleCount(5);
            else setVisibleCount(6);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const moveNext = () => {
        if (currentIndex + visibleCount < goalList.length) {
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
                            const isVisible = index >= currentIndex && index < currentIndex + visibleCount;

                            if (!isVisible) return null;

                            return (
                                <GoalCard style={{flex: "0 0 25%"}}
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
                 [styles["arrow-inactive"]] : !(currentIndex + visibleCount < goalList.length),
            })}>
                <i className="bi bi-arrow-right-short"/>
            </Button>

        </div>
    );
}

export default GoalSlider;