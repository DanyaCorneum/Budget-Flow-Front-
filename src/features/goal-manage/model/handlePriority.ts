export function handlePriority(priority: string){
    return /^-?\d+(\.\d+)?$/.test(priority) && priority.length < 2 && priority !== "0"
}