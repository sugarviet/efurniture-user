import formatBankAccountNumber from "../../utils/formatBankAccountNumber";
import BankBriefInfo from "../BankBriefInfo";

const BANK = {
  logo: "https://api.vietqr.io/img/STB.png",
  name: "Ngân hàng TMCP Sài Gòn Thương Tín",
};

function BankAccountCard() {
  return (
    <div className="border border-black rounded px-4 pb-4 w-96">
      <BankBriefInfo info={BANK} />
      <div className="flex flex-col">
        <span className="tracking-widest">DOAN GIA BAO</span>
        <span className="text-2xl tracking-widest">
          {formatBankAccountNumber("066427062002")}
        </span>
      </div>
    </div>
  );
}

export default BankAccountCard;
