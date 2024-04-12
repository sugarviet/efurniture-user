import Sliders from "@components/Slider";
import Proptypes from "prop-types";
import { withFetchData } from "@hocs/withFetchData";
import { get_all_room } from "../../../../api/roomApi";

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

const RoomSlider = ({ data }) => {

  const length = data.length;

  console.log(length);
  const slideToShowLookup = {
    [length <= 5]: length,
    [length > 5]: length - 2,
    [length > 10]: length - 4
  };
  const slideToShow = slideToShowLookup[true];

  return (
    <div>
      <Sliders initialSlide={0} slideToScroll={1} slideToShow={slideToShow}>
        {data.map((room, index) => (
          <a className="pr-2" key={index} href={`/room/${data.slug}`}>
            <img className='w-full h-full object-cover ' src={room.thumb} />
            <div className="flex flex-row justify-between">
              <p className='text-xs mt-4 text-blackPrimary tracking-[0.9px]'> {room.name}</p>
            </div>
          </a>
        ))}
      </Sliders>
    </div>
  )
}

RoomSlider.propTypes = {
  data: Proptypes.array,
};

export default withFetchData(RoomSlider, get_all_room)