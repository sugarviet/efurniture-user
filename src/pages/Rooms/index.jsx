import RoomCard from "@components/RoomCard";
import HorizontalList from "@components/HorizontalList";
import AppRow from "@components/AppRow";

const Rooms = () => {
  return (
    <main>
      <AppRow gutter={4} spans={[
        { xs: 0, sm: 0, md: 5, lg: 4, xl: 3 }, 
        { xs: 24, sm: 24, md: 19, lg: 20, xl: 21 },
      ]}>
        <div className="bg-green-300 h-full hidden md:block w-44 overflow-hidden xl:w-full">

           Mốt để filter của Bảo vô
        </div>

        <HorizontalList
          gutters={10}
          data={[1, 2, 3, 4, 5, 6, 7]}
          dataItem={RoomCard}
          xxl={3}
          xl={2}
          lg={2}
          md={2}
          sm={1}
          xs={1}
        />
      </AppRow>
    </main>
  );
};

export default Rooms;
