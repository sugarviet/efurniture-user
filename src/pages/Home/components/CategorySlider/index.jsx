import Sliders from "@components/Slider";

const categories = [
    {
        url: 'https://p3.aprimocdn.net/boconcept/b62110c2-c789-42e6-bbfb-ae6d00c34d34/AW22%20080_WEB-Headline4Images-350x430.jpg',
        name: "Sofas",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/5cc31260-5520-435f-93f7-ad4300b89498/1112714__WEB-Headline4Images-350x430.jpg',
        name: "Chairs",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/a5fe4575-9222-4691-a6b8-ae6d00c340be/AW22%20078_WEB-Headline4Images-350x430.jpg',
        name: "Tables",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/84506db0-dc09-4650-8b09-ae8900bbea9a/AW22%20172%20Vignetter_WEB-Headline4Images-350x430.jpg',
        name: "Armchairs",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/63503a4b-222d-4f40-907b-ae6d00c35d24/AW22%20088_WEB-Headline4Images-350x430.jpg',
        name: "Storage",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/3f84ddfb-39f9-4369-836e-ad4400179679/1685511__WEB-Headline4Images-350x430.jpg',
        name: "Beds",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/36281a06-c829-4dff-9e84-ae3700fbb8b2/1460362_WEB-Headline4Images-350x430.jpg',
        name: "Outdoor and garden furniture",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/9cbf4cef-7db3-41cb-960b-ae2900e9b4c7/2014027_WEB-Headline4Images-350x430.jpg',
        name: "Lamps",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/32486fda-30c3-4571-b912-afab00e899fb/AW23%20Accessories%2002_WEB-Headline4Images-350x430.jpg',
        name: "Rugs",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/f9e13d74-b263-4cd3-b3d1-ad430170c7cc/1482320__WEB-Headline4Images-350x430.jpg',
        name: "Accessoriestyj",
    },
];

const CategorySlider = () => {

  return (
    <div>
      <Sliders initialSlide={0} slideToScroll={6} slideToShow={6}>
        {categories.map((category, index) => (
          <div className="pr-2" key={index}>
            <img className='w-full h-full object-cover ' src={category.url} />
            <a href="#" className="flex flex-row justify-between group">
              <p className='text-xs mt-4 text-blackPrimary tracking-[0.9px]'> {category.name}</p>
            </a>
          </div>
        ))}
      </Sliders>
    </div>
  )
}

export default CategorySlider