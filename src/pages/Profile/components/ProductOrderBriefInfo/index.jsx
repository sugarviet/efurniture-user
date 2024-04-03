import formattedCurrency from "@utils/formattedCurrency";
import AppModal from "../../../../components/ui/AppModal";
import FeedbackForm from "../../../../components/FeedbackForm";
import { useState } from "react";

function ProductOrderBriefInfo({ product }) {
  const [modelOpened, setModalOpened] = useState(false);
  console.log(product);
  return (
    <div>
      <section className="mt-8 flex flex-row justify-between border-b border-grey5 pb-8">
        <div className="flex flex-row gap-5">
          <figure className="w-16 h-16 sm:w-28 sm:h-28 rounded-xl border-grey5 border-[1px] px-2 py-2 bg-white">
            <img className="w-full h-full" src={product.product_id.thumbs} />
          </figure>
          <article className="flex flex-col justify-between">
            <div className="mr-4">
              <p className="font-HelveticaBold text-lg sm:text-xl leading-[1.20833] tracking-[0.08em]">
                {product.product_id.name}
              </p>
              <p className="font-Helvetica text-md line-clamp-1 sm:text-sm leading-[1.20833] tracking-[0.08em]">
                {product.product_id.description}
              </p>
              <p className="pt-3 text-[11px] sm:text-[13px] leading-[1.4] tracking-[0.04em]">
                Qty: {product.quantity}
              </p>
            </div>
          </article>
        </div>

        <div className="self-end">
          <button
            type="button"
            onClick={() => setModalOpened(true)}
            className="furniture-button-white-hover p-4 text-regular text-xs mb-6"
          >
            Feedback
          </button>
          <div className="flex flex-col items-end">
            <p className="font-HelveticaRoman text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em] line-through text-grey2">
              {formattedCurrency(product.product_id.regular_price)}
            </p>
            <p className="font-HelveticaBold text-[13px] sm:text-[16px] leading-[1.20833] tracking-[0.08em]">
              {formattedCurrency(product.product_id.sale_price)}
            </p>
          </div>
        </div>
      </section>

      <AppModal isOpen={modelOpened} onClose={() => setModalOpened(false)}>
        <FeedbackForm
          onCancel={() => setModalOpened(false)}
          id={product.product_id}
        />
      </AppModal>
    </div>
  );
}

export default ProductOrderBriefInfo;
