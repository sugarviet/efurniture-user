import React from 'react'

const features = [
  {
    id: 1,
    title: 'ORGANIC DESIGN',
    feature: 'Santiago is all about curves with an oval or round-shaped tabletop for a contemporary organic look and feel.'
  },
  {
    id: 2,
    title: 'CERAMIC TABLETOP',
    feature: 'Available in a variety of colours, Santiago is crafted with a durable ceramic tabletop for a natural expression.'
  },
  {
    id: 3,
    title: 'PILLAR-SHAPED LEGS',
    feature: 'The Santiago dining table is finished with pillar-shaped legs with bevelled surfaces that demand attention in any space.'
  },
  {
    id: 4,
    title: 'DIFFERENT SIZES',
    feature: 'Designed to fit a variety of dining rooms, the Santiago dining table is available in two different sizes.'
  },
]
function ProductFeatures() {
  return (
    <section className="h-full">
      {features.map((feature) => (
        <div key={feature.id} className='pb-8'>
          <p className="text-base text-blackPrimary font-HelveticaBold leading-[1.1875] tracking-[0.2px] uppercase pb-2">{feature.title}</p>
          <p className="text-sm text-blackPrimary leading-[2] tracking-[0.2px]">
            {feature.feature}
          </p>
        </div>
      ))}
    </section>
  )
}

export default ProductFeatures