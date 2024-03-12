const FURNITURE_URL = '/product'

export const get_furniture_by_room_api = (params, page = 1) => {
    const { id } = params;
    return `${FURNITURE_URL}/room/${id}?page=${page}&limit=10`
}

export const get_all_room = () => {
    return '/room'
}

export const get_room_detail = (params) => {
    const { slug } = params;

    return `/room/${slug}`
}