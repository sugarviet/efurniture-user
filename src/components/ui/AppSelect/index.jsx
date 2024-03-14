import Proptypes from "prop-types";

const AppSelect = ({ data, onChange, value, name }) => {

  const updateData = [{ label: `Choose ${name}`, value: "" }, ...data];
  return (
    <div className="relative">
      <select
        className="block appearance-none w-full bg-white border border-black hover:border-gray-500 px-4 py-3.5 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={onChange}
        value={value}
      >
        {updateData.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        ></svg>
      </div>
    </div>
  );
};

AppSelect.propTypes = {
  data: Proptypes.array,
  onChange: Proptypes.func,
};

AppSelect.defaultProps = {
  data: [],
};

export default AppSelect;
