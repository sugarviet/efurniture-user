import { useParams } from "react-router";
import { get_order_detail_by_id } from "@api/orderHistoryApi";
import { useFetchWithAuth } from "@hooks/api-hooks";
import LoadingSpinner from "@components/LoadingSpinner";
import useNavigation from "../../../../utils/useNavigation";
import FormattedCurrency from '@utils/FormattedCurrency'
import formattedTime from '@utils/formattedTime'
import FormattedDate from '@utils/FormattedDate'

function OrderDetail() {

    const { go_to_back } = useNavigation();

    const { id } = useParams();

    const { data: orderDetail, isLoading } = useFetchWithAuth(get_order_detail_by_id(id));

    const orderShipping = orderDetail?.order_shipping || { orderShipping: null };

    const orderProduct = orderDetail?.order_products || [];
    const orderCheckout = orderDetail?.order_checkout || { orderCheckout: null };

    if (isLoading) return <LoadingSpinner />;

    console.log(orderDetail)


    return (
        <section className="border-[1px] rounded-lg shadow-md max-w-[60rem] px-16 py-12">
            <section
                className="flex flex-row gap-2 items-center cursor-pointer"
                onClick={go_to_back}
            >
                <img
                    className="rotate-[180deg]"
                    src="/images/arrow-right-long.svg"
                />
                <p>Orders</p>
            </section>

            <section>
                <article className="flex flex-row gap-1 items-center pt-6 gap-4">
                    <p className='font-HelveticaBold text-[1.3rem] leading-[1.20833] tracking-[0.08em] '>Order detail # {orderDetail.order_code}</p>
                    <div className="bg-blackPrimary px-2 py-2 rounded-md ">
                        <p className="text-white font-HelveticaBold leading-[1.20833] tracking-[0.08em]">PENDING</p>
                    </div>
                </article>
                <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em] pt-2'>Date: {FormattedDate(orderDetail.createdAt)}</p>

                <div className='relative w-full h-[2px] bg-blackPrimary mt-10 mb-14' >
                    <div className='bg-blackPrimary top-[-15px] left-0 rounded-[50%] w-8 h-8 relative  after:absolute after:top-[6px] after:left-[12px] after:w-[7px] after:h-[14px] after:rotate-45 after:border-r-[2px] after:border-b-[2px]'>
                    </div>
                    <div className='absolute top-[-15px] left-1/2 -translate-x-1/2 border-[2px] border-black rounded-[50%] w-8 h-8 bg-white'></div>
                    <div className='absolute top-[-15px] right-0 border-[2px] border-black rounded-[50%] w-8 h-8 bg-white'></div>

                    <article className='absolute top-6 left-[-20px] flex flex-col items-center'>
                        <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Ordered</p>
                        <p className='text-[14px]  text-grey1 leading-[1.4] tracking-[0.04em]'>{formattedTime(orderDetail.createdAt)}, {FormattedDate(orderDetail.createdAt)}</p>
                    </article>
                    <article className='absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center'>
                        <article className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Ready to ship</article>
                        <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Ship with eFurniture Express</p>
                    </article>

                    <article className='absolute top-6 right-[-46px] flex flex-col items-center'>
                        <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Expected delivery</p>
                        <p className='text-[14px]  text-grey1 leading-[1.4] tracking-[0.04em]'>Feb 22 - 26</p>
                    </article>
                </div>


                <div className="flex flex-row justify-between mt-32">
                    <div className="basis-2/3">
                        <p className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em]'>Billing address</p>
                        <table className='mt-2 w-[50%]'>
                            <tbody>
                                <tr>
                                    <td className='font-HelveticaBold text-[16px] leading-[1.20833] tracking-[0.08em]'>Name</td>
                                    <td className='pt-2 leading-[1.4] tracking-[0.04em]'>{orderShipping.first_name} {orderShipping.last_name}</td>
                                </tr>
                                <tr className='mt-2'>
                                    <td className='font-HelveticaBold text-[16px] leading-[1.20833] tracking-[0.08em]'>Address</td>
                                    <td className='pt-2 max-w-[150px] leading-[1.4] tracking-[0.04em]'>{orderShipping.ward}, {orderShipping.district}, {orderShipping.address}</td>
                                </tr>
                                <tr>
                                    <td className='font-HelveticaBold text-[16px] leading-[1.20833] tracking-[0.08em]'>Phone</td>
                                    <td className='pt-2 leading-[1.4] tracking-[0.04em]'>{orderShipping.phone}</td>
                                </tr>
                                <tr>
                                    <td className='font-HelveticaBold text-[16px] leading-[1.20833] tracking-[0.08em]'>Email</td>
                                    <td className='pt-2 leading-[1.4] tracking-[0.04em]'>{orderShipping.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="basis-1/3">
                        <p className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em]'>Payment method</p>
                        <p className='pt-2 leading-[1.4] tracking-[0.04em] mt-2'>{orderDetail.payment_method}</p>
                        <p className='pt-2 leading-[1.4] tracking-[0.04em]'>&#x00028;Thanh toán thành công&#x00029;</p>

                    </div>
                </div>

                <div className='w-full'>
                    <p className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em] pt-10 pb-5'>Order items</p>
                    <div className='w-full bg-[#F2F2F4] rounded-md px-3 sm:px-12 pb-12'>
                        <div className={`furniture-divided-bottom pb-8 ${orderProduct.length > 5 ? "overflow-y-auto h-[320px]" : "overflow-y-hidden"}`}>
                            {orderProduct.map((product) => (
                                <div key={product._id} className='mt-8 flex flex-row justify-between'>
                                    <div className='flex flex-row gap-5'>
                                        <div className='w-16 h-16 sm:w-28 sm:h-28 rounded-xl px-2 py-2 bg-white'>
                                            <img className='w-full h-full' src={product.thumb}></img>
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='font-HelveticaBold text-[11px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{product.name}</p>
                                            <p className='pt-3 text-[11px] sm:text-[13px] leading-[1.4] tracking-[0.04em]'>Qty: {product.quantity}</p>
                                        </div>
                                    </div>
                                    <p className='font-HelveticaBold text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{FormattedCurrency(product.price)}</p>
                                </div>
                            ))}
                        </div>
                        <div className=''>
                            <ul className="pt-4 list-none furniture-divided-bottom pb-4">
                                <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                                    <span className="">Subtotal </span>
                                    <span>{FormattedCurrency(orderCheckout.total)}</span>
                                </li>
                                <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                                    <span className="">Discount </span>
                                    <span>
                                        {orderDetail ?
                                            FormattedCurrency(orderCheckout.total - orderCheckout.final_total)
                                            :
                                            "0,00đ"
                                        }
                                    </span>
                                </li>
                                <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                                    <span className="">Shipping </span>
                                    <span>
                                        0.00đ
                                    </span>
                                </li>
                            </ul>
                            <ul className='pt-4'>
                                <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                                    <span className="text-[15px] font-HelveticaBold">QUOTATION TOTAL </span>
                                    <span className='text-[20px] font-HelveticaBold'>
                                        {FormattedCurrency(orderCheckout.final_total)}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}

export default OrderDetail