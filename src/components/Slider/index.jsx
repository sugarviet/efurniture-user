import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const Sliders = ({ slideToShow, slideToScroll, initialSlide, children }) => {

  var settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 500,
    slidesToShow: slideToShow,
    slidesToScroll: slideToScroll,
    initialSlide: initialSlide,
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
        {children}
      </Slider>
    </div>
  )
}

export default Sliders