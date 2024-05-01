const FURNITURE_TYPE_URL = "/type";
const FURNITURE_SUB_TYPE_URL = '/subType'

export const get_furniture_type_api = () => FURNITURE_TYPE_URL;

export const get_furniture_subtype_api = (slug) => {
    return FURNITURE_TYPE_URL + "/" + slug;
}

export const get_furniture_subtype_detail_api = (slug) => {
    const { type, subtype } = slug;
    return FURNITURE_SUB_TYPE_URL + "/" + type + "/" + subtype;
}

export const get_furniture_type_detail_api = (param) => {
    const { type } = param;
    return FURNITURE_TYPE_URL + '/detail' + '/' + type;
}