import { lazy } from "react";
import AppRow from "@components/AppRow";
import AppSuspense from "@components/AppSuspense";
import useSwitchTab from "./hooks/useSwitchTab";
import Account from "./components/Account";

const Address = lazy(() => import("./components/Address"));
const Orders = lazy(() => import("./components/Orders"));
const Favorites = lazy(() => import("./components/Favorites"));
const PersonalData = lazy(() => import("./components/PersonalData"));

const profileLinks = [
  {
    id: 1,
    title: "My account",
    key: "account",
  },
  {
    id: 2,
    title: "Personal data",
    key: "personal",
  },
  {
    id: 3,
    title: "Favorites",
    key: "favorites",
  },
  {
    id: 4,
    title: "Orders",
    key: "orders",
  },
  {
    id: 5,
    title: "Address",
    key: "address",
  },
];

const tabsProfile = {
  account: {
    title: "My account",
    component: <Account />,
  },
  orders: {
    title: "Orders",
    component: <Orders />,
  },
  favorites: {
    title: "Favorites",
    component: <Favorites />,
  },
  address: {
    title: "Address",
    component: <Address />,
  },
  personal: {
    title: "Personal data",
    component: <PersonalData />,
  },
};

const Profile = () => {
  const { activeTab, handleChangeTab } = useSwitchTab();

  return (
    <main>
      <section className="text-center my-3 flex flex-col gap-5 w-full h-56 justify-end">
        <div className="-translate-y-1/2">
          <h1 className="text-5xl font-black my-4">
            {tabsProfile[activeTab].title}
          </h1>
          <div>
            <h2 className="text-lg normal-case">Viet Dang</h2>
            <p className="underline">Logout</p>
          </div>
        </div>
      </section>
      <AppRow
        gutter={4}
        spans={[
          { xs: 0, sm: 6, md: 7, lg: 6, xl: 7 },
          { xs: 24, sm: 18, md: 17, lg: 18, xl: 17 },
        ]}
      >
        <div className="flex flex-col mx-auto py-2 px-4 uppercase">
          <div className="flex flex-col mx-auto py-2 px-3 gap-2 font-[22px] tracking-widest">
            {profileLinks.map((links) => (
              <p
                key={links.id}
                className="furniture-link"
                onClick={() => handleChangeTab(links.key)}
              >
                {links.title}
              </p>
            ))}
          </div>
        </div>

        <div>
          <AppSuspense>{tabsProfile[activeTab].component}</AppSuspense>
        </div>
      </AppRow>
    </main>
  );
};

export default Profile;
