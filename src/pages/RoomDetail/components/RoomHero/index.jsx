import AppRow from "@components/AppRow";
import { withFetchData } from "@hocs/withFetchData";
import { get_room_details } from "@api/roomApi";
import PropTypes from "prop-types";

const RoomHero = ({ data }) => {
  const { name = "LIVING ROOMS", description = "" } = data;
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
            src="https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf5420a23/images/2080000/2082535.jpg?sw=2000"
            alt=""
            className="h-3/4 fade-in-from-bottom"
          />
          <div className="block bg-[#f4f4f4] absolute top-0 w-[1100px] h-[530px] text-transparent -z-10"></div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col gap-4 px-10 fade-in-from-bottom">
            <h1 className="text-3xl font-bold">EXPLORE THE LOOK</h1>
            <p className="w-96 block text-base font-normal">
              Biophilic design is about purposefully incorporating nature into
              our interior spaces, so we can connect to the outdoors. In this
              look, our interior stylists have combined the Kingston dining
              table with the Princeton dining chair in green Skagen fabric,
              integrating the trend into the dining space with plants and a
              dried floral arrangement.
            </p>
          </div>
        </div>
      </AppRow>
    </section>
  );
};

RoomHero.propTypes = {
  data: PropTypes.array,
};

export default RoomHero;
