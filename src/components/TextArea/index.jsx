import { classNames } from "../../utils/classNames";

function TextArea({ onChange, value, className }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={classNames(
        "h-16 w-full text-md p-2 border-black border-[1px]",
        className
      )}
    />
  );
}

export default TextArea;
