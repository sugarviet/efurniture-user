import formattedCurrency from '@utils/FormattedCurrency'
import formattedDate from '@utils/formattedDate'
import { get_order_by_state } from "@api/orderHistoryApi";
import { useFetchWithAuth, } from "@hooks/api-hooks";
import { ORDER_STATE } from '@constants/orderStateConstants';
import LoadingSpinner from "@components/LoadingSpinner";
import useNavigation from '../../../../utils/useNavigation';
import useScroll from "@hooks/useScroll";

function Pending() {

  const { handleScrollToTop } = useScroll();

  const { go_to_order_detail, go_to_home } = useNavigation();

  const { data: pendingOrder, isLoading } = useFetchWithAuth(get_order_by_state(ORDER_STATE.pending));

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {pendingOrder?.data.map((order, index) => (
        <section key={index} className='pb-8'>
          <div className='bg-[#F7F7F6] px-8 py-4 border-b-grey5 border-[1px] rounded-t-xl'>
            <section className='flex flex-row justify-between'>
              <div className='flex flex-row gap-20'>
                <article className='flex flex-col'>
                  <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Ordered</p>
                  <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>{formattedDate(order.createdAt)}</p>
                </article>
                <article className='flex flex-col'>
                  <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Total</p>
                  <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>{formattedCurrency(order.order_checkout.final_total)}</p>
                </article>
                <article className='flex flex-col'>
                  <p className='text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]'>Payment method</p>
                  <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>{order.payment_method}</p>
                </article>
              </div>
              <div>
                <div className='flex flex-col'>
                  <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Order # {order.order_code}</p>
                  <div className='flex flex-row items-center'>
                    <p
                      className='font-medium text-[14px] text-grey1 leading-[1.4] tracking-[0.04em] cursor-pointer underline pr-2'
                      onClick={() => {
                        go_to_order_detail(order._id),
                          handleScrollToTop()
                      }
                      }
                    >
                      View order details
                    </p>
                    <p className='border-r-[1px] border-grey3 h-4 mt-1'></p>
                    <p className='font-HelveticaBold text-[16px] text-green-700 leading-[1.4] tracking-[0.04em] pl-2'>{order.order_tracking[0].name}</p>
                  </div>
                </div>
              </div>
            </section>
          </div >
          <div className='border-x-[1px] px-8 py-4 border-b-[1px] border-x-grey5 border-b-grey5'>
            {order.order_products.map((product, index) => (
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
                  Buy again
                </button>
              </section>
              {order.order_tracking[0].name === "Pending" &&
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
        </section >
      ))
      }
    </>
  )
}

export default Pending