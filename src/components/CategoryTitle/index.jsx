import { Fragment } from "react";

function CategoryTitle({ url, name }) {
  return (
    <Fragment>
      <img className="w-full h-full object-cover" src={url} />
      <div href="#" className="flex flex-row justify-between group">
        <p className="text-xs mt-4 text-blackPrimary tracking-[0.9px]">
          {" "}
          {name}
        </p>
      </div>
    </Fragment>
  );
}

export default CategoryTitle;
