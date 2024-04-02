import { useEffect } from "react";
import { get_bank_account_api } from "../../api/bankApi";
import { withFetchDataWithHeaders } from "../../hocs/withFetchDataWithHeaders";
import formatBankAccountNumber from "../../utils/formatBankAccountNumber";
import BankAccountForm from "../BankAccountForm";

function BankOptionSelect({ data, setSelectedBank, selectedBank }) {

    const defaultBank = data.find(bank => bank.is_default === true);

    const handleChooseBank = (event) => {
        if (event.target.value === "") {
            setSelectedBank(null);
        }
        const selectedValue = event.target.value
        const selectedObject = data.find(bank => bank._id === selectedValue);
        setSelectedBank(selectedObject)
    };

    useEffect(() => (
        setSelectedBank(defaultBank)
    ), [data])

    return (
        <div className="furniture-divided-bottom mb-5">
            <select
                placeholder="Select new address"
                value={selectedBank ? selectedBank._id : ""}
                onChange={handleChooseBank}
                className='furniture-input w-full h-[3rem] text-base tracking-[0.8px] leading-[48px] text-ellipsis'
            >
                <option value="">Select new bank account</option>
                {data?.map((bank) => (
                    <option key={bank._id} value={bank._id}>
                        {bank.bank_account_name}, {formatBankAccountNumber(bank.account_number + "")} - {bank.bank_name}
                    </option>
                ))}

            </select>
            {selectedBank &&
                <section className='max-w-[43.75rem] mt-6'>
                    <div className="border-[0.0625rem] border-grey4 border-b-[0.0625rem] border-b-[#5a7468] shadow-deliveryCard bg-grey6 relative">
                        <img className="absolute w-24 top-1/2 -translate-y-1/2 left-4" src={selectedBank.bank_logo}></img>
                        <div className='grid grid-cols-[1fr_auto] py-[1.5rem] pr-[1.5rem] pl-[9rem]'>
                            <article className='text-[12px] lg:text-[14px] leading-[1.1875] tracking-[0.08em] flex flex-col gap-1'>
                                <h4 className='font-medium text uppercase'>{selectedBank.bank_account_name}</h4>
                                <p>{formatBankAccountNumber(selectedBank.account_number + "")}</p>
                                <p>{selectedBank.bank_name}</p>
                            </article>
                        </div>
                    </div>
                </section>
            }
            <div className={`pt-6 ease-slow-to-fast duration-200 overflow-hidden max-h-0 ${!selectedBank ? "max-h-[500px]" : ""}`}>
                <BankAccountForm />
            </div>
        </div>
    )
}

export default withFetchDataWithHeaders(BankOptionSelect, get_bank_account_api);