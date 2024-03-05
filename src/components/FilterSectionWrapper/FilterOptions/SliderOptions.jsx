import { Slider } from "antd";
import PropTypes from "prop-types";

function SliderOptions({ options, value, setValue }) {
  const { onChange, max, min, unit } = options;

  const handleOnChange = (value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <>
      <span className="text-gray-600 text-sm">{`${value[0]} ${unit} - ${value[1]} ${unit}`}</span>
      <Slider
        value={value}
        tooltip={{ open: false }}
        onChange={handleOnChange}
        max={max}
        min={min}
        range
      />
    </>
  );
}

export default SliderOptions;

SliderOptions.propTypes = {
  options: PropTypes.object,
  value: PropTypes.array,
  setValue: PropTypes.func,
};
