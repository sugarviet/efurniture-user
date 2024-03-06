import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import AppModal from "@components/ui/AppModal";
import { useState } from "react";
import { get_banks_api } from "../../api/bankApi";
import LoadingSpinner from "../LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BankOption from "../BankOption";
import BankBriefInfo from "../BankBriefInfo";

function BankSelection() {
  const [selectedBank, setSelectedBank] = useState(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const { data, isLoading } = useQuery([get_banks_api()], () =>
    axios
      .get(get_banks_api())
      .then((response) => response.data)
      .then((data) => data.data)
  );

  const handleSelect = (bank) => {
    setModalOpen(false);
    setSelectedBank(bank);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="w-2/3">
      <div className="font-semibold mb-2">Bank</div>
      <button
        onClick={() => setModalOpen(true)}
        className="font-HelveticaRoman w-full px-4 outline-none border-[0.5px] border-[#191915] h-14 flex items-center justify-between"
      >
        {selectedBank ? (
          <BankBriefInfo info={selectedBank} />
        ) : (
          <span>Select your transaction bank</span>
        )}
        <ArrowDownCircleIcon className="w-6 h-6" />
      </button>

      <AppModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <BankOption onSelect={handleSelect} options={data} />
      </AppModal>
    </section>
  );
}

export default BankSelection;
