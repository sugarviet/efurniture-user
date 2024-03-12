import PropTypes from "prop-types";

function MenuSection({ title, content, index, openMenu, toggleMenu }) {
    return (
        <li className="border-b-[0.0625rem] border-border">
            <button onClick={() => toggleMenu(index)} className="relative block text-[0.8125rem] tracking-[1.1px] text-blackPrimary py-[1.5625rem] text-left font-HelveticaBold w-full">
                {title}
                <img className={`absolute right-4 top-1/2 ${openMenu.includes(index)? "-rotate-180 duration-150" : "duration-150"}`} src="./images/chevron-down.svg"/>
            </button>
            
            <div className={`text-[0.875rem] pr-[1.25rem] ease-in-out duration-200 overflow-hidden max-h-0 ${openMenu.includes(index) ? "max-h-[300px] mb-[2.5rem]" : ""}`}>
                {content}
            </div>
        </li>
    );
}

MenuSection.propTypes = {
    title: PropTypes.string,
    content: PropTypes.object,
    index: PropTypes.number,
    openMenu: PropTypes.array,
    toggleMenu: PropTypes.func,
};


export default MenuSection