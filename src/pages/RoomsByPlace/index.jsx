import { useParams } from "react-router-dom";
import useCheckRightSlug from "./hooks/useCheckRightSlug";
import NotFound from "@pages/NotFound";

const RoomsByPlace = () => {
  const { slug } = useParams();
  const { handleCheckRoom } = useCheckRightSlug();

  if (!handleCheckRoom(slug)) return <NotFound />;

  return <main>RoomsByPlace</main>;
};

export default RoomsByPlace;
