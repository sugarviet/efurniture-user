import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function StoreLocationCard({ location }) {
  const { name, street, city, province } = location;
  return (
    <article className="border-t-[#d7d7d7] border-t-[1px] py-4 pl-12 pr-12 lg:pr-4 flex items-center">
      <div className="flex-1 flex flex-col text-sm gap-y-[.5px]">
        <span>{name}</span>
        <span>{street}</span>
        <span>{city}</span>
        <span>{province}</span>
        <span className="text-[#777777] mt-4">Get direction</span>
      </div>
      <a>
        <ArrowRightCircleIcon className="w-8 h-8" />
      </a>
    </article>
  );
}

export default StoreLocationCard;
