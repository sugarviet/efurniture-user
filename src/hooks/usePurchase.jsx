import { useState } from "react";

function usePurchase() {
  const [purchaseItems, setPurchaseItems] = useState([]);

  const addToPurchaseItems = (item) => {
    setPurchaseItems([...purchaseItems, item]);
  };

  const removeFromPurchaseItems = (item) => {
    setPurchaseItems([...purchaseItems.filter((i) => i.code !== item.code)]);
  };

  const isInPurchase = (item) =>
    purchaseItems.some((i) => i.code === item.code);

  const getTotalPrice = () => {
    return purchaseItems.reduce((total, item) => {
      const subPrice = item.select_variation.reduce(
        (total, cur) => total + cur.sub_price,
        0
      );
      return total + (item.sale_price + subPrice) * item.quantity_in_cart;
    }, 0);
  };

  const updatePurchaseItem = (item) => {
    if (!isInPurchase(item)) return;

    const purchaseItemsClone = [...purchaseItems].filter(
      (i) => i._id !== item._id
    );

    setPurchaseItems([...purchaseItemsClone, item]);
  };

  return {
    purchaseItems,
    updatePurchaseItem,
    getTotalPrice,
    setPurchaseItems,
    isInPurchase,
    addToPurchaseItems,
    removeFromPurchaseItems,
  };
}

export default usePurchase;
