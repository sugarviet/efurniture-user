import { useState } from "react";
import {
  get_bank_account_api,
  get_banks_api,
  get_delete_bank_api,
} from "../../api/bankApi";
import { useDeleteWithAuth } from "../../hooks/api-hooks";
import useBank from "../../hooks/useBank";
import { classNames } from "../../utils/classNames";
import formatBankAccountNumber from "../../utils/formatBankAccountNumber";
import AlertModal from "../AlertModal";
import BankBriefInfo from "../BankBriefInfo";
import AppModal from "../ui/AppModal";

function BankAccountCard({ bank, className }) {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const {
    bank_account_name,
    account_number,
    bank_logo,
    bank_name,
    is_default,
  } = bank;

  const { setDefault } = useBank();
  const { mutate: removeBankAccount } = useDeleteWithAuth(
    get_delete_bank_api(bank._id),
    undefined,
    () => {},
    () => {},
    get_bank_account_api()
  );

  return (
    <section className={className}>
      <div className="relative h-40 flex flex-col justify-between border border-black rounded px-4 pb-4">
        <BankBriefInfo info={{ logo: bank_logo, name: bank_name }} />
        <div className="flex flex-col">
          <span className="tracking-widest">{bank_account_name}</span>
          <span className="text-2xl tracking-widest">
            {formatBankAccountNumber(account_number + "")}
          </span>
        </div>
        {is_default && (
          <p className="text-gray-400 absolute bottom-4 right-4">
            Default bank
          </p>
        )}
      </div>
      <div className="flex gap-4">
        {!is_default && (
          <button onClick={() => setDefault(bank._id)} className="underline">
            Make default
          </button>
        )}
        <button
          className="underline"
          onClick={() => setIsModalDeleteOpen(true)}
        >
          Delete
        </button>
      </div>
      <AppModal
        isOpen={isModalDeleteOpen}
        onClose={() => setIsModalDeleteOpen(false)}
      >
        <AlertModal
          message="Are you sure that you want to delete this bank?"
          onConfirm={removeBankAccount}
          onCancel={() => setIsModalDeleteOpen(false)}
        />
      </AppModal>
    </section>
  );
}

export default BankAccountCard;
