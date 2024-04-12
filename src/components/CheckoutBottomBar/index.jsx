import BottomBar from "@components/BottomBar";
import CheckoutProduct from "@components/CheckoutProduct";
import ToggleCheckoutButton from "@components/ToggleCheckoutButton";
import { useToggleCheckoutBottomBar } from "@hooks/useToggleBottomBar";
import { withGuestCart } from "../../hocs/withGuestCart";
import { withUserCart } from "../../hocs/withUserCart";
import useAuth from "../../stores/useAuth";

export default function CheckoutBottomBar() {
  const { isOpen } = useToggleCheckoutBottomBar();
  return (
    <BottomBar isOpen={isOpen}>
      <section className="h-full overflow-y-scroll no-scrollbar">
        <ToggleCheckoutButton />
        <CheckoutProduct />
      </section>
    </BottomBar>
  );
}
