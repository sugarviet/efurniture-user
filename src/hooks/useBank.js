import { get_bank_account_api, get_create_bank_info_api } from "../api/bankApi";
import { useDeleteAuth, useFetchWithAuth, usePostAuth, useUpdateWithAuth } from "./api-hooks";

function useBank() {
    const { mutate: createBankAccount } = usePostAuth(get_create_bank_info_api());

    const addBankAccount = (data) => {
        const { code, accountNumber, accountName, logo, name } = data;

        const body = {
            "bank_code": code,
            "account_number": accountNumber,
            "bank_logo": logo,
            "bank_name": name,
            "bank_account_name": "DOAN GIA BAO"
        }

        createBankAccount(body);
    }

    return { addBankAccount };
}

export default useBank;