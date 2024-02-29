const FURNITURE_URL = '/product'


export const get_furniture_by_room_api = (params, page = 1) => {
   const id = '65af88bcb1638e0eb172d62e'
    return `${FURNITURE_URL}/room/${id}?page=${page}&limit=10`
}

export const get_room_details = () => {
  
}