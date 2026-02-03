import styles from "./Goalslider.module.scss"
import {GoalCard} from "../../../index.ts";
import type {GoalProps} from "../../model/types.ts";
import {Button} from "../../../../shared";
import {useRef, useState} from "react";

interface GoalSliderProps {
    goalList: GoalProps[]
}

function GoalSlider({goalList}: GoalSliderProps) {
    const [step, setStep] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const moveLeft = () => {
        if ((goalList.length < 5)) return;
        if(containerRef.current && step < goalList.length-5) {
            setStep(step+1)
        }
        console.log("left", step, goalList.length *  5)
    }
    const moveRight = () => {
        if ((goalList.length < 5)) return;
        if (containerRef.current && step > 0) {
            setStep(step-1)
        }
        console.log(goalList.length)

    }


    return (
        <div className={styles["goal-slider"]}>
            <Button onClick={moveRight} className={styles["arrow"]}>
                <i className={"bi bi-arrow-left-short"}/>
            </Button>
            <div ref={containerRef} className={styles["goal-slider__container"]}>
                <div className={styles["goal-slider__elements"]} style={{transform: `translateX(${-step * 10}%)`}}>
                    {goalList.map((goal) => {
                        return (
                            <GoalCard date={goal.date} progress={1} key={goal.id} name={goal.name}
                                      goal={goal.goal}/>
                        )
                    })}
                </div>
            </div>
            <Button onClick={moveLeft} className={styles["arrow"]}>
                <i className="bi bi-arrow-right-short"/>
            </Button>
        </div>
    )
}

export default GoalSlider;