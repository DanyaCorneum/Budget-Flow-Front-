import type {AccountData} from "../BankMiniCard/BankMiniCard.props.ts";

export interface BankAccountModalProps extends AccountData{
    close: () => void;

}

