import Sliders from "@components/Slider";

const rooms = [
    {
        url: 'https://p3.aprimocdn.net/boconcept/45d4c7c0-0db5-45c6-8eaa-ae6d00c8b096/AW22%20087_WEB-Headline4Images-350x430.jpg',
        name: "Living rooms",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/5e94ee46-f686-445c-b048-ad44001799b8/1685526__WEB-Headline4Images-350x430.jpg',
        name: "Dining rooms",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/3f84ddfb-39f9-4369-836e-ad4400179679/1685511__WEB-Headline4Images-350x430.jpg',
        name: "Bedrooms",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/c85b1793-7dab-4086-81ce-ad440017987f/1685523__WEB-Headline4Images-350x430.jpg',
        name: "Home offices",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/4eb90b24-b379-48d7-a178-ae6d00c28e6b/AW22%20028_WEB-Headline4Images-350x430.jpg',
        name: "Small spaces",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/a66b988a-4179-44f2-9b55-ae3900cee6dd/1460359_WEB-Headline4Images-350x430.jpg',
        name: "Outdoor spaces",
    },
    {
        url: 'https://p3.aprimocdn.net/boconcept/a66b988a-4179-44f2-9b55-ae3900cee6dd/1460359_WEB-Headline4Images-350x430.jpg',
        name: "Outdoor spaces",
    },
];

const RoomSlider = () => {

  return (
    <div>
      <Sliders initialSlide={0} slideToScroll={3} slideToShow={6}>
        {rooms.map((room, index) => (
          <div className="pr-2" key={index}>
            <img className='w-full h-full object-cover ' src={room.url} />
            <a href="#" className="flex flex-row justify-between">
              <p className='text-xs mt-4 text-blackPrimary tracking-[0.9px]'> {room.name}</p>
            </a>
          </div>
        ))}
      </Sliders>
    </div>
  )
}

export default RoomSlider