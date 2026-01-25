import type {HTMLAttributes} from "react";

export interface BankMiniCardProps extends HTMLAttributes<HTMLDivElement> {
    image?: string;
    loadData?: () => string | null;
    className?: string;
}