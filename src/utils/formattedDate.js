export default function formattedDate(value, daysToAdd = 0) {
    const date = new Date(value);
    date.setDate(date.getDate() + daysToAdd); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}