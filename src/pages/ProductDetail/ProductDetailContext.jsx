import { createContext, useState } from "react";

const ProductDetailContext = createContext();

function ProductDetailProvider({ data, children }) {
  const [furniture, setFurniture] = useState(data);

  const value = {
    furniture,
    setFurniture,
  };

  return (
    <ProductDetailContext.Provider value={value}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export { ProductDetailProvider, ProductDetailContext };
