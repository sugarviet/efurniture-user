import { get_bank_account_api, get_create_bank_info_api } from "../api/bankApi";
import { useDeleteAuth, usePostAuth, useUpdateWithAuth } from "./api-hooks";
import useNotification from "./useNotification";

function useBank() {
  const { error_message, success_message } = useNotification();
  const { mutate: createBankAccount } = usePostAuth(
    get_create_bank_info_api(),
    undefined,
    () => {},
    () => {},
    get_bank_account_api()
  );

  const { mutate: updateBankAccount } = useUpdateWithAuth(
    get_create_bank_info_api(),
    undefined,
    () => {
      success_message(null, null, "Set address default successfully");
    },
    (error) => {
      error_message(null, null, error.message);
    },
    get_bank_account_api()
  );

  const { mutate: remove } = useDeleteAuth(
    get_create_bank_info_api(),
    undefined,
    () => {},
    () => {},
    get_bank_account_api()
  );

  const addBankAccount = (data) => {
    const { code, accountNumber, accountName, logo, name } = data;

    const body = {
      bank_code: code,
      account_number: accountNumber,
      bank_logo: logo,
      bank_name: name,
      bank_account_name: "DOAN GIA BAO",
    };

    createBankAccount(body);
  };

  const setDefault = (id) => {
    const body = { bankInfor_id: id };
    updateBankAccount(body);
  };

  const removeBankAccount = (id) => {
    const body = { bankInfor_id: id };
    remove(body);
  };

  return { addBankAccount, setDefault, removeBankAccount };
}

export default useBank;
