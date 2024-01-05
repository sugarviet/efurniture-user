import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CartSideBar({ isOpen, setIsOpen, children }) {

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
        <section className="relative">
            {createPortal(
                <>
                    <div ref={sidebarRef} className={`font-HelveticaRoman h-full fixed top-0  bg-white w-[34%]  overflow-hidden z-[7777] ${isOpen ? 'right-0 duration-700' : 'right-[-34%] duration-300 animate-cartDisappear'}`}>
                        {children}
                        <figure className="absolute top-9 right-4 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            <img className="w-[15px]" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg" />
                        </figure>
                    </div>
                    <div className={`duration-500 ${isOpen ? 'w-full h-full fixed backdrop-opacity-10 top-0 left-0 z-[6666] bg-[rgba(170,170,170,.55)]' : ''}`}></div>
                </>,
                document.body
            )}
        </section>


    )
}
