import useBank from "../../hooks/useBank";
import formatBankAccountNumber from "../../utils/formatBankAccountNumber";
import BankBriefInfo from "../BankBriefInfo";

function BankAccountCard({ bank }) {
  const { bank_account_name, account_number, bank_logo, bank_name } = bank;
  return (
    <div className="border border-black rounded px-4 pb-4 w-96">
      <BankBriefInfo info={{ logo: bank_logo, name: bank_name }} />
      <div className="flex flex-col">
        <span className="tracking-widest">{bank_account_name}</span>
        <span className="text-2xl tracking-widest">
          {formatBankAccountNumber(account_number + "")}
        </span>
      </div>
    </div>
  );
}

export default BankAccountCard;
