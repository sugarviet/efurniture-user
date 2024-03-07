import { get_bank_account_api } from "../../../../api/bankApi";
import BankAccountCard from "../../../../components/BankAccountCard";
import BankAccountForm from "../../../../components/BankAccountForm";
import { withFetchDataWithHeaders } from "../../../../hocs/withFetchDataWithHeaders";

function BankAccount({ data }) {
  return (
    <section className="w-2/3">
      {data.map((bank) => (
        <BankAccountCard key={bank._id} bank={bank} />
      ))}
      <BankAccountForm />;
    </section>
  );
}

export default withFetchDataWithHeaders(BankAccount, get_bank_account_api);
