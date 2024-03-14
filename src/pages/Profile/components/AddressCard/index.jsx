import { useState, lazy } from "react";
import PropTypes from "prop-types";
import AppModal from "@components/ui/AppModal";
import { useDeleteWithAuth, useUpdateWithAuth } from "@hooks/api-hooks";
import {
  set_address_default_by_user,
  delete_single_address,
} from "@api/addressApi";
import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { get_addresses } from "@api/profileApi";
import useNotification from "@hooks/useNotification";
import AlertModal from "../../../../components/AlertModal";

const EditingAddress = lazy(() => import("../EditingAddress"));

const AddressCard = ({ data }) => {
  const queryClient = useQueryClient();
  const { is_default, province, ward, district, address, _id } = data;
  const { success_message, error_message } = useNotification();

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const { mutate: set_address_default } = useUpdateWithAuth(
    set_address_default_by_user(_id),
    undefined,
    () => {
      queryClient.invalidateQueries(get_addresses());
      success_message("address", "set_default");
    },
    () => {
      message.error("Set default address failed");
      error_message("address", "set_default");
    }
  );

  const { mutate: delete_address } = useDeleteWithAuth(
    delete_single_address(_id),
    undefined,
    () => {
      queryClient.invalidateQueries(get_addresses());
      success_message("address", "delete");
    },
    () => {
      error_message("address", "delete");
    }
  );

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
          <p className="text-2xl font-bold">{address}</p>

          {is_default && <p className="text-gray-400">Default address</p>}
        </div>

        <div>
          <p>{district}</p>
          <p>{province}</p>
          <p>{ward}</p>
        </div>

        <div className="flex gap-4">
          {!is_default && (
            <button
              onClick={() => set_address_default({})}
              className="underline"
            >
              Make default
            </button>
          )}
          <button className="underline" onClick={toggleModalEdit}>
            Edit
          </button>
          <button className="underline" onClick={toggleModalDelete}>
            Delete
          </button>
        </div>
      </article>

      <AppModal isOpen={isModalEditOpen} onClose={toggleModalEdit}>
        <EditingAddress data={data} setIsModalEditOpen={setIsModalEditOpen} />
      </AppModal>

      <AppModal isOpen={isModalDeleteOpen} onClose={toggleModalDelete}>
        <AlertModal
          message="Are you sure that you want to delete this address?"
          onConfirm={delete_address}
          onCancel={toggleModalDelete}
        />
      </AppModal>
    </>
  );
};

AddressCard.propTypes = {
  data: PropTypes.object,
};

export default AddressCard;
