import { get_furniture_subtype_api, get_furniture_type_api } from "./api";

const QueryFurnitureTypeMap = new Map([
    ['furniture_type', { get_api: get_furniture_type_api }],
    ['furniture_subtype', { get_api: get_furniture_subtype_api }]
])

export default QueryFurnitureTypeMap