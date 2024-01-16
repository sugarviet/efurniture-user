import { useParams } from "react-router-dom";
import NotFound from "@pages/NotFound";
import { handleCheckSlugRoom } from "@utils/handleCheckSlugRoom";

const RoomsByPlace = () => {
  const { slug } = useParams();

  if (!handleCheckSlugRoom(slug)) return <NotFound />;

  return <main>RoomsByPlace</main>;
};

export default RoomsByPlace;
