import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import CalloutBar from "../CalloutBar";
import MenuButton from "../MenuButton";
import { classNames } from "../../utils/classNames";
import FurnitureMenu from "../FurnitureMenu";
import RoomMenu from "../RoomMenu";
import FavoriteButton from "../FavoriteButton";
import ShoppingBagButton from "../ShoppingBagButton";
import SearchInput from "../SearchInput";
import Logo from "../Logo";
import CloseButton from "../CloseButton";
import ContactOption from "../ContactOption";
import { PATH } from "../../router";

const navigation = {
  categories: [
    {
      id: "products",
      name: "products",
      MenuComponent: FurnitureMenu,
    },
    {
      id: "rooms",
      name: "rooms",
      MenuComponent: RoomMenu,
    },
  ],
  pages: [],
};

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <CloseButton onClick={() => setOpen(false)} />
                </div>

                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-black text-black"
                                : "border-transparent text-gray-400",
                              "flex-1 uppercase tracking-widest whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => {
                      const { name, MenuComponent } = category;
                      return (
                        <Tab.Panel
                          key={name}
                          className="space-y-10 px-4 pb-8 pt-10"
                        >
                          <MenuComponent />
                        </Tab.Panel>
                      );
                    })}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                  <ContactOption onMobile={true} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <CalloutBar />
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <div className="lg:hidden">
                <MenuButton onClick={() => setOpen(true)} />
              </div>

              <div className="flex flex-1 justify-center lg:justify-start lg:flex-none">
                <Logo className="h-8 w-auto" />
              </div>

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => {
                    const { name, MenuComponent } = category;

                    return (
                      <Popover key={name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-black text-black"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out uppercase tracking-widest"
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                <MenuComponent />
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    );
                  })}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:ml-6 w-72">
                  <SearchInput />
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <FavoriteButton favored />
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <ShoppingBagButton />
                </div>
              </div>
            </div>
            <div className="flex-1 mt-2 mb-8 lg:hidden">
              <SearchInput />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

// import styles from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import useCartStore from "@stores/userStore";

// const Navbar = () => {
//   const toggleCart = useCartStore((state) => state.toggleCart);

//   return (
//     <nav id="navbar" className="flex justify-between px-5 py-2 bg-blue-300">
//       <div className="flex gap-4">
//         <NavLink to="/" className={styles.navlink_item}>
//           Home
//         </NavLink>
//         <NavLink to="/products" className={styles.navlink_item}>
//           Products
//         </NavLink>
//         <NavLink to="/faq" className={styles.navlink_item}>
//           FAQ
//         </NavLink>
//       </div>

//       <div className="flex gap-4">
//         <NavLink to="/login" className={styles.navlink_item}>
//           Login
//         </NavLink>
//         <NavLink onClick={() => toggleCart()} className={styles.navlink_item}>
//           Cart
//         </NavLink>
//         <NavLink to="/register" className={styles.navlink_item}>
//           SignUp
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
