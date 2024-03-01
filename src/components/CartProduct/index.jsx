import useCart from "../../hooks/useCart";
import useUserCart from "../../hooks/useUserCart";
import useAuth from "../../stores/useAuth";
import FurnitureCard from "../FurnitureCard";
import QuantityOption from "../QuantityOption";

function CartProduct({ data }) {
  const { name, _id, quantity_in_cart } = data;
  const { accessToken } = useAuth();
  const { increaseQuantity, decreaseQuantity, removeFromCart, updateQuantity } =
    accessToken ? useUserCart() : useCart();
  return (
    <section className="text-[0.875rem] my-6">
      <div
        onClick={() => removeFromCart(_id)}
        className="flex items-center justify-end"
      >
        <span className="text-[0.75rem] leading-[2] track-[0.05em] text-grey1 pr-[2px]">
          Remove
        </span>
        <img
          className="w-[15px]"
          src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg"
        />
      </div>
      <FurnitureCard item={data} key={_id}>
        <FurnitureCard.Model className="w-[60%]" />
        <section className="flex flex-rol justify-between">
          <a href="#">
            <h2 className="text-xl line-clamp-1 leading-[1.2] font-HelveticaBold tracking-[0.08em]">
              {name}
            </h2>
          </a>
          <QuantityOption
            handleIncrease={() => increaseQuantity(_id)}
            handleDecrease={() => decreaseQuantity(_id)}
            handleUpdate={(quantity) => updateQuantity(_id, quantity)}
            quantity={quantity_in_cart}
          />
        </section>
        <div className="flex flex-col justify-between gap-4">
          <FurnitureCard.Detail />
        </div>
      </FurnitureCard>
    </section>
  );
}

export default CartProduct;
