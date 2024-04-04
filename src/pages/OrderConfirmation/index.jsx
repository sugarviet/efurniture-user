import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import formattedCurrency from '@utils/formattedCurrency'
import formattedDate from '@utils/formattedDate'
import useNavigation from '../../hooks/useNavigation'
import useAuth from "@stores/useAuth";
import useGuestCart from '../../hooks/useGuestCart'

function OrderConfirmation() {

  const { accessToken } = useAuth();

  const { go_to_home } = useNavigation();

  const { clearCart } = useGuestCart();

  const location = useLocation();
  const orderConfirmation = location.state || { orderConfirmation: null };

  console.log(orderConfirmation)

  const orderProduct = orderConfirmation.order_products || [];
  const orderShipping = orderConfirmation.order_shipping || { orderShipping: null };
  const orderCheckout = orderConfirmation.order_checkout || { orderCheckout: null };

  useEffect(() => {
    if (orderConfirmation.orderConfirmation === null) {
      go_to_home();
    }
    if (orderConfirmation.guest) {
      clearCart();
    }
  }, [orderConfirmation]);

  return (
    <section className='min-h-screen mb-12'>
      <header className="flex flex-col md:grid md:grid-cols-[30%_70%] lg:grid lg:grid-cols-[54.167%_45.83%] bg-[#070628] pb-[1.25rem]">
        <div className="h-[90px] flex items-end pb-[1.25rem] md:pb-0">
          <Link to="/">
            <img src="./images/logo.png" className="ml-[30px] w-[140px]"></img>
          </Link>
        </div>
      </header>
      <main className='lg:px-14 xl:px-20 2xl:px-40 pt-12'>
        <section className='flex lg:flex-row flex-col '>
          <article className='lg:flex-1 w-full'>
            <div className='lg:pr-12 2xl:pr-28 px-4 sm:px-10 md:px-28 lg:px-0 mb-12 lg:mb-0'>
              <p className='font-HelveticaBold normal-case text-[30px] lg:text-[45px] tracking-[0.125em] leading-[1.2];'>Thank you for your purchase!</p>
              <p className='leading-[1.4] tracking-[0.04em] mt-5'>Your order will be processed within 24hours during working days. We will notify you by email once your order has been shipped.</p>
              <section className='pt-16'>
                <div className='relative top-1/2 left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] md:w-[500px] lg:w-[400px] xl:w-[400px] 2xl:w-[500px] h-[2px] bg-blackPrimary ' >
                  <div className='bg-blackPrimary top-[-15px] left-0 rounded-[50%] w-8 h-8 relative  after:absolute after:top-[6px] after:left-[12px] after:w-[7px] after:h-[14px] after:rotate-45 after:border-r-[2px] after:border-b-[2px]'>
                  </div>
                  <div className='absolute top-[-15px] left-1/2 -translate-x-1/2 border-[2px] border-black rounded-[50%] w-8 h-8 bg-white'></div>
                  <div className='absolute top-[-15px] right-0 border-[2px] border-black rounded-[50%] w-8 h-8 bg-white'></div>

                  <article className='absolute top-6 left-[-20px] flex flex-col items-center'>
                    <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Ordered</p>
                    <p className='text-[14px]  text-grey1 leading-[1.4] tracking-[0.04em]'>{formattedDate(orderConfirmation.createdAt)}</p>
                  </article>
                  <article className='absolute top-6 left-1/2 -translate-x-1/2 text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Ready to ship</article>
                  <article className='absolute top-6 right-[-46px] flex flex-col items-center'>
                    <p className='text-[14px] font-medium leading-[1.4] tracking-[0.04em]'>Expected delivery</p>
                    <p className='text-[14px]  text-grey1 leading-[1.4] tracking-[0.04em]'>Feb 22 - 26</p>
                  </article>
                </div>
                <div className='mt-28'>
                  <p className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em]'>Billing address</p>
                  <table className='mt-6 w-[70%]'>
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
                <div className='flex flex-row gap-4 max-w-[400px]'>
                  <Link to="/">
                    <button
                      className="furniture-button-white-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8"
                    >
                      Continue to shopping
                    </button>
                  </Link>
                  {accessToken &&
                    <Link to="/profile?tab=orders">
                      <button
                        className="furniture-button-black-hover w-full px-[25px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-8"
                      >
                        Tracking your order
                      </button>
                    </Link>
                  }
                </div>
              </section>
            </div>
          </article>

          <section className='flex-1 lg:px-0 px-4 sm:px-10 md:px-28'>
            <div className='w-full h-8 bg-[#E9DED6] rounded-2xl'>
            </div>
            <div className='w-full flex flex-col items-center px-3 relative'>
              <div className='w-full mt-[-15px] bg-[#F2F2F4] px-3 sm:px-12'>
                <div className='w-full pt-10'>
                  <p className='furniture-divided-bottom pb-8 font-HelveticaBold text-[32px] leading-[1.20833] tracking-[0.08em]'>Order summary</p>
                  <div className='grid grid-cols-3 divide-x-[2px] divide-grey4 mt-4 w-full pb-14'>
                    <article className='flex flex-col items-center justify-center'>
                      <p className=''>Date</p>
                      <p className='font-HelveticaBold text-[12px] sm:text-[14px]'>{formattedDate(orderConfirmation.createdAt)}</p>
                    </article>
                    <article className='flex flex-col items-center justify-center px-6'>
                      <p className=''>Order ID</p>
                      <p className='font-HelveticaBold text-[12px] sm:text-[14px]'>{orderConfirmation.order_code}</p>
                    </article>
                    <article className='flex flex-col items-center justify-center pl-2'>
                      <p className=''>Payment</p>
                      <p className='font-HelveticaBold text-[12px] sm:text-[14px]'>{orderConfirmation.payment_method}</p>
                    </article>
                  </div>
                </div>
                <div className={`furniture-divided-bottom pb-8 ${orderProduct.length > 2 ? "overflow-y-auto h-[320px]" : "overflow-y-hidden"}`}>
                  {orderProduct.map((product, index) => {
                    const onSale = product.product_id.regular_price - product.product_id.sale_price > 0;
                    return (
                      <div key={index} className='mt-8 flex flex-row justify-between'>
                        <div className='flex flex-row gap-5'>
                          <div className='w-16 h-16 sm:w-28 sm:h-28 rounded-xl px-2 py-2 bg-white'>
                            <img className='w-full h-full' src={product.product_id.thumbs}></img>
                          </div>
                          <div className='flex flex-col'>
                            <p className='font-HelveticaBold text-[11px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{product.name}</p>
                            <p className='pt-3 text-[11px] sm:text-[13px] leading-[1.4] tracking-[0.04em]'>Qty: {product.quantity}</p>
                          </div>
                        </div>
                        <div className='flex flex-col'>
                          {onSale &&
                            <p className='font-HelveticaRoman text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em] line-through text-grey2'>{formattedCurrency(product.product_id.regular_price)}</p>
                          }
                          <p className='font-HelveticaBold text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{formattedCurrency(product.product_id.sale_price)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className=''>
                  <ul className="pt-4 list-none furniture-divided-bottom pb-4">
                    <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                      <span className="">Subtotal </span>
                      <span>{formattedCurrency(orderCheckout.total)}</span>
                    </li>
                    <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
                      <span className="">Discount </span>
                      <span>
                        {orderConfirmation ?
                          formattedCurrency(orderCheckout.total - orderCheckout.final_total)
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
                      <span className='text-[15px] font-HelveticaBold'>
                        {formattedCurrency(orderCheckout.final_total)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <img src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709830699/eFurniture/Thi%E1%BA%BFt_k%E1%BA%BF_ch%C6%B0a_c%C3%B3_t%C3%AAn_1_twym7q.png'></img>
              <img className='absolute w-6 top-48 left-2' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709827911/eFurniture/half-circle_txlc64.png'></img>
              <img className='absolute w-6 top-48 right-2 rotate-180' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709827911/eFurniture/half-circle_txlc64.png'></img>
              <img className='absolute w-full px-10 top-48 left-0' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709828591/eFurniture/d_beitnd.png'></img>
            </div>

          </section>
        </section>
      </main>
    </section>
  )
}

export default OrderConfirmation