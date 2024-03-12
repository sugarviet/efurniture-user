import { MapPinIcon } from "@heroicons/react/24/outline";
import SearchInput from "../../components/SearchInput";
import StoreLocationCard from "../../components/StoreLocationCard";
import { Fragment, useState } from "react";
import StoreMap from "../../components/StoreMap";
import { classNames } from "../../utils/classNames";

const STORE_LOCATIONS = [
  {
    id: "1",
    name: "Trường Đại học FPT TP.HCM",
    street: "Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ",
    city: "Thành phố Thủ Đức",
    province: "Thành phố Hồ Chí Minh",
    longitude: 106.80988299437283,
    latitude: 10.841243500137622,
  },
  {
    id: "2",
    name: "Nhà văn hóa Sinh viên TP.HCM",
    street: "Lưu Hữu Phước, Đông Hoà,",
    city: "Thành phố Dĩ An",
    province: "Tỉnh Bình Dương",
    longitude: 106.80064829252282,
    latitude: 10.875271295361511,
  },
];

const LOGS = [
  {
    title: "find your local furniture store",
    content: `Use the list or the map to navigate to your local furniture store.
        Click on the store and discover location, opening hours, contact
        information and more. In the furniture shop you will discover the best
        of Danish design presented in carefully designed home expressions.
        Take a tour through the store and experience Scandinavian living
        rooms, cosmopolitan dining settings, inspiring home offices and have a
        talk with our talented staff. In the store you will find our designs
        in different configurations – remember that they all can be customised
        to fit your exact lifestyle. Have a talk with our talented staff that
        can guide you to our fabric and leather samples and show you how the
        furniture can be customised and personalised.`,
  },
  {
    title: "YOUR LOCAL INTERIOR DESIGNER",
    content: `A visit to your local E-Furniture design store is also a chance to meet your local interior designer. Together you can create the perfect home expression and configure the designer furniture to your taste, your home and your lifestyle. Bring ideas to your local interior designer and get valuable and competent feedback and ensure that your vision comes to life in the most beautiful and practical manner. In the store you will find great examples on integrating classic designs with modern trends and get valuable insights into care and styling to ensure that your designs stay forever beautiful.`,
  },
  {
    title: "DESIGN FURNITURE NEAR YOU",
    content: `Furniture shopping after design furniture by renowned Danish and global designers starts in your local E-Furniture furniture store. Here you can see award winning designer furniture customized to fit local and global trends. We offer a wide range of sofas, chairs, tables, beds, storage solutions and accessories. If you’re a looking for a living room upgrade, new patio furniture, a dining set, or new art on your walls, the E-Furniture store is the place to go for home upgrades.`,
  },
  {
    title: "MORE THAN FURNITURE",
    content: `The E-Furniture store presents a great selection of designer furniture. But it’s also the place to go to shop a hostess gift, buy care products, get styling tips and much more. It’s the place to drink a cup of coffee with a stylist, design your home in 3D and touch more than a 100 different fabrics and leathers. No matter your purpose, a visit to a E-Furniture store is always an inspirational trip that allows you to walk out with your mind buzzing with new ideas.

    So, whether you’re looking for a new sofa, are looking at complete home make-over or just need a small advice on upgrading your colour scheme, the journey towards an upgraded home décor starts in one of the E-Furniture furniture stores.`,
  },
];

function StoreLocation() {
  const [location, setLocation] = useState(STORE_LOCATIONS[0]);

  return (
    <main className="grid grid-cols-10">
      <section className="p-4 col-span-10 lg:col-span-4 lg:p-12">
        <SearchInput
          className="border-[1px] pl-4 pr-10 py-3 text-md focus:border-b-[1px] focus:border-b-black"
          placeholder="Find the Nearest Store"
        >
          <SearchInput.SubmitButton className="absolute right-4" />
        </SearchInput>
        <div className="flex my-2">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">Find stores near me</span>
        </div>
        <div className="w-full h-96 lg:hidden">
          <StoreMap markers={STORE_LOCATIONS} center={location} />
        </div>
        <div>
          <p className="uppercase tracking-widest text-sm my-6 lg:my-12">
            {STORE_LOCATIONS.length} stores found
          </p>
          <ul className="overflow-y-scroll max-h-[300px] -mx-12">
            {STORE_LOCATIONS.map((loc, index) => {
              const selected = location.id === loc.id;
              return (
                <li
                  className={classNames(
                    selected ? "bg-[#ddd]" : "",
                    "hover:bg-[#f0f0f0] hover:cursor-pointer"
                  )}
                  onClick={() => setLocation(loc)}
                  key={`${loc} + ${index}`}
                >
                  <StoreLocationCard location={loc} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="hidden lg:block lg:col-span-6">
        <StoreMap markers={STORE_LOCATIONS} center={location} />
      </section>
      <section className="col-span-10 lg:col-span-3">
        <img
          className="w-full h-full object-cover object-center"
          src="https://p3.aprimocdn.net/E-Furniture/c19b2d08-e811-4503-b5e1-ad4300b8a36e/1112750__WEB-ImageCollageSmall-D-723x950.jpg"
        />
      </section>
      <section className="col-span-10 p-4 lg:col-span-7 lg:p-16">
        <h1 className="uppercase font-bold tracking-widest leading-normal lg:mb-8 text-3xl lg:text-6xl">
          e-furniture design furniture stores
        </h1>

        {LOGS.map((log, index) => {
          const { title, content } = log;
          return (
            <Fragment key={`${title} + ${index}`}>
              <h4 className="uppercase font-semibold tracking-widest mt-10 lg:mt-16 mb-2">
                {title}
              </h4>
              <span className="tracking-wider">{content}</span>
            </Fragment>
          );
        })}
      </section>
    </main>
  );
}

export default StoreLocation;
