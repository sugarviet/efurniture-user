import useSwitchTab from "../../hooks/useSwitchTab";

const profileLinks = [
  {
    id: 1,
    title: "Personal data",
    description: "Show or update your personal information",
    key: "personal",
  },
  {
    id: 2,
    title: "Favorites",
    description: "Check the status of your orders or see past orders",
    key: "favorites",
  },
  {
    id: 3,
    title: "Orders",
    description: "Check the status of your orders or see past orders",
    key: "orders",
  },
];

const Account = () => {
  const { handleChangeTab } = useSwitchTab();

  return (
    <section className="px-10 w-[40rem] fade-in-from-bottom">
      {profileLinks.map((link, index) => (
        <div
          key={link.id}
          className={`flex flex-col gap-2 text-base ${
            index !== 0 ? "border-t-2 border-slate-200" : ""
          }  py-2 hover:cursor-pointer`}
         onClick={() => handleChangeTab(link.key)}>
          <p className="font-bold">{link.title}</p>
          <p className="text-sm">{link.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Account;
