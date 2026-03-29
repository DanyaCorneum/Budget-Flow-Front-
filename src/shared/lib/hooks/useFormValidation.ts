import {useCallback, useState} from "react";

function useValidationState<T extends Record<string, boolean>>(initialState: T) {
    const [validation, setValidation] = useState<T>(initialState);

    const validateField = useCallback((field: keyof typeof validation, value: string) => {
        const isValid = value.trim() !== "";
        setValidation(prev => ({...prev, [field]: isValid}))
        return isValid;
    }, [setValidation]);

    const validateAllFields = useCallback((data: Record<keyof T, string>) => {
        const newValidation = {...validation}
        let allValid = true;

        (Object.keys(data) as Array<keyof T>).forEach(key => {
            const isValid = data[key].trim() !== "";
            newValidation[key] = isValid as T[ keyof T];
            if (!isValid) {
                allValid = false
            }

        })
        return allValid;
    }, [validation]);

    const clearValidation = useCallback(() => {
        setValidation(initialState);
    }, [initialState]);

    return {validation, validateField, validateAllFields, clearValidation}
}

export default useValidationState;