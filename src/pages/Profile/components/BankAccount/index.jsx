import { get_bank_account_api } from "../../../../api/bankApi";
import BankAccountCard from "../../../../components/BankAccountCard";
import BankAccountForm from "../../../../components/BankAccountForm";
import { withFetchDataWithHeaders } from "../../../../hocs/withFetchDataWithHeaders";

function BankAccount({ data }) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 mr-6">
        {data.map((bank) => (
          <BankAccountCard className="col-span-1" key={bank._id} bank={bank} />
        ))}
      </div>
      <div className="w-2/3 mt-6">
        <BankAccountForm />;
      </div>
    </section>
  );
}

export default withFetchDataWithHeaders(BankAccount, get_bank_account_api);
