import { useState } from "react"
import ProductDetails from "../ProductDetails"
import ProductFeatures from "../ProductFeatures"

const type = [
  {
    id: 1,
    title: "Details",
    key: "details"
  },
  {
    id: 2,
    title: "Features",
    key: "features",
  },
];

const tabsProduct = {
  details: {
    component: <ProductDetails />,
  },
  features: {
    component: <ProductFeatures />,
  },
};

function ProductInfo() {
  const [tab, setTab] = useState(type[0].key)

  const changeTab = (type) => {
    setTab(type);
  }
  return (
    <section>
      <div className='furniture-divided-bottom mb-8'>
        <div className='flex justify-center'>
          {type.map((type) => (
            <button key={type.id} onClick={() => changeTab(type.key)}
              className={`py-2 px-16 text-sm leading-[1.285] tracking-[0.04em]  ${type.key === tab ? "furniture-border-active text-blackPrimary" : "text-grey2 hover:text-blackPrimary"} `}
            >
              {type.title}
            </button>
          ))}
        </div>
      </div>
      <div className="h-full">
        {tabsProduct[tab].component}
      </div>
    </section>
  )
}

export default ProductInfo