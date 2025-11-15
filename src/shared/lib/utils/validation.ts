export default function handleNumbers(e: React.ChangeEvent<HTMLInputElement>) {
    return /^-?\d+(\.\d+)?$/.test(e.target.value) && e.target.value.length <= 11
}