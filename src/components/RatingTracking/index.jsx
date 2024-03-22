import { StarFilled } from "@ant-design/icons";
import { Slider } from "antd";

function RatingTracking({ label, maxValue, value, rate }) {
  return (
    <section className="grid grid-cols-4 w-1/2 items-center gap-1">
      <div>
        <span>{rate}</span>
        <StarFilled className="h-4 mr-2" />
        <span>{label}</span>
      </div>
      <Slider className="col-span-2" value={value} min={0} max={maxValue} />
      <span>{`(${(value / maxValue).toFixed(1) * 100}%)`}</span>
    </section>
  );
}

export default RatingTracking;
