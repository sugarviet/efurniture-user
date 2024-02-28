import { Link } from "react-router-dom";
import SocialList from "../SocialList";

function MenuSection({ title, items, index, openMenu, toggleMenu }) {
  return (
    <li className="furniture-divided-bottom sm:border-none">
      <p
        className="uppercase font-HelveticaBold sm:mb-[1.25rem] mb-[1rem] text-[0.75rem] tracking-[0.125rem]"
        onClick={() => toggleMenu(index)}
      >
        {title}
      </p>
      <ul
        className={`${
          index !== 1
            ? "grid grid-rows-[repeat(5,1fr)] sm:grid-flow-col sm:gap-x-8"
            : ""
        } sm:max-h-full ease-in duration-300 overflow-hidden max-h-0 ${
          openMenu.includes(index) ? "pb-8 sm:pb-0 max-h-[300px]" : ""
        }`}
      >
        {items.map((data, itemIndex) => (
          <li
            className="text-[11px] sm:text-sm pb-[8px] tracking-[0.56px]"
            key={itemIndex}
          >
            <Link to={data.to} className="furniture-link">
              {data.name}
            </Link>
          </li>
        ))}
        {index === 1 && (
          <li className="pt-10 hidden sm:block">
            <SocialList />
          </li>
        )}
      </ul>
    </li>
  );
}

export default MenuSection;
