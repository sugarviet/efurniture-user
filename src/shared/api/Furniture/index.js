import { get_furniture_by_type_api } from "./api"

const QueryFurnitureMap = new Map([
    ["furniture_by_type", { get_api: get_furniture_by_type_api }]
])

export default QueryFurnitureMap;

