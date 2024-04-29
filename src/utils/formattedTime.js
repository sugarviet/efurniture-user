export default function formattedTime(value) {
    const time = new Date(value);
    time.setHours(time.getUTCHours() + 7);
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}