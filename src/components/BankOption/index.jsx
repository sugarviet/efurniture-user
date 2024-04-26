import { useState } from "react";
import BankBriefInfo from "../BankBriefInfo";
import SearchInput from "../SearchInput";
import { classNames } from "../../utils/classNames";
import { Empty } from "antd";

function BankOption({ options, onSelect, className }) {
  const [banks, setBanks] = useState(options || []);

  const handleSearchChange = (value) => {
    const banksClone = [...options];

    const filteredBank = banksClone.filter((bank) =>
      bank.shortName.toLowerCase().includes(value.toLowerCase())
    );

    setBanks(filteredBank);
  };

  const HAVE_DATA = banks.length > 0;

  return (
    <div className={classNames(className)}>
      <SearchInput
        onChange={handleSearchChange}
        className="border-[1px] pl-4 pr-10 py-3 text-md focus:border-b-[1px] focus:border-b-black"
        placeholder="Find bank by name..."
      >
        <SearchInput.SubmitButton className="absolute right-4" />
      </SearchInput>
      <ul>
        {HAVE_DATA ? (
          banks.map((bank) => {
            const { id } = bank;
            return (
              <li
                onClick={() => onSelect(bank)}
                className="border-b-[1px]"
                key={id}
              >
                <BankBriefInfo info={bank} />
              </li>
            );
          })
        ) : (
          <Empty />
        )}
      </ul>
    </div>
  );
}

export default BankOption;
