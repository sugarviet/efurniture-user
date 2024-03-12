import React from 'react'

function RadioModal({ children, name, value, onChange, checked }) {

    return (

        <section className='max-w-[43.75rem] mb-[1.5rem] relative'>
            <label>
                <input
                    type='radio'
                    className='furniture-checkbox-circle absolute top-[1.625rem] left-[1.125rem] z-30 rounded-[50%] border-[0.0625rem] border-[#5a7468] checked:bg-[#5a7468]'
                    value={value}
                    onChange={onChange}
                    name={name}
                    checked={checked}
                />
                <div className={`w-full absolute top-1 border-[0.0625rem] border-grey4 duration-200 ${checked ? "bg-grey6 border-b-[0.0625rem] border-b-[#5a7468] shadow-deliveryCard" : "bg-white "} `}>
                    <div className='grid grid-cols-[1fr_auto] py-[1.5rem] pr-[1.5rem] pl-[4rem]'>
                        {children}
                    </div>
                </div>
            </label>
        </section>
    )
}

export default RadioModal