import { createPortal } from "react-dom";
import { classNames } from "@utils/classNames";

export default function BottomBar({ children, className, isOpen }) {

    return (
        <>
            {createPortal(
                <section className="relative">
                    <div
                        className={classNames(`font-HelveticaRoman w-full fixed bottom-0  bg-white h-[calc(90%_-_1.5rem)]  overflow-hidden z-[7777] 
                        ${isOpen ? 'bottom-0 duration-500 shadow-bottomBar' : 'bottom-[-100%] duration-500 '}`, className)}
                    >
                        {children}
                    </div>
                </section>, document.body
            )}
        </>



    )
}
