import formattedCurrency from "@utils/formattedCurrency";
import AppModal from "../../../../components/ui/AppModal";
import FeedbackForm from "../../../../components/FeedbackForm";
import { useState } from "react";
import ProductVariation from "../../../ProductDetail/components/ProductVariation";

function ProductOrderBriefInfo({ product }) {
  console.log(product);
  const [modelOpened, setModalOpened] = useState(false);

  const onSale = product.product_id.regular_price - product.product_id.sale_price > 0;



  const subPrice = product.variation.reduce(
    (total, cur) => total + cur.sub_price,
    0
  );

  return (
    <div>
      <section className="mt-8 flex flex-row justify-between border-b border-grey5 pb-8">
        <div className="flex flex-row gap-5">
          <figure className="w-16 h-16 sm:w-28 sm:h-28 rounded-xl border-grey5 border-[1px] px-2 py-2 bg-white">
            <img className="w-full h-full" src={product.product_id.thumbs}></img>
          </figure>
          <article className="flex flex-row py-1">
            <div className="flex flex-col justify-between">
              <p className="font-HelveticaBold text-[11px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]">
                {product.product_id.name}
              </p>
              <p className="pt-3 text-[11px] sm:text-[13px] leading-[1.4] tracking-[0.04em]">
                Qty: {product.quantity}
              </p>
              <div>
                {product.product_id.variation.map((item, i) => {
                  return (
                    <ProductVariation
                      key={i}
                      currentVariation={item}
                      variation={item}
                      className="text-[10px] w-6 h-6 pt-[6px]"
                    />
                  );
                })}
              </div>
            </div>
            <div className='flex flex-col pl-24'>
              {onSale &&
                <p className='font-HelveticaRoman text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em] line-through text-grey2'>{formattedCurrency(product.product_id.regular_price)}</p>
              }
              <p className='font-HelveticaBold text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]'>{formattedCurrency(product.product_id.sale_price + subPrice)}</p>
            </div>
          </article>
        </div>
        <div className="self-center">
          <button
            type="button"
            onClick={() => setModalOpened(true)}
            className="furniture-button-white-hover p-4 text-regular text-xs"
          >
            Feedback
          </button>
        </div>
      </section>

      <AppModal isOpen={modelOpened} onClose={() => setModalOpened(false)}>
        <FeedbackForm
          onCancel={() => setModalOpened(false)}
          id={product.product_id._id}
        />
      </AppModal>
    </div>
  );
}

export default ProductOrderBriefInfo;
