import Proptypes from "prop-types";

function CategoryTitle({ name, url, slug }) {
  return (
    <a href={`/products/${slug}`}>
      <img className="w-full h-[500px] object-cover" src={url} />
      <div className="flex flex-row justify-between group">
        <p className="text-xs mt-4 text-blackPrimary tracking-[0.9px]">
          {" "}
          {name}
        </p>
      </div>
    </a>
  );
}

CategoryTitle.propTypes = {
  name: Proptypes.string,
  url: Proptypes.string,
  slug: Proptypes.string,
};

export default CategoryTitle;
