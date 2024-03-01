import AppRow from "@components/AppRow";
import { withFetchData } from "../../../../hocs/withFetchData";
import { get_room_detail } from "../../../../api/roomApi";
import PropTypes from "prop-types";

const RoomHero = ({data}) => {
  const {thumb, description, name} = data;
 
  return (
    <section className="mb-12">
        <AppRow
          gutter={4}
          spans={[
            { xs: 18, sm: 18, md: 18, lg: 18, xl: 14 },
            { xs: 6, sm: 6, md: 6, lg: 6, xl: 10 },
          ]}
        >
          <div className="relative">
            <img
              src={thumb}
              alt={name}
              className="h-[30rem] w-[55rem] fade-in-from-bottom"
            />
            <div className="block bg-[#f4f4f4] absolute top-0 w-[1100px] h-[530px] text-transparent -z-10"></div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col gap-4 px-10 fade-in-from-bottom">
              <h1 className="text-3xl font-bold">{name}</h1>
              <p className="w-96 block text-base font-normal">
                {description}
              </p>
            </div>
          </div>
        </AppRow>
      </section>
  )
}

RoomHero.propTypes = {
  data: PropTypes.array,
};


export default withFetchData(RoomHero, get_room_detail);
