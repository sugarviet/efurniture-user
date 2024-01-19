import Proptypes from "prop-types";

const AddressCard = ({ isDefault }) => {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex gap-4 items-end uppercase">
        <p className="text-2xl font-bold">Nguyen Dinh Chieu</p>
        <p className="text-gray-400">Default address</p>
      </div>

      <div>
        <p>283</p>
        <p>Ho Chi Minh</p>
        <p>VietNam</p>
      </div>

      <div className="flex gap-4">
        <button className="underline">Edit</button>
        <button className="underline">Delete</button>
      </div>
    </article>
  );
};

AddressCard.propTypes = {
  isDefault: Proptypes.bool,
};

export default AddressCard;
