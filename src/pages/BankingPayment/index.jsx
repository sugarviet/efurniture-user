import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import formattedCurrency from "@utils/formattedCurrency";
import { BANK_INFO } from '@constants/banKInfoConstants';
import { useFetchBanking } from '../../hooks/api-hooks';
import { get_banking_transaction, async_banking_transaction } from '../../api/bankingTransactionApi';
import { usePostWithBankingTransaction } from '../../hooks/api-hooks';
import { useQueryClient } from "@tanstack/react-query";
import useNavigation from '../../utils/useNavigation';

export default function BankingPayment() {

    const queryClient = useQueryClient();

    const { go_to_home } = useNavigation();

    const { data: dataTransaction } = useFetchBanking(
        get_banking_transaction()
    );

    const location = useLocation();
    const orderDetail = location.state || { orderDetail: null };

    const orderId = orderDetail._id;
    const totalPrice = 2000;

    const QR = `https://img.vietqr.io/image/${BANK_INFO.BANK_ID}-${BANK_INFO.ACCOUNT_NO}-${BANK_INFO.TEMPLATE}.png?amount=${totalPrice}&addInfo=${orderId}&accountName=${BANK_INFO.ACCOUNT_NAME}`


    const [openDetail, setOpenDetail] = useState(false);

    const handleOpenDetail = () => {
        setOpenDetail(!openDetail);
    }

    const { mutate: asyncTransaction } = usePostWithBankingTransaction(
        async_banking_transaction(),
        undefined,
        (data) => {
            queryClient.invalidateQueries(get_banking_transaction());
            console.log(data);
        },
        (error) => {
            console.log(error);
        }
    );

    useEffect(() => {
        const interval = setInterval(() => {
            asyncTransaction({ bank_acc_id: BANK_INFO.ACCOUNT_NO });
            if (dataTransaction && dataTransaction[0].amount >= totalPrice && dataTransaction[0].description.includes(orderId)) {
                go_to_home();
            }
        }, 1000 * 60);
        return () => clearInterval(interval);
    }, [dataTransaction]);

    return (
        <section className='bg-[#fffcff] min-h-screen font-HelveticaRoman'>
            <article className='fixed top-0 z-50 w-full px-12 flex flex-row justify-between lg:justify-normal items-center gap-6 py-8 bg-white shadow-lg'>
                <figure className='flex lg:flex-row flex-col items-center gap-4'>
                    <img className='w-20 lg:w-36' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709624643/eFurniture/vietqr_aepcie.png' />
                    <p className='lg:text-normal text-[0px] md:text-[12px]'> Hệ thống tạo mã QR CODE</p>
                </figure>
                <img className='w-36 lg:w-48' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709630799/eFurniture/logo_o37agc.png' />
            </article>
            <section className='px-6 lg:px-12 xl:px-28 2xl:px-56 py-10 flex flex-col lg:flex-row gap-8 pt-36'>
                <div className='basis-2/6 '>
                    <div className='hidden lg:inline-block border rounded shadow-md py-4 px-8 bg-white'>
                        <p className='text-lg font-semibold tracking-wider'>Thông tin đơn hàng</p>

                        <p className='pt-6 text-gray-500 font-medium]'>Nhà cung cấp</p>
                        <figure className='flex flex-row items-center gap-2 pt-3'>
                            <img className='w-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709630799/eFurniture/logo_o37agc.png' />
                            <p className='text-base font-bold'>Công ty cổ phần eFurniture</p>
                        </figure>

                        <div className='border-b w-full mt-5'></div>

                        <p className='pt-5 text-gray-500 font-medium]'>Mã đơn hàng</p>
                        <div className='flex flex-row gap-2 pt-2'>
                            <p className='text-base font-semibold tracking-wide'>DWDWDWD </p>
                        </div>

                        <div className='border-b w-full mt-5'></div>

                        <p className='pt-5 text-gray-500 font-medium]'>Mô tả</p>
                        <div className='flex flex-col pt-2'>
                            <p className='text-base font-semibold tracking-wide'>Khách hàng: {orderDetail.order_shipping.first_name} {orderDetail.order_shipping.last_name} </p>
                            <p className='text-base font-semibold tracking-wide'>Nội dung: Thanh toán giao dịch tại eFurniture </p>
                        </div>

                        <div className='border-b w-full mt-5'></div>

                        <p className='pt-5 text-gray-500 first-line:font-medium]'>Số tiền</p>
                        <div className='flex flex-row gap-2 pt-2'>
                            <p className='text-[#1E427E] font-HelveticaBold text-[22px] font-medium tracking-wide'>{formattedCurrency(orderDetail.order_checkout.final_total)} </p>
                        </div>
                    </div>
                    <div className='lg:hidden inline-block bg-[#f5f7f9] w-full'>
                        <div className='px-6 py-4'>
                            <p className='text-[14px] font-semibold tracking-wider'>Thanh toán đơn hàng 24030555201</p>
                            <div className='flex flex-row justify-between items-center'>
                                <p className='pt-4 text-[22px] font-HelveticaBold text-[#1E427E] font-medium tracking-wide'>{formattedCurrency(orderDetail.order_checkout.final_total)} </p>
                                <p
                                    onClick={() => handleOpenDetail(true)}
                                    className='text-[13px] text-[#0071a9] pt-3'>
                                    Xem chi tiết
                                </p>
                            </div>

                            <div className={`text-[0.875rem] pr-[1.25rem] ease-in-out duration-200 overflow-hidden max-h-0 ${openDetail ? "max-h-[300px]" : ""}`}>
                                <p className='pt-6 text-gray-500 font-medium]'>Nhà cung cấp</p>
                                <figure className='flex flex-row items-center gap-2 pt-3'>
                                    <img className='w-20' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1709630799/eFurniture/logo_o37agc.png' />
                                    <p className='text-base font-bold'>Công ty cổ phần eFurniture</p>
                                </figure>

                                <div className='border-b w-full mt-5'></div>

                                <p className='pt-5 text-gray-500 font-medium]'>Mô tả</p>
                                <div className='flex flex-col pt-2'>
                                    <p className='text-base font-semibold tracking-wide'>Khách hàng: {orderDetail.order_shipping.first_name} {orderDetail.order_shipping.last_name} </p>
                                    <p className='text-base font-semibold tracking-wide'>Nội dung: Thanh toán giao dịch tại eFurniture </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='max-w-[410px] rounded shadow-md py-3 px-8 bg-[#ffeff7] mt-5 '>
                        <p className='text-center text-[#dd3eaa] font-medium'>Giao dịch sẽ hết hạn sau:</p>
                        <div className='flex flex-row justify-center items-center gap-3 pt-3 pb-1'>
                            <div className='bg-[#f3d2e9] px-2 py-[10px] rounded-lg text-center'>
                                <p className='text-[#dd3eaa] font-bold'> 00</p>
                                <p className='text-sm text-[#dd3eaa]'>Giờ</p>
                            </div>
                            <div className='bg-[#f3d2e9] px-2 py-[10px] rounded-lg text-center'>
                                <p className='text-[#dd3eaa] font-bold'> 12</p>
                                <p className='text-sm text-[#dd3eaa]'>Phút</p>
                            </div>
                            <div className='bg-[#f3d2e9] px-2 py-[10px] rounded-lg text-center'>
                                <p className='text-[#dd3eaa] font-bold'> 12</p>
                                <p className='text-sm text-[#dd3eaa]'>Giây</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/">
                        <div className='max-w-[410px] text-center font-semibold text-[#dd3eaa] pt-4 cursor-pointer'>Quay về</div>
                    </Link>

                </div>
                <section className='basis-4/6 bg-[#1E427E] rounded-lg shadow-md h-[900px] w-full lg:w-[700px] flex flex-col items-center py-8 relative '>
                    <p className='text-[22px] text-white font-medium'>Quét mã QR để thanh toán</p>
                    <figure className='bg-white rounded-2xl w-[400px] md:w-[600px] lg:w-[500px] xl:w-[520px] h-[350px] md:h-[720px] mt-8 flex items-center justify-center relative'>
                        <img className='w-[70%] md:w-[80%] lg:w-full' src={QR} />
                        <img className='w-6 absolute top-6 right-6' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                        <img className='w-6 absolute top-6 left-6 scale-x-[-1]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                        <img className='w-6 absolute bottom-6 right-6 scale-y-[-1]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                        <img className='w-6 absolute bottom-6 left-6 rotate-180' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700225691/Beana_assets/corner_mta5le.png' />
                    </figure>
                    <img className='w-32 absolute top-6 left-12 opacity-25' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226033/Beana_assets/bg-dot_tjwh9s.png' />
                    <img className='w-32 absolute top-44 left-12 opacity-25 rotate-45' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226033/Beana_assets/bg-dot_tjwh9s.png' />
                    <img className='w-32 absolute top-16 left-48 opacity-25 ' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <img className='w-28 absolute top-[85px] left-[200px] opacity-25 ' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <img className='w-12 absolute top-[75px] right-[200px] opacity-25 rotate-45' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <img className='w-12 absolute top-[80px] right-[225px] opacity-25 rotate-[225deg]' src='https://res.cloudinary.com/dc4hafqoa/image/upload/v1700226350/Beana_assets/bg-halfcircle_ff6x4p.png' />
                    <p className='pt-7 text-white/90 max-w-[350px] text-center'>

                        Sử dụng <strong>App VietQR</strong> hoặc ứng dụng camera hỗ trợ QR code để quét mã</p>
                    <div className='flex flex-row pt-5'>
                        <p className='text-white/90'>Gặp khó khăn khi thanh toán? </p>
                        <p className='text-[#e6cb01] font-medium pl-1'>Xem hưỡng dẫn</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
