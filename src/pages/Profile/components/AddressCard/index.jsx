import { useState } from "react";
import AppModal from "@components/ui/AppModal";
import EditingAddress from "../EditingAddress";
import Proptypes from "prop-types";

const AddressCard = ({ isDefault }) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const toggleModalEdit = () => {
    setIsModalEditOpen(!isModalEditOpen);
  };
  const toggleModalDelete = () => {
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  return (
    <>
      <article className="flex flex-col gap-3 border-b-2 border-b-gray-200 py-2">
        <div className="flex gap-4 items-end uppercase">
          <p className="text-2xl font-bold">Nguyen Dinh Chieu</p>

          {isDefault && <p className="text-gray-400">Default address</p>}
        </div>

        <div>
          <p>283</p>
          <p>Ho Chi Minh</p>
          <p>VietNam</p>
        </div>

        <div className="flex gap-4">
          {!isDefault && <button className="underline">Make default</button>}
          <button className="underline" onClick={toggleModalEdit}>
            Edit
          </button>
          <button className="underline" onClick={toggleModalDelete}>Delete</button>
        </div>
      </article>

      <AppModal isOpen={isModalEditOpen} onClose={toggleModalEdit}>
        <EditingAddress />
      </AppModal>

      <AppModal isOpen={isModalDeleteOpen} onClose={toggleModalDelete}>
        <div className="flex flex-col gap-6">
          <p className="text-xl font-bold text-center">Are you sure that you want to delete this address?</p>
          <div className="flex gap-2 ml-auto">
            <button className="furniture-button-black-hover px-6 py-2.5">Delete</button>
            <button className="furniture-button-black-hover px-6 py-2.5">Cancel</button>
          </div>
        </div>
      </AppModal>
    </>
  );
};

AddressCard.propTypes = {
  isDefault: Proptypes.bool,
};

export default AddressCard;
