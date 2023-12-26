import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function HandleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="duration-300 block absolute top-1/2 -translate-y-1/2 right-10 border-[0.0625rem] border-grey4 text-2xl rounded-full p-[10px] bg-white hover:border-black text-white cursor-pointer">
      <img src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702467610/Beana_icon/next_onuj0x.png" className="w-5" />
    </div>
  );
}

function HandlePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="duration-300 block absolute top-1/2 -translate-y-1/2 left-10 z-50 border-[0.0625rem] border-grey4 text-2xl rounded-full p-[10px] bg-white hover:border-black text-white cursor-pointer">
      <img src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1702469710/Beana_icon/left_minmwp.png" className="w-5" />
    </div>
  );
}

const RoomSlider = () => {

  var settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 3,
    nextArrow: <HandleNextArrow />,
    prevArrow: <HandlePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div>
      <Slider {...settings}>
        {rooms.map((room, index) => (
          <div className="pr-2" key={index}>
            <img className='w-full h-full object-cover ' src={room.url} />
            <a href="#" className="flex flex-row justify-between">
              <p className='text-xs mt-4 text-blackPrimary tracking-[0.9px]'> {room.name}</p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default RoomSlider