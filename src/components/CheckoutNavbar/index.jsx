import { Link } from "react-router-dom";
import useSwitchTab from "../../pages/Checkout/hooks/useSwitchTab";
const checkoutLinks = [
  {
    id: 1,
    title: "Customer information",
    key: "billing",
  },
  {
    id: 2,
    title: "Delivery",
    key: "shipping",
  },
  {
    id: 3,
    title: "Payments",
    key: "payment",
  },
  {
    id: 4,
    title: "Summary",
    key: "summary",
  },
];

const tabCanGoTo = {
  billing: [],
  shipping: ["billing"],
  payment: ["shipping", "billing"],
  summary: ["shipping", "billing", "payment"],
};

function CheckoutNavbar() {
  const { activeTab, handleChangeTab } = useSwitchTab();

  const handleClickCheckoutTab = (tabKey) => {
    if (tabCanGoTo[activeTab].includes(tabKey)) {
      handleChangeTab(tabKey);
    }
  };

  return (
    <header className="flex flex-col md:grid md:grid-cols-[30%_70%] lg:grid lg:grid-cols-[54.167%_45.83%] bg-[#070628] pb-[1.25rem]">
      <div className="h-[90px] flex items-end pb-[1.25rem] md:pb-0">
        <Link to="/">
          <img src="./images/logo.png" className="ml-[30px] w-[140px]"></img>
        </Link>
      </div>
      <nav className="md:h-[90px] items-end flex flex-row justify-between text-center px-[30px]">
        {checkoutLinks.map((link) => (
          <div
            key={link.id}
            className="text-[0.875rem] leading-[1.714] tracking-[0.05em] cursor-pointer"
          >
            <div
              onClick={() => handleClickCheckoutTab(link.key)}
              className={`text-white inline-block pb-[0.2em]  ${activeTab === link.key
                  ? "border-b border-white font-HelveticaBold "
                  : ""
                }`}
            >
              {link.title}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}

export default CheckoutNavbar;
