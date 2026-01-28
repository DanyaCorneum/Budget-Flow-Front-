import type {HTMLAttributes} from "react";

export interface AccountData {
    amount: number
    name: string
    bank: string
    icon: string
    date: Date
    number: string
    cvv: string
}

export interface BankMiniCardProps extends HTMLAttributes<HTMLDivElement> {
    image?: string;
    loadData?: () => AccountData;
    className?: string;
}