import Card from "../../shared/ui/Card/Card.tsx";
import type {BankMiniCardProps} from "./BankMiniCard.props.ts";

function BankMiniCard({image = "/src/assets/image card placeholder.svg", loadData = () => "0000", ...props}: BankMiniCardProps) {
    const amount = loadData()
    return (
        <Card image={image} hasImage={true} {...props}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "5px"}}>
                <div style={{
                    "width": "5px",
                    "height": "5px",
                    "borderRadius": "50%",
                    "background": "black",
                }
                }></div>
                {amount}
            </div>
        </Card>
    )
}


export default  BankMiniCard;