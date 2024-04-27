import { get_furniture_info_api } from "../api/furnitureApi";
import { usePost } from "./api-hooks";

function useProduct() {
    const a = (list = [], onSuccess) => {
        const body = list.map(furniture => {
            const { _id, select_variation, quantity_in_cart } = furniture;
            return {
                "product_id": _id,
                "variation": select_variation,
                "quantity": quantity_in_cart
            }
        })

        // return getFurnitureInfo(list, onSuccess).mutate(body);
    }

    const getFurnitureInfo = (list = [], onSuccess) => {
        const body = list.map(furniture => {
            const { _id, select_variation, quantity_in_cart } = furniture;
            return {
                "product_id": _id,
                "variation": select_variation,
                "quantity": quantity_in_cart
            }
        })

        return usePost(get_furniture_info_api(), undefined, onSuccess, (error) => alert(error));
        // mutate(body);
    }

    return { getFurnitureInfo };
}

export default useProduct;