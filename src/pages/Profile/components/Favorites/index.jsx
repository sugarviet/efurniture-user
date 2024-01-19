import HorizontalList from "@components/HorizontalList";
import RoomCard from "@components/RoomCard";

const Favorites = () => {
  return (
    <section className="fade-in-from-bottom">
      <HorizontalList
        data={[1, 2, 3, 4, 5, 6]}
        dataItem={RoomCard}
        xxl={3}
        xl={2}
        lg={2}
        md={2}
        sm={1}
        xs={1}
      />
    </section>
  );
};

export default Favorites;
