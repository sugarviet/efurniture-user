import ProductColorProperty from "../ProductColorProperty";

function ProductVariation({ variation, currentVariation, onUpdateVariation }) {
  const { name, properties } = variation;

  const onSelectProperty = (property_id) => {
    onUpdateVariation(property_id);
  };

  return (
    <div>
      <div className="text-black font-bold uppercase font-HelveticaBold leading-[1.1875] tracking-[0.08em] pb-2">
        {name}
      </div>
      <ul className="pb-4 flex">
        {properties.map((property, i) => {
          return (
            <li key={i}>
              <ProductColorProperty
                property={property}
                selectProperty={currentVariation.property_id}
                onSelectProperty={onSelectProperty}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductVariation;
