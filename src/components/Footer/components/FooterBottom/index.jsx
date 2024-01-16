import React from 'react'

function FooterBottom() {
    return (
        <section className='px-10 sm:furniture-divided-top sm:pb-[0.5rem] flex flex-col items-center sm:flex-row justify-between'>
            <div className='sm:pt-[1.5rem]'>
                <div className='pt-[1.2rem] flex items-center gap-[14px]'>
                    <img className='h-[15px]' src='/images/vietnamflag.svg'></img>
                    <a className='text-[0.875rem] tracking-[0.04em]'>
                        VN (VND)
                    </a>
                </div>
            </div>
            <div className='pt-[3rem] sm:pt-[1.5rem] flex flex-col justify-center items-center gap-5'>
                <p className='text-[0.6875rem] text-grey2 tracking-[0.04em] text-center flex flex-row gap-2 cursor-pointer '>
                    <span className='underline hover:no-underline'>Cookie information</span>
                    <span className='underline hover:no-underline'>Legal & privacy</span>
                    <span className='underline hover:no-underline'>Terms & conditions</span>
                </p>
                <p className='text-[0.6875rem] text-grey2 tracking-[0.04em]'>All prices are recommended retail prices in Vietnamese DONG (₫) and include VAT.</p>
            </div>
            <div className='pt-[1.5rem] flex justify-center'>

            </div>
        </section>
    )
}

export default FooterBottom