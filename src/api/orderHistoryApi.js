const ORDER_URL = '/order';


export const get_order_by_state = (state) => {
    return `${ORDER_URL}/state/u?page=1&limit=10&&type=${state}`
}

export const get_order_detail_by_id = (id) => {
    return `${ORDER_URL}/${id}`
}

