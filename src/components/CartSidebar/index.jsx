import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react";

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

export default function CartSideBar({ isOpen, setIsOpen }) {

    const sidebarRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    return (
        <div className="relative font-HelveticaRoman">
            <div ref={sidebarRef} className={`h-full fixed top-0  bg-white w-[34%]  overflow-hidden z-[7777] ${isOpen ? 'right-0 duration-700' : 'right-[-34%] duration-300 animate-cartDisappear'}`}>
                <div className='h-full flex flex-col'>
                    <div className='text-base font-bold tracking-[0.08rem] mb-14 pt-8 px-12'>
                        SHOPPING CART
                        <span className="text-grey3"> (3)</span>
                    </div>
                    <div className="h-0 flex-grow">
                        <div className="pt-0 px-12 h-[calc(100%_-_2rem)] overflow-y-scroll">

                            <div className="text-[0.875rem] my-6">
                                <div className="flex items-center justify-end">
                                    <span className="text-[0.75rem] leading-[2] track-[0.05em] text-grey1 pr-[2px]">Remove</span>
                                    <img className="w-[15px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg" />
                                </div>
                                <figure className="relative pt-[35%] mb-10 pr-[8rem] pl-[7rem]">
                                    <img className="h-auto max-h-full absolute top-4 left-1/2 -translate-x-1/2" src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw942c4640/images/2070000/2072765.jpg?sw=1000" />
                                </figure>
                                <div className="flex flex-rol justify-between">
                                    <a href="#">
                                        <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em]">SANTIAGO</h2>
                                    </a>
                                    <div>
                                        <button>-</button>
                                        <div className='border-b-[3px] border-secondary pb-1 mr-3'>
                                            <input
                                                type='text'
                                                placeholder='--'
                                                className='text-center w-[70px] px-2 h-14 placeholder:text-[40px] text-[40px] font-extralight'
                                            />
                                        </div>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 
                        {cartData?.map((cart) => (
                            <div key={cart.id} className='mt-3 flex flex-row gap-4 relative items-center pb-3 border-b-2 border-dashed'>
                                <img className='max-w-[85px] max-h-[85px]' src={cart.img} />
                                <div className='flex flex-col gap-1'>
                                    <div className='text-[11px] font-semibold'>{cart.name}</div>
                                    <div className='text-[11px] font-normal text-[#272727]'>Còn {cart.quantity} sản phẩm có sẵn</div>
                                    <div className='flex flex-row gap-3 items-center'>
                                        <div className='bg-[#ededed] px-3 py-1 text-[12px] font-normal]'>{cart.quantity}</div>
                                        <div className='text-[14px] font-normal text-[#272727]'>{cart.price.toLocaleString("vi-VN")}đ</div>
                                    </div>
                                </div>
                                <div
                                    className="absolute right-[-5px] top-0"
                                    onClick={() => removeItemById(cart.item.id)}
                                >
                                    x
                                </div>
                            </div>
                        ))} */}
                    {/* <div className="flex flex-col gap-5 mt-5">
                            <div className="flex flex-row justify-between gap-4">
                                <div className='text-[14px] font-normal text-[#272727]'>
                                    TỔNG TIỀN
                                </div>
                                <div className='text-[14px] font-semibold text-[#272727]'>
                                    30đ
                                </div>
                            </div>
                            <div className="flex flex-row gap-3 justify-between w-full">
                                <div
                                    className='text-[13px] font-normal px-6 py-3 beana-button-green-hover cursor-pointer'
                                >
                                    XEM GIỎ HÀNG
                                </div>
                                <Link to="/login">
                                    <div className='beana-button-white-hover px-8 py-3 text-[13px] font-normal'
                                    >
                                        THANH TOÁN
                                    </div>
                                </Link>
                            </div>
                        </div> */}

                </div>
                <div className="absolute top-9 right-4 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                >
                    <img className="w-[15px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg" />
                </div>
            </div>
            <div className={`duration-500 ${isOpen ? 'w-full h-full fixed backdrop-opacity-10 top-0 left-0 z-[6666] bg-[rgba(170,170,170,.55)]' : ''}`}></div>
        </div>


    )
}
