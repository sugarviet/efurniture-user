import FavoriteButton from "@components/FavoriteButton";
import { useState } from "react";
function ProductAddToCart() {

    const [isFavored, setIsFavored] = useState(false);
    const handleOnClick = () => {
        setIsFavored(!isFavored);
    };

    return (
        <section className="flex flex-col justify-center items-center mt-8">
            <div className="flex gap-2 flex-col">
                <div className="flex gap-2">
                    <div className="border p-2 border-black">
                        <FavoriteButton onClick={handleOnClick} favored={isFavored} />
                    </div>

                    <button className="uppercase bg-black text-white font-semibold px-36 py-3 text-xs">
                        Add to cart
                    </button>
                </div>
                <button className="uppercase bg-white text-black font-semibold px-36 py-3 text-xs border border-black">
                    Find nearest store
                </button>
            </div>
        </section>
    )
}

export default ProductAddToCart