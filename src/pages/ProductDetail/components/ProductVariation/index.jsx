import ProductColorProperty from "../ProductColorProperty";

function ProductVariation({ variation, currentVariation, onUpdateVariation, className }) {
  const { name, properties } = variation;

  const onSelectProperty = (property_id) => {
    onUpdateVariation(property_id);
  };

  return (
    <div className="flex flex-row gap-6 items-center">
      <div className={`text-black font-bold uppercase font-HelveticaBold leading-[1.1875] tracking-[0.08em] ${className}`}>
        {name}
      </div>
      <ul className="flex">
        {properties.map((property, i) => {
          return (
            <li key={i}>
              <ProductColorProperty
                property={property}
                selectProperty={currentVariation.property_id}
                onSelectProperty={onSelectProperty}
                className={className}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductVariation;
