import SideBar from '../SideBar'
import CartProduct from "./components/CartProduct";
const cartData = [
    {
        id: 1,
        img: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw942c4640/images/2070000/2072765.jpg?sw=1000',
        name: 'SANTIAGO',
        description: 'Santiago side table',
        size: 'H51xØ46cm',
        tableTop: 'brown ceramic',
        leg: 'dark oak veneer',
        itemNo: '3700AD400715702',
        quantity: '1',
        price: 23390000
    },
    {
        id: 2,
        img: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f7ec034/images/2000000/2000028.jpg?sw=1000',
        name: 'KINGSTON',
        description: 'Kingston office desk',
        size: 'H74½xW62xL125cm',
        tableTop: 'matt ash grey lacquered',
        leg: 'matt ash grey structure lacquered',
        itemNo: '370057000008128',
        quantity: '1',
        price: 20690000
    },
    {
        id: 3,
        img: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw05567dbf/images/2010000/2014249.jpg?sw=1000',
        name: 'MADRID',
        description: 'Madrid side table',
        size: 'H51xØ46cm',
        tableTop: 'ash ceramic',
        leg: 'matt white structure lacquered',
        itemNo: '3700AD3801670022',
        quantity: '1',
        price: 20690000
    }
]

export default function CartSideBar() {

    return (
        <SideBar >
            <section className='h-full flex flex-col'>
                <header className='text-base font-HelveticaBold tracking-[0.08rem] leading-[1.2142857143] mb-8 pt-8 px-12'>
                    SHOPPING CART
                    <span className="text-grey3"> ({cartData.length})</span>
                </header>

                <main className="h-0 flex-grow">
                    <div className="pt-0 pb-9 px-12 h-full overflow-y-scroll">
                        {cartData && cartData.length > 0 ? (
                            cartData.map((cart) => (
                                <CartProduct key={cart.id} data={cart} />
                            ))
                        ) : (
                            <p>Your shopping cart is empty</p>
                        )}
                    </div>
                </main>

                <footer className="bg-[#f1f1f1] px-12 pt-4">
                    <section className="m-auto max-w-[34.375rem]">
                        <div className="grid grid-cols-[1fr_1fr]">
                            <span className="text-center">Subtotal</span>
                            <span className="text-center">₫ <span className="font-HelveticaBold">64.770.000,00</span></span>
                        </div>
                        <div className="grid grid-cols-[1fr_1fr]">
                            <span className="text-center">Order total</span>
                            <span className="text-center">₫ <span className="font-HelveticaBold">64.770.000,00</span></span>
                        </div>

                        <nav className="flex flex-col items-center gap-7 border-t-[0.0625rem] border-border my-4 pt-4 text-center">
                            <a className="underline text-[0.8125rem] hover:no-underline" href="#">View Cart</a>
                            <a className="font-HelveticaBold furniture-button-black-hover text-[11px] max-w-[17.1875rem] py-[18px] px-[55px] tracking-[0.125rem]">CHECKOUT</a>
                        </nav>
                    </section>
                </footer>
            </section>
        </SideBar>


    )
}
