import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { MODEL_DIMENSION } from "../../constants/enum";
import { useWishlist } from "../../stores/useWishList";

const FurnitureCardContext = createContext();

function FurnitureCardProvider(props) {
  const { children, furniture } = props;

  const { wishlist, addToWishlist, deleteFromWishlist } = useWishlist();
  const [dimension, setDimension] = useState(MODEL_DIMENSION.two_dimension);
  const [favored, setFavored] = useState(
    wishlist.some((item) => item._id === furniture._id)
  );

  const onFavored = () => {
    setFavored(!favored);

    if (!favored) addToWishlist(furniture);
    if (favored) deleteFromWishlist(furniture._id);
  };

  const onSale = Math.floor(Math.random() * 10) % 2 == 0;

  const value = {
    furniture,
    dimension,
    setDimension,
    favored,
    onFavored,
    onSale,
  };

  return (
    <FurnitureCardContext.Provider {...props} value={value}>
      {children}
    </FurnitureCardContext.Provider>
  );
}

FurnitureCardProvider.propTypes = {
  children: PropTypes.node,
  furniture: PropTypes.object,
};

export { FurnitureCardContext, FurnitureCardProvider };
