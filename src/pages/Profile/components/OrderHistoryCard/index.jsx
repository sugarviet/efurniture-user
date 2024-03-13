import { useState } from "react";
import AppModal from "@components/ui/AppModal";
import formattedCurrency from '@utils/formattedCurrency'
import formattedDate from '@utils/formattedDate'
import useNavigation from '@hooks/useNavigation';
import useScroll from "@hooks/useScroll";
import PropTypes from "prop-types";
import { useUpdateWithAuth, useFetchWithAuth } from "@hooks/api-hooks";
import { cancel_order_by_id } from '../../../../api/orderHistoryApi';
import { get_order_by_state } from "../../../../api/orderHistoryApi";
import useNotification from "@hooks/useNotification";
import { useQueryClient } from "@tanstack/react-query";

const ORDER_STATE = {
    pending: "Pending",
    processing: "Processing",
    done: "Done",
}

function OrderHistoryCard({ data }) {

    const queryClient = useQueryClient();

    const { handleScrollToTop } = useScroll();

    const { success_message, error_message } = useNotification();

    const { go_to_order_detail, go_to_home } = useNavigation();

    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

    const { mutate: cancelOrder } = useUpdateWithAuth(
        cancel_order_by_id(data._id),
        undefined,
        () => {
            queryClient.invalidateQueries(get_order_by_state(ORDER_STATE.pending));
            success_message('order', 'delete')
            setIsModalDeleteOpen(!isModalDeleteOpen);
        },
        () => {
            setIsModalDeleteOpen(!isModalDeleteOpen);
            error_message('order', 'delete');
        }
    );

    const toggleModalDelete = () => {
        setIsModalDeleteOpen(!isModalDeleteOpen);
    };

    return (
        <section className='pb-8'>
            <div className='bg-[#F7F7F6] px-8 py-4 border-b-grey5 border-[1px] rounded-t-xl'>
                <section className='flex flex-row justify-between g
                ap-20'>
                    <div className='flex flex-row  gap-10 2xl:gap-16'>
                        <article className='flex flex-col'>
                            <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Ordered</p>
                            <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>{formattedDate(data.createdAt)}</p>
                        </article>
                        <article className='flex flex-col'>
                            <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Total</p>
                            <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>{formattedCurrency(data.order_checkout.final_total)}</p>
                        </article>
                        <article className='flex flex-col'>
                            <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Payment method</p>
                            <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>{data.payment_method}</p>
                        </article>
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Order # {data.order_code}</p>
                            <div className='flex flex-row items-center'>
                                <p
                                    className='font-medium text-[14px] text-grey1 leading-[1.4] tracking-[0.04em] cursor-pointer underline pr-2'
                                    onClick={() => {
                                        go_to_order_detail(data._id),
                                            handleScrollToTop()
                                    }
                                    }
                                >
                                    View order details
                                </p>
                                <p className='border-r-[1px] border-grey3 h-4 mt-1'></p>
                                <p className='font-HelveticaBold text-[16px] text-green-700 leading-[1.4] tracking-[0.04em] pl-2'>{data.order_tracking[data.order_tracking.length - 1].name}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >

            <div className='border-x-[1px] px-8 py-4 border-b-[1px] border-x-grey5 border-b-grey5'>
                {data.order_products.map((product, index) => (
                    <section key={index} className='mt-8 flex flex-row justify-between border-b border-grey5 pb-8'>
                        <div className='flex flex-row gap-5'>
                            <figure className='w-16 h-16 sm:w-28 sm:h-28 rounded-xl border-grey5 border-[1px] px-2 py-2 bg-white'>
                                <img className='w-full h-full' src={product.thumb}></img>
                            </figure>
                            <article className='flex flex-col'>
                                <p className='font-HelveticaBold text-[11px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{product.name}</p>
                                <p className='pt-3 text-[11px] sm:text-[13px] leading-[1.4] tracking-[0.04em]'>Qty: {product.quantity}</p>
                            </article>
                        </div>
                        <p className='font-HelveticaBold text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{formattedCurrency(product.price)}</p>
                    </section>
                ))}
                <div className='flex flex-row justify-end gap-4 '>
                    <section>
                        <button
                            className="furniture-button-white-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8"
                            onClick={go_to_home}
                        >
                            Contact Store
                        </button>
                    </section>
                    {data.order_tracking[data.order_tracking.length - 1].name === ORDER_STATE.done &&
                        <section>
                            <button
                                className="furniture-button-white-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8"
                                onClick={go_to_home}
                            >
                                Buy again
                            </button>
                        </section>
                    }
                    {data.order_tracking[data.order_tracking.length - 1].name === ORDER_STATE.pending &&
                        <section>
                            <button
                                onClick={toggleModalDelete}
                                className="furniture-button-black-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8"
                            >
                                Cancel
                            </button>
                        </section>
                    }
                    {data.order_tracking[data.order_tracking.length - 1].name === ORDER_STATE.processing &&
                        <section>
                            <button
                                className="furniture-button-black-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8"
                            >
                                Refund
                            </button>
                        </section>
                    }
                </div>

            </div>
            <AppModal isOpen={isModalDeleteOpen} onClose={toggleModalDelete}>
                <div className="flex flex-col gap-6">
                    <p className="text-xl font-bold text-center">
                        Are you sure that you want to delete this address?
                    </p>
                    <div className="flex gap-2 ml-auto">
                        <button className="furniture-button-black-hover px-6 py-2.5" onClick={() => cancelOrder({})}>
                            Delete
                        </button>
                        <button className="furniture-button-black-hover px-6 py-2.5" onClick={toggleModalDelete}>
                            Cancel
                        </button>
                    </div>
                </div>
            </AppModal>
        </section >
    )
}
OrderHistoryCard.propTypes = {
    data: PropTypes.object,
};

export default OrderHistoryCard