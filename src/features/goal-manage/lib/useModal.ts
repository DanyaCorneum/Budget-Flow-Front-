import {useCallback, useEffect, useState} from "react";

export function useModal(modalClass: string) {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(modalClass);
        } else {
            document.body.classList.remove(modalClass);
        }
        return () => document.body.classList.remove(modalClass);
    }, [isOpen, modalClass]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                close()
                document.body.classList.remove(modalClass);
            }
        }
        if (isOpen) {
            document.body.addEventListener("keydown", handleEscape);
        }
        return () => document.body.removeEventListener("keydown", handleEscape);
    }, [isOpen, modalClass, close]);

    return {isOpen, open, close, toggle};
}