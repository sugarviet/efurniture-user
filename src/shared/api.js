const BE_DEPLOY_URL = "http://34.126.181.161:4646/api/v1";
const FURNITURE_URL = BE_DEPLOY_URL + "/product";

export const furniture_by_type_api = (type, subtype, page = 1) => {
    if (!subtype) return `${FURNITURE_URL}/${type}?page=${page}&limit=10`

    return `${FURNITURE_URL}/${type}/${subtype}?page=${page}&limit=10`
}

