import { useState } from "react";
import BankSelection from "../BankSelection";
import axios from "axios";
import BankInput from "../BankInput";
import ErrorMessage from "../ErrorMessage";
import useBank from "../../hooks/useBank";

const client_id = "b2b6a9d3-0e62-48fe-8731-07f072b97412";
const api_key = "0baa5242-d26e-400f-88e4-0e5b82317b71";

function BankAccountForm() {
  const [bank, setBank] = useState();
  const [accountName, setAccountName] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [accountError, setAccountError] = useState(false);

  const { addBankAccount } = useBank();

  const handleLookUpAccount = () => {
    // const data = JSON.stringify({
    //   bin: bank.bin,
    //   accountNumber: accountNumber,
    // });
    // const config = {
    //   method: "post",
    //   url: "https://api.vietqr.io/v2/lookup",
    //   headers: {
    //     "x-client-id": client_id,
    //     "x-api-key": api_key,
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };
    // axios(config)
    //   .then(function (response) {
    //     const { accountName } = response.data.data;
    //     setAccountName(accountName);
    //   })
    //   .catch(function (error) {
    //     setAccountError(true);
    //     setAccountName(undefined);
    //   });
  };

  const handleAddAccount = () => {
    addBankAccount({ ...bank, accountNumber, accountName });
  };

  return (
    <section className="w-full">
      <BankSelection onChange={setBank} />
      <div className="grid grid-cols-2 gap-4 my-2">
        <BankInput
          onBlur={handleLookUpAccount}
          onChange={setAccountNumber}
          value={accountNumber}
          type={"account_number"}
        />
        <BankInput value={accountName} type={"account_name"} />
      </div>
      {accountError && (
        <ErrorMessage message={"Your bank account number is invalid"} />
      )}
      <button
        onClick={handleAddAccount}
        type="submit"
        className="furniture-button-black-hover text-sm px-6 py-4 my-2 float-right"
      >
        Add bank account
      </button>
    </section>
  );
}

export default BankAccountForm;
