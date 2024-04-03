import { BANK_INFO } from '../constants/bankInfoConstants';
import { useFetchBanking } from '../hooks/api-hooks';
import { get_banking_transaction, async_banking_transaction } from '../api/bankingTransactionApi';
import { set_is_paid_order } from '../api/checkoutApi';
import { usePostWithBankingTransaction, usePostAuth } from '../hooks/api-hooks';
import { useQueryClient } from "@tanstack/react-query";
import useNavigation from '../hooks/useNavigation';


function useBankPayment() {

    const queryClient = useQueryClient();

    const { go_to_order_confirmation } = useNavigation();

    const { data: dataTransaction, isLoading } = useFetchBanking(
        get_banking_transaction()
    );

    const { mutate: asyncTransaction } = usePostWithBankingTransaction(
        async_banking_transaction(),
        undefined,
        () => {
            queryClient.invalidateQueries(get_banking_transaction());
        },
        (error) => {
            console.log(error);
        }
    );

    const { mutate: setIsPaid } = usePostAuth(
        set_is_paid_order(),
        undefined,
        (data) => {
            go_to_order_confirmation(data.data.metaData);
        },
        (error) => {
            console.log(error);
        }
    );

    return { dataTransaction, isLoading, asyncTransaction, setIsPaid };
}

export default useBankPayment;
