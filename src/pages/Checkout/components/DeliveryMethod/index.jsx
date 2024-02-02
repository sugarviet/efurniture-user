import React from 'react'

function DeliveryMethod() {
    return (
        <section className='py-10 font-HelveticaRoman'>
            <h3 className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] font-HelveticaBold pb-2'>DELIVERY METHOD </h3>
            <div className='max-w-[43.75rem] mb-[1.5rem] relative'>
                <input type='checkbox' className='furniture-checkbox-circle absolute top-[1.625rem] left-[1.125rem] z-30 rounded-[50%] border-[0.0625rem] border-[#5a7468] checked:bg-[#5a7468]' />
                <div className='absolute top-1 bg-grey6 border-[0.0625rem] border-grey4 border-b-[0.0625rem] border-b-[#5a7468] shadow-deliveryCard'>
                    <div className='grid grid-cols-[1fr_auto] py-[1.5rem] pr-[1.5rem] pl-[4rem]'>
                        <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em]'>
                            <h4 className='font-HelveticaBold uppercase'>STORE CONTACT</h4>
                            <p className='text-[11px] lg:text-[0.875rem] leading-[1.4] tracking-[0.04em] mt-[0.5rem]'>
                                Your product selection will be send to the BoConcept store nearest your geographical location. You will receive a quotation, including applicable discounts, sales tax and shipping cost
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeliveryMethod