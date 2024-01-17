import React from 'react'

function SocialList() {
    return (
        <div className='flex flex-row justify-between items-center min-w-[16.25rem] sm:min-w-0 sm:max-w-[16.25rem]'>
            <a href=''>
                <img className='w-[1rem]' src='/images/facebook.svg'></img>
            </a>
            <a href=''>
                <img className='w-[1rem]' src='/images/instagram.svg'></img>
            </a>
            <a href=''>
                <img className='w-[1rem]' src='/images/pinterest.svg'></img>
            </a>
            <a href=''>
                <img className='w-[1rem]' src='/images/youtube.svg'></img>
            </a>
        </div>
    )
}

export default SocialList