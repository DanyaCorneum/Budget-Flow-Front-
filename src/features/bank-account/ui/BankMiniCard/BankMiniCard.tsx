import Card from "../../../../shared/ui/Card/Card.tsx";
import type {BankMiniCardProps} from "./BankMiniCard.props.ts";
import {useModal} from "../../../../shared";
import BankAccountModal from "../BankAccountModal/BankAccountModal.tsx";

function BankMiniCard({
                          image = "/src/assets/image card placeholder.svg",
                          loadData = () => "0000",
                          ...props
                      }: BankMiniCardProps) {
    const {isOpen, open, close} = useModal();

    const amount = loadData()
    return (
        <>
            {isOpen && <BankAccountModal close={close}/>}
            <Card style={{"cursor": "pointer"}} image={image} hasImage={true} onClick={open} {...props}>
                <div style={{"display": "flex", "alignItems": "center", "gap": "5px"}}>
                    <div id={"dot"} style={{
                        "width": "5px",
                        "height": "5px",
                        "borderRadius": "50%",
                        "background": "black",
                    }
                    }></div>
                    {amount}
                </div>
            </Card>
        </>
    )
}


export default BankMiniCard;