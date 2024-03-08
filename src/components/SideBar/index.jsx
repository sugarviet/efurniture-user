import { useEffect, useRef } from "react";
import useCartStore from "@stores/useCartStore";
import { createPortal } from "react-dom";

export default function SideBar({ children }) {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);

  const sidebarRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      closeCart();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <>
      {createPortal(
        <section className="relative">
          <div
            ref={sidebarRef}
            className={`font-HelveticaRoman h-full fixed top-0  bg-white w-full md:w-[60%] lg:w-[46%] min-[1600px]:w-[34%]  overflow-hidden z-[7777] ${
              isOpen
                ? "right-0 duration-700"
                : "md:right-[-60%] lg:right-[-46%] 2xl:right-[-34%] duration-300 animate-cartDisappear"
            }`}
          >
            {children}
            <figure
              className="absolute top-9 right-4 cursor-pointer"
              onClick={() => closeCart()}
            >
              <img
                className="w-[15px]"
                src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702979086/Beana_svg/close_veco12_l3nivu.svg"
              />
            </figure>
          </div>
          <div
            className={`duration-500 ${
              isOpen
                ? "w-full h-full fixed backdrop-opacity-10 top-0 left-0 z-[6666] bg-[rgba(170,170,170,.55)]"
                : ""
            }`}
          ></div>
        </section>,
        document.body
      )}
    </>
  );
}
