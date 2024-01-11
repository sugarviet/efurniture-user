import React from 'react'

function LoginInputForm() {
  return (
    <form>
      <section className="w-full mb-5 max-w-[43.75rem]">
        <label className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]">Email Address</label>
        <input className="furniture-input w-full h-[3rem]" type="email" required />
      </section>
      <section className="w-full mb-5 max-w-[43.75rem]">
        <label className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]">Password</label>
        <input className="furniture-input w-full h-[3rem]" type="email" required />
      </section>
      <section className="flex flex-row justify-between mb-4">
        <div className="flex flex-row gap-2 ">
          <input className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
            type="checkbox"
          />
          <p>Remember Me</p>
        </div>
        <a href="#" className="float-right text-[0.75em] underline">Forgot password?</a>
      </section>
      <button className="furniture-button-black-hover px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]">LOGIN</button>
    </form>
  )
}

export default LoginInputForm