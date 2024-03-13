import { withGuestCart } from "../../hocs/withGuestCart";
import { withUserCart } from "../../hocs/withUserCart";
import CartContent from "./components/CartContent";
import useAuth from "../../stores/useAuth";

const GuestCartContent = withGuestCart(CartContent);
const UserCartContent = withUserCart(CartContent);

const Cart = () => {
  const { accessToken } = useAuth();

  return (
    <main className="min-h-screen">
      <div className="lg:furniture-divided-bottom pt-0">
        {accessToken ? <UserCartContent /> : <GuestCartContent />}
      </div>
    </main>
  );
};

export default Cart;
