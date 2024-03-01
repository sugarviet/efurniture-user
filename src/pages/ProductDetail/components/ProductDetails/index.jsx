function ProductDetails({ data }) {
  const { attributes } = data;

  const attributeKeys = Object.keys(attributes.attributeType);

  return (
    <section className="h-full">
      <div className={`overflow-hidden transition-[height] duration-300`}>
        <div>
          <p className="text-base text-blackPrimary font-HelveticaBold leading-[1.1875] tracking-[0.08em] uppercase pb-2">
            DIMENSIONS AND WEIGHT
          </p>
          <ul className="columns-2 pb-8">
            {attributeKeys.map((key) => {
              return (
                <li
                  key={key}
                  className="text-sm text-blackPrimary leading-[2] tracking-[0.2px]"
                >
                  <span className="text-grey1">{key}:</span>{" "}
                  {attributes.attributeType[key]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
