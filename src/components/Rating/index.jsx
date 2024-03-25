import { RATING_VALUES } from "../../constants/enum";
import { classNames } from "../../utils/classNames";

function Rating({ onChange, value, className }) {
  return (
    <section className={classNames("grid grid-cols-5 gap-4", className)}>
      {RATING_VALUES.map((item, i) => {
        const { icon, label, rate } = item;
        return (
          <button
            type="button"
            onClick={() => onChange(rate)}
            key={i}
            className={classNames(
              "col-span-1 h-24 flex flex-col items-center justify-center border-gray-500 border-[1px]",
              value === rate
                ? "shadow-couponCard shadow-gray-900"
                : "opacity-50"
            )}
          >
            <img className="w-8 h-8 my-1" src={icon} />
            <span className="text-lg my-1">{label}</span>
          </button>
        );
      })}
    </section>
  );
}

export default Rating;