import { lazy, useState } from "react";
import AppRow from "@components/AppRow";
import AppSuspense from "@components/AppSuspense";
import { withAuthentication } from "../../hocs/withAuthentication";
import useAuth from "../../stores/useAuth";
import { classNames } from "../../utils/classNames";
import BankAccount from "./components/BankAccount";
import useUrlState from "../../hooks/useUrlState";
import OrderDetail from "./components/OrderDetail";
import { useLocation } from "react-router-dom";

const Address = lazy(() => import("./components/Address"));
const Orders = lazy(() => import("./components/Orders"));
const Favorites = lazy(() => import("./components/Favorites"));
const PersonalData = lazy(() => import("./components/PersonalData"));

const TAB_PROFILE = {
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
  bankAccount: {
    title: "Bank Account",
    component: <BankAccount />,
  },
  personal: {
    title: "Personal data",
    component: <PersonalData />,
  },
};

const Profile = () => {
  const tabKeys = Object.keys(TAB_PROFILE);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  const [currentTab, setCurrentTab] = useUrlState("tab");
  const { clearTokens } = useAuth();

  return (
    <main className="flex flex-col gap-8 pb-12">
      <section className="text-center my-3 flex flex-col gap-5 w-full h-56 justify-end mb-10">
        <div>
          <h1 className="text-5xl font-black my-4">
            {TAB_PROFILE[currentTab].title}
          </h1>
          <div>
            <h2 className="text-lg normal-case">Viet Dang</h2>
            <button onClick={clearTokens} className="underline">
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="mt-3">
        <AppRow
          gutter={4}
          spans={[
            { xs: 0, sm: 6, md: 7, lg: 6, xl: 7 },
            { xs: 24, sm: 18, md: 17, lg: 18, xl: 17 },
          ]}
        >
          <div className="flex flex-col mx-auto py-2 px-4 uppercase">
            <div className="flex flex-col mx-auto py-2 px-3 gap-2 font-[22px] tracking-widest">
              {tabKeys.map((key) => {
                const { title } = TAB_PROFILE[key];

                return (
                  <p
                    key={key}
                    className={classNames(
                      "furniture-link",
                      currentTab === key ? "underline" : ""
                    )}
                    onClick={() => setCurrentTab(key)}
                  >
                    {title}
                  </p>
                );
              })}
            </div>
          </div>

          <div>
            {id ?
              <OrderDetail />
              :
              <AppSuspense>{TAB_PROFILE[currentTab].component}</AppSuspense>
            }
          </div>
        </AppRow>
      </section>
    </main>
  );
};

export default withAuthentication(Profile);
