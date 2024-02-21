const FURNITURE_URL = "/product";

export const get_furniture_by_type_api = (type, subtype, page = 1) => {
    if (!subtype) return `${FURNITURE_URL}/${type}?page=${page}&limit=10`

    return `${FURNITURE_URL}/${type}/${subtype}?page=${page}&limit=10`
}