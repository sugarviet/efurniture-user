import {useToggleCheckoutBottomBar} from '@hooks/useToggleBottomBar';

function ToggleCheckoutButton() {
    const { isOpen, closeCheckoutBottomBar, toggleCheckoutBottomBar } = useToggleCheckoutBottomBar();

    const handleClick = () => {
        if (isOpen) {
            closeCheckoutBottomBar();
        } else {
            toggleCheckoutBottomBar();
        }
    };

    return (
        <button onClick={() => handleClick()} className='bg-white furniture-divided-bottom w-full flex flex-row justify-between text-[0.75rem] px-[1.25rem] py-[1rem] mb-16'>
            <span className='font-HelveticaBold'>Order Summary</span>
            <div className='flex flex-row gap-2 items-center'>
                <span>{isOpen ? "Close" : "View"}</span>
                <img className={`w-4 h-2 ${!isOpen && "rotate-180"}`} src='./images/chevron-down.svg' />
            </div>
        </button>
    );
}

export default ToggleCheckoutButton;
