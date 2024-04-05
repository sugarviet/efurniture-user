import ProductVariation from "../../pages/ProductDetail/components/ProductVariation";
import FurnitureCard from "../FurnitureCard";
import QuantityOption from "../QuantityOption";

function CartProduct({
  data,
  cartData,
  addToPurchaseItems,
  isInPurchase,
  removeFromPurchaseItems,
}) {
  const { code, quantity_in_cart, select_variation, variation } = data;
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    updateQuantity,
    updateVariation,
  } = cartData;

  const handleSelectToPurchase = (checked) => {
    if (!checked) removeFromPurchaseItems(data);
    if (checked) addToPurchaseItems(data);
  };

  return (
    <section className="flex flex-col my-6">
      <div className="flex justify-between items-center">
        <input
          onChange={(e) => handleSelectToPurchase(e.target.checked)}
          checked={isInPurchase(data)}
          type="checkbox"
          className="w-6 h-6"
        />
        <button
          onClick={() => removeFromCart(code)}
          className="flex items-center"
        >
          <span className="text-[0.75rem] leading-[2] track-[0.05em] text-grey1 pr-[2px]">
            Remove
          </span>
          <img
            className="w-[15px]"
            src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg"
          />
        </button>
      </div>
      <FurnitureCard item={data} key={code}>
        <FurnitureCard.Model className="w-[70%]" />
        <section className="flex flex-row justify-between">
          <div className="mb-4">
            <FurnitureCard.Attribute />
          </div>
          <QuantityOption
            handleIncrease={() => increaseQuantity(code)}
            handleDecrease={() => decreaseQuantity(code)}
            handleUpdate={(quantity) => updateQuantity(code, quantity)}
            quantity={quantity_in_cart}
          />
        </section>
        {variation.map((item, i) => {
          const { _id } = item;
          const currentVariation = [...select_variation].find(
            (i) => i.variation_id === _id
          );

          const onUpdateVariation = (property_id) => {
            const updated_select_variation = select_variation.map((obj) =>
              Object.assign({}, obj)
            );
            updated_select_variation.find(
              (i) => i.variation_id === _id
            ).property_id = property_id;

            updateVariation({
              ...data,
              select_variation: updated_select_variation,
            });
          };

          return (
            <ProductVariation
              currentVariation={currentVariation}
              onUpdateVariation={onUpdateVariation}
              key={i}
              variation={item}
            />
          );
        })}
        <div className="flex flex-col justify-between gap-4">
          <FurnitureCard.Detail />
        </div>
      </FurnitureCard>
    </section>
  );
}

export default CartProduct;
