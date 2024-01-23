import FavoriteButton from "@components/FavoriteButton";
import { useState } from "react";
function ProductAddToCart() {

    const [isFavored, setIsFavored] = useState(false);
    const handleOnClick = () => {
        setIsFavored(!isFavored);
    };

    return (
        <section className="flex flex-col justify-center items-center mt-8 w-full">
            <div className="flex gap-2 flex-col w-full">
                <div className="flex gap-2">
                    <div className="border px-4 py-3 border-black">
                        <FavoriteButton onClick={handleOnClick} favored={isFavored} />
                    </div>

                    <button className="furniture-button-black-hover w-full py-3 text-[11px]">
                        Add to cart
                    </button>
                </div>
                <button className="uppercase furniture-button-white-hover w-full py-4 text-[11px]">
                    Find nearest store
                </button>
            </div>
        </section>
    )
}

export default ProductAddToCart