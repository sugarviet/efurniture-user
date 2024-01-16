import useScrollToTop from '@hooks/useScrollToTop';

function FooterTop() {

    const scrollToTop = useScrollToTop();

    return (
        <section className='furniture-divided-bottom flex flex-col gap-8 sm:flex-row sm:justify-between items-center pb-8'>
            <img className='h-[60px] sm:h-[80px]' src='/images/logo.svg'></img>
            <button onClick={scrollToTop} className='text-[0.6875rem] tracking-[0.16em] leading-[1.27] flex items-center gap-[6px]'>
                <span className='furniture-link '>BACK TO TOP</span>
                <img className='rotate-[-90deg]' src='/images/arrow-right-long.svg'></img>
            </button>
        </section>
    )
}

export default FooterTop