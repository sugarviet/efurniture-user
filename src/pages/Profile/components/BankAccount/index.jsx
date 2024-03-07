import BankAccountCard from "../../../../components/BankAccountCard";
import BankAccountForm from "../../../../components/BankAccountForm";

function BankAccount() {
  return (
    <section className="w-2/3">
      <BankAccountCard />
      <BankAccountForm />;
    </section>
  );
}

export default BankAccount;
