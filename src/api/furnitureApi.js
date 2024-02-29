const FURNITURE_URL = '/product'

export const get_furniture_by_type_api = (params, page = 1) => {
    const { type, subtype } = params;
    if (!subtype) return `${FURNITURE_URL}/${type}?page=${page}&limit=10`

    return `${FURNITURE_URL}/${type}/${subtype}?page=${page}&limit=10`
}

export const get_furniture_by_room_api = (page = 1, roomId) => {
   const id = '65af88bcb1638e0eb172d62e'

    return `${FURNITURE_URL}/room/${roomId}?page=${page}&limit=10`
}