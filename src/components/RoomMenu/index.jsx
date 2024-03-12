import { Link } from "react-router-dom";
import CategoryTitle from "../CategoryTitle";
import { PATH } from "../../router";
import { withFetchData } from "../../hocs/withFetchData";
import { get_all_room } from "../../api/roomApi";

const ROOMS = [
  {
    url: "https://p3.aprimocdn.net/boconcept/45d4c7c0-0db5-45c6-8eaa-ae6d00c8b096/AW22%20087_WEB-Headline4Images-350x430.jpg",
    name: "Living rooms",
    slug: "living-rooms",
  },
  {
    url: "https://p3.aprimocdn.net/boconcept/5e94ee46-f686-445c-b048-ad44001799b8/1685526__WEB-Headline4Images-350x430.jpg",
    name: "Dining rooms",
    slug: "dining-rooms",
  },
  {
    url: "https://p3.aprimocdn.net/boconcept/3f84ddfb-39f9-4369-836e-ad4400179679/1685511__WEB-Headline4Images-350x430.jpg",
    name: "Bed rooms",
    slug: "bed-rooms",
  },
  {
    url: "https://p3.aprimocdn.net/boconcept/c85b1793-7dab-4086-81ce-ad440017987f/1685523__WEB-Headline4Images-350x430.jpg",
    name: "Home offices",
    slug: "home-offices",
  },
  {
    url: "https://p3.aprimocdn.net/boconcept/4eb90b24-b379-48d7-a178-ae6d00c28e6b/AW22%20028_WEB-Headline4Images-350x430.jpg",
    name: "Small spaces",
    slug: "small-spaces",
  },
  {
    url: "https://p3.aprimocdn.net/boconcept/a66b988a-4179-44f2-9b55-ae3900cee6dd/1460359_WEB-Headline4Images-350x430.jpg",
    name: "Outdoor spaces",
    slug: "outdoor-spaces",
  },
];

function RoomMenu({ data }) {
  return (
    <div className="py-2 lg:py-12 lg:px-6 bg-white grid grid-cols-2 lg:grid-cols-6 gap-2 gap-y-6 lg:gap-1">
      {data.map((room, index) => {
        const { thumb, name, slug } = room;
        return (
          <Link
            to={`room/${slug}`}
            className="pb-6"
            key={`${name} + ${index}`}
          >
            <CategoryTitle url={thumb} name={name} />
          </Link>
        );
      })}
    </div>
  );
}

export default withFetchData(RoomMenu, get_all_room);
