import BottomBar from '@components/BottomBar'
import CheckoutProduct from "@components/CheckoutProduct";
import ToggleCheckoutButton from '@components/ToggleCheckoutButton';
import {useToggleCheckoutBottomBar} from '@hooks/useToggleBottomBar';
export default function CheckoutBottomBar() {
    const { isOpen } = useToggleCheckoutBottomBar();
    return (
        <BottomBar isOpen={isOpen}>
            <section className='h-full overflow-y-scroll no-scrollbar'>
                <ToggleCheckoutButton />
                <CheckoutProduct />
            </section>
        </BottomBar>
    )
}
