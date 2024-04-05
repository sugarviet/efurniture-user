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
  return {
    purchaseItems,
    setPurchaseItems,
    isInPurchase,
    addToPurchaseItems,
    removeFromPurchaseItems,
  };
}

export default usePurchase;
