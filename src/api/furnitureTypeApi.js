const FURNITURE_TYPE_URL = "/type";

export const get_furniture_type_api = () => FURNITURE_TYPE_URL;

export const get_furniture_subtype_api = (slug) => {
    return FURNITURE_TYPE_URL + "/" + slug;
}