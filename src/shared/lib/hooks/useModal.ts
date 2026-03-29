import {useCallback, useEffect, useState} from "react";

function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
        return () => document.body.classList.remove("modal-open");
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                close()
                document.body.classList.remove("modal-open");
            }
        }
        if (isOpen) {
            document.body.addEventListener("keydown", handleEscape);
        }
        return () => document.body.removeEventListener("keydown", handleEscape);
    }, [isOpen, close]);

    return {isOpen, open, close, toggle};
}

export default useModal;