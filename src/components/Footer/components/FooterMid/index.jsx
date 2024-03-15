import { useState } from "react";
import SocialList from "./components/SocialList";
import MenuSection from "./components/MenuSection";
import useAuth from "../../../../stores/useAuth";
const MENU_ITEMS = [
  {
    title: "Products",
    items: [
      { name: "Sofa", to: "/products/sofa" },
      { name: "Armchairs", to: "/products/armchairs" },
      { name: "Sofas", to: "/products/sofas" },
      { name: "Chair", to: "/products/chair" },
    ],
  },
  {
    title: "Rooms",
    items: [
      { name: "NVH Room", to: "/room/nvh_room" },
      { name: "Living Room", to: "/room/living-room" },
    ],
  },
  {
    title: "Links",
    items: [
      { name: "Home", to: "/" },
      { name: "Cart", to: "/cart" },
      { name: "Find store", to: "/stores" },
      { name: "Checkout", to: "/checkout" },
    ],
  },
];

const GUEST_MENU_ITEMS = [
  ...MENU_ITEMS,
  {
    title: "My Efurniture",
    items: [
      { name: "Login", to: "/login" },
      { name: "Register", to: "/register" },
      { name: "Favorites", to: "/wishlist" },
    ],
  },
];

const USER_MENU_ITEMS = [
  ...MENU_ITEMS,
  {
    title: "My Efurniture",
    items: [
      { name: "Profile", to: "/profile?tab=personal" },
      { name: "Orders", to: "/profile?tab=orders" },
      { name: "Favorites", to: "/profile?tab=favorites" },
      { name: "Logout", to: "/logout" },
    ],
  },
];

function FooterMid() {
  const [openMenu, setOpenMenu] = useState([]);
  const { accessToken } = useAuth();

  const toggleMenu = (index) => {
    if (openMenu.includes(index)) {
      setOpenMenu(openMenu.filter((item) => item !== index));
    } else {
      setOpenMenu([...openMenu, index]);
    }
  };

  return (
    <section className="pt-[1rem] sm:pt-[2.5rem] pb-[3rem] sm:grid sm:grid-cols-[75%_25%]">
      <div className="w-full">
        <ul className="flex flex-col sm:flex-row justify-between gap-[0.75rem] max-w-[81.25rem] list-none">
          {(accessToken ? USER_MENU_ITEMS : GUEST_MENU_ITEMS).map(
            (menu, index) => (
              <MenuSection
                key={index}
                title={menu.title}
                items={menu.items}
                index={index + 1}
                openMenu={openMenu}
                toggleMenu={toggleMenu}
              />
            )
          )}
        </ul>
      </div>
      <div className="sm:hidden w-full flex justify-center py-8">
        <SocialList />
      </div>
      <div className="sm:pl-[4rem]">
        <div className="w-full flex flex-col justify-center items-center sm:block">
          <h3 className="font-HelveticaBold pb-[1.5rem] text-[16px]">
            Go to shopping
          </h3>
          <button className="furniture-button-white-hover px-[55px] py-[18px] text-[0.6875rem] ">
            Shopping{" "}
          </button>
        </div>
      </div>
    </section>
  );
}

export default FooterMid;
