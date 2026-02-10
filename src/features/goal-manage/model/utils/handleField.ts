export function handleField(field: string, value: string) {
    if (field === "name") { return value.length <= 20}
    if (field === "goal") { return /^-?\d+(\.\d+)?$/.test(value) || value === ""}
    return field === "date"
}