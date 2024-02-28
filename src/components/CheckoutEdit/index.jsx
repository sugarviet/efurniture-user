import React from 'react'
import useSwitchTab from '../../pages/Checkout/hooks/useSwitchTab';
import PropTypes from "prop-types";

function CheckoutEdit({ title, activeTab }) {

    const { handleChangeTab } = useSwitchTab();
    return (
        <div className='flex flex-row justify-between items-center'>
            <h2 className='font-HelveticaBold text-[1.125rem] leading-[1.20833] tracking-[0.08em] '>{title}</h2>
            <button className='flex flex-row gap-3 items-center'>
                <p className='font-HelveticaBold text-[0.875rem] leading-[1.2] tracking-[0.5px]'>
                    Edit
                </p>
                <div onClick={() => handleChangeTab(activeTab)} className='border-black border-[0.5px] rounded-[50%] p-[7px]'>
                    <img className='w-3 ' src='./images/edit.svg' />
                </div>
            </button>
        </div>
    )
}

CheckoutEdit.propTypes = {
    title: PropTypes.string,
    activeTab: PropTypes.string,
};

export default CheckoutEdit