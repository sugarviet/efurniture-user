import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutFooter from "../../components/CheckoutFooter"
import useNavigation from "../../hooks/useNavigation";

function OrderCancelled() {

    const { go_to_or } = useNavigation();

    return (
        <section className="min-h-screen">
            <header className="flex flex-col md:grid md:grid-cols-[30%_70%] lg:grid lg:grid-cols-[54.167%_45.83%] bg-[#070628] pb-[1.25rem]">
                <div className="h-[90px] flex items-end pb-[1.25rem] md:pb-0">
                    <Link to="/">
                        <img src="./images/logo.png" className="ml-[30px] w-[140px]"></img>
                    </Link>
                </div>
            </header>
            <main className="flex flex-col justify-center items-center gap-6 px-6 lg:px-14 xl:px-20 2xl:px-40 py-24">
                <img className='w-40 ' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1714386369/eFurniture/cancel_cart_abjs84.png'></img>
                <div>
                    <p className='text-[24px] font-HelveticaBold text-center'>Payment failure</p>
                    <p className='text-[14px] font-HelveticaRoman text-grey2'>Payment failed for the order. Please pay for your order again within 24 hours.</p>
                </div>
                <div className="flex flex-row gap-4 max-w-[600px]">
                    <Link to="/">
                        <button className="furniture-button-white-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8">
                            Continue to shopping
                        </button>
                    </Link>
                    <Link to="/profile?tab=orders">
                        <button className="furniture-button-black-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8">
                            Tracking your order
                        </button>
                    </Link>
                </div>
            </main>
            <CheckoutFooter />
        </section>
    )
}

export default OrderCancelled