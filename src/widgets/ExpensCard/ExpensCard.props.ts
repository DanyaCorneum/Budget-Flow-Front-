export interface ExpensCardProps {
    name: string;
    expens_llimit: number; // потраченные деньги
    expens_rlimit: number; // лимит трат
    icon?: string; // SVG строка или название иконки
    color?: string; // цвет линии
}