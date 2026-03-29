import styles from "./Card.module.scss"
import type {CardProps} from "./Card.props.ts"
import cn from "classnames"

function Card({image, hasImage, className,  ...props}: CardProps) {
    return (
        <div  className={cn(styles["card-default"], className)} {...props}>
            {hasImage ? <img src={image} alt="null"/> : null}
            {props.title}
            {props.children}
        </div>
    )
}

export default Card;