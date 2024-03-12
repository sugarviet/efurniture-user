export default function formattedTime(value) {
    const time = new Date(value);
    const hours = time.getUTCHours().toString().padStart(2, '0');
    const minutes = time.getUTCMinutes().toString().padStart(2, '0');
    const seconds = time.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;

}