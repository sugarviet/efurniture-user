import { useState } from "react";
import AppModal from "@components/ui/AppModal";
import AddressCard from "../AddressCard";
import CreatingAddress from "../CreatingAddress";
import { withFetchDataWithHeaders } from "@hocs/withFetchDataWithHeaders";
import { get_addresses } from "@api/profileApi";
import Proptypes from "prop-types";

const Address = ({ data }) => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const toggleModalCreate = () => {
    setIsModalCreateOpen(!isModalCreateOpen);
  };

  return (
    <section>
      <button onClick={toggleModalCreate} className="underline mx-auto ">
        Create new address
      </button>

      <section className="mt-4 w-3/4 flex flex-col gap-5">
        {data.map((address) => (
          <AddressCard key={address._id} data={address} />
        ))}
      </section>

      <AppModal isOpen={isModalCreateOpen} onClose={toggleModalCreate}>
        <CreatingAddress setIsModalCreateOpen={setIsModalCreateOpen} />
      </AppModal>
    </section>
  );
};
Address.propTypes = {
  data: Proptypes.array,
};

export default withFetchDataWithHeaders(Address, get_addresses);
