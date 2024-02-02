import { useState } from 'react';

function FurnitureQuantityOption() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="flex flex-row items-center">
            <button className={`px-[0.9375rem] text-[1.2rem] font-HelveticaBold ${quantity <= 1 && "opacity-[0.2]"}`} onClick={handleDecrease}>-</button>
            <div className=''>
                <input
                    min={1}
                    defaultValue={1}
                    value={quantity}
                    className='furniture-input-hide-arrow outline-none focus:border-b-[0.5px] focus:border-[#191915] text-center w-[2.5rem] h-[1.5em] text-[18px] text-[#000] font-medium font-HelveticaBold'
                    onChange={value => setQuantity(value)} />
            </div>
            <button className="px-[0.9375rem] text-[1.2rem] font-HelveticaBold" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default FurnitureQuantityOption;
