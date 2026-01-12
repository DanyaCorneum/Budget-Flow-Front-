import styles from "./Card.module.scss"
import type {CardProps} from "./Card.props.ts"
import cn from "classnames"

function Card({image = "/src/assets/image card placeholder.svg", hasImage, ...props}: CardProps) {
    return (
        <div className={cn(styles["card-default"])} {...props}>
            {hasImage ? <img src={image} alt="null"/> : null}
            {props.title}
            {props.children}
        </div>
    )
}

export default Card;