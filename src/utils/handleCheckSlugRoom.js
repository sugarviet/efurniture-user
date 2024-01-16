const rooms = ['living-room', 'kitchen', 'dining-room']

export function handleCheckSlugRoom(roomSlug){
    if(!rooms.includes(roomSlug)) return false;

    return true;

}