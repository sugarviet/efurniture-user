const FURNITURE_URL = '/product'

export const get_furniture_by_type_api = (params, page = 1) => {
    const { type, subtype } = params;
    if (!subtype) return `${FURNITURE_URL}/${type}?page=${page}&limit=10`

    return `${FURNITURE_URL}/${type}/${subtype}?page=${page}&limit=10`
}

export const get_furniture_detail_api = (params) => {
    const { slug } = params;
    return `${FURNITURE_URL}/detail/${slug}`
}

export const get_search_furniture_api = (params, urlParams) => {
    const { q: searchValue } = urlParams;
    return `${FURNITURE_URL}/search/${`${searchValue + " "}`}?page=1&limit=4`
}