import CheckoutEdit from "@components/CheckoutEdit";


function Summary() {
  return (
    <section className='w-full lg:max-w-[43.75rem] text-[0.875rem] leading-[1.5] pb-[45px] tracking-[0.5px] pt-6 lg:pt-0'>

      <section className='pb-10'>
        <CheckoutEdit title="BILLING ADDRESS" activeTab="billing" />
        <p className='text-[13px] leading-[23.3px] tracking-[0.5px]'>Vu Truong Giang</p>
        <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>Phường Hiệp Phú, Quận 9</p>
        <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>Hem 58/21, Tan Lap 1</p>
        <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>0981890260</p>
        <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>giang.cat.luongg@gmail.com</p>
      </section>

      <section className="pb-6">
        <CheckoutEdit title="DELIVERY METHOD" activeTab="shipping" />
        <p className='text-[13px] leading-[23.3px] tracking-[0.5px]'>Store Contact</p>
      </section>

      <section className="pb-20">
        <CheckoutEdit title="PAYMENT METHOD" activeTab="payment" />
        <p className='text-[13px] leading-[23.3px] tracking-[0.5px] font-HelveticaBold'>Banking</p>
        <p className='text-[13px] leading-[23.3px] tracking-[0.5px] '>Pay 50% of the order total when placing the final order and the rest of the amount (50%) upon delivery. (you will receive an email when it is time to make the rest payment.
          Terms & Conditions and applicable sales tax will be attached when you receive your order from the store. The request for a quotation does not constitute any legally binding contract between you and the applicable store.</p>
      </section>

      <section className="border-b border-blackPrimary pb-[30px]">
        <p className="text-[18px] leading-[34.2px] tracking-[0.5px] font-HelveticaBold">Your comment:</p>
        <p className='text-[13px] leading-[23.3px] tracking-[0.5px]'>dwdwdwdwd</p>
      </section>

      <ul className="pt-8 list-none">
        <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
          <span className="">Subtotal </span>
          <span>₫ 64.770.000,00</span>
        </li>
        <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
          <span className="">Store Contact </span>
          <span>₫ 0,00</span>
        </li>
        <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
          <span className="">QUOTATION TOTAL </span>
          <span>₫ 64.770.000,00</span>
        </li>
        <li className="flex flex-row justify-between items-center mt-[-0.3125rem] pb-[0.25rem] text-[0.75rem] leading-[2] tracking-[0.05em] text-grey2">
          <span className="">VAT part of total </span>
          <span>₫ 5.888.182,00</span>
        </li>
      </ul>

      <ul className="pt-8 list-none">
        <li className="flex flex-row justify-between items-center font-HelveticaBold uppercase text-[16px] leading-[1.67] tracking-[0.08em]">
          <span className="flex flex-col items-baseline gap-[1.25rem]">
            total payment now
            <span className="font-HelveticaRoman text-grey2 text-[0.75rem] leading-[2] tracking-[0.05em]">
              THIS IS EVERYTHING YOU NEED TO PAY RIGHT NOW
            </span>
          </span>
          <span className="">₫ 64.770.000,00</span>
        </li>
      </ul>

      <section className="pt-12">
        <div className="flex flex-row gap-3 pb-4">
          <input className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
            type="checkbox"
          />
          <p>I agree to the <a href="#" className="underline">terms and conditions</a> of the shop</p>
        </div>
        <div className="text-[13px] leading-[24.7px] tracking-[0.5px] pb-4">
          <p className="pt-4">
            At BoConcept we do not have all our products in stock, as most of our furniture is made just for you and your home.
          </p>
          <p className="pt-4">
            Our normal delivery time is
          </p>
          <ul className="pt-4">
            <li>3 - 4 weeks for board furniture</li>
            <li>6 - 7 weeks for upholstery furniture</li>
          </ul>
        </div>
      </section>

      <button
        type="submit"
        className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-6"
      >
        purchase now
      </button>

    </section>
  )
}

export default Summary