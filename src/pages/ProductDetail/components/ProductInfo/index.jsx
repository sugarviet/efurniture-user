import { useState } from "react"

function ProductInfo() {
  const [tab, setTab] = useState(1)

  const changeTab = (num) => {
    setTab(num);
  }
  return (
    <section>
      <div className='furniture-divided-bottom'>
        <div className='flex justify-center'>
          <button onClick={() => changeTab(1)}
            className={`py-2 px-16 text-sm leading-[1.285] tracking-[0.04em]  ${tab === 1 ? "furniture-border-active text-blackPrimary" : "text-grey2 hover:text-blackPrimary"} `}
          >
            DETAILS
          </button>
          <button onClick={() => changeTab(2)}
            className={`py-2 px-16 text-sm leading-[1.285] tracking-[0.04em]  ${tab === 2 ? "furniture-border-active text-blackPrimary" : "text-grey2 hover:text-blackPrimary"} `}
          >
            FEATURES
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo