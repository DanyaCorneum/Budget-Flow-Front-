import Card from "../../../../shared/ui/Card/Card.tsx";
import type {AccountData, BankMiniCardProps} from "./BankMiniCard.props.ts";
import {useModal} from "../../../../shared";
import BankAccountModal from "../BankAccountModal/BankAccountModal.tsx";


const defaultAccountData: AccountData = {
    amount: 0,
    name: "test",
    bank: "bank",
    icon: "/src/assets/image card placeholder.svg",
    date: new Date(),
    number: "0000 0000 0000 0000",
    cvv: "000"
};

function BankMiniCard({
                          image = "/src/assets/image card placeholder.svg",
                          loadData = () => defaultAccountData,
                          ...props
                      }: BankMiniCardProps) {
    const {isOpen, open, close} = useModal();


    const accountData = loadData()
    return (
        <>
            {isOpen && <BankAccountModal
                amount={accountData.amount}
                name={accountData.name}
                bank={accountData.bank}
                icon={accountData.icon}
                date={accountData.date}
                number={accountData.number}
                cvv={accountData.cvv}
                close={close}/>}
            <Card style={{"cursor": "pointer"}} image={image} hasImage={true} onClick={open} {...props}>
                <div style={{"display": "flex", "alignItems": "center", "gap": "5px"}}>
                    <span style={{'fontWeight': "bold", "fontSize":"2rem"}}>•</span>
                    {accountData.number.slice(14)}
                </div>
            </Card>
        </>
    )
}


export default BankMiniCard;