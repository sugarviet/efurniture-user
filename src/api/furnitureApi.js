const FURNITURE_URL = '/product'

export const get_furniture_by_type_api = (params, urlParam) => {
    const { type, subtype } = params;
    const { page = 1 } = urlParam;
    if (!subtype) return `${FURNITURE_URL}/${type}?page=${page}&limit=10`

    return `${FURNITURE_URL}/${type}/${subtype}?page=${page}&limit=10`
}

export const get_furniture_info_api = (data) => FURNITURE_URL + '/info' + '/' + data

export const get_furniture_detail_api = (params) => {
    const { slug } = params;
    return `${FURNITURE_URL}/detail/${slug}`
}

export const get_search_furniture_api = (params, urlParams) => {
    const { q: searchValue } = urlParams;
    return `${FURNITURE_URL}/search/${`${searchValue + " "}`}?page=1&limit=4`
}