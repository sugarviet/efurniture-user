import RoomleConfiguratorApi from "@roomle/embedding-lib/roomle-configurator-api.es.min.js";
import { useEffect, useRef } from "react";

function RoomleConfiguration3D({ model_id }) {
  const planer = useRef(null);

  useEffect(() => {
    const initRoomle = async () => {
      const options = {
        id: model_id,
        elements: {
          bottom_bar: false,
        },
      };

      await RoomleConfiguratorApi.createPlanner(
        "demoConfigurator",
        planer.current,
        options
      );
    };

    initRoomle();
  }, []);

  return <div className="w-full h-full" ref={planer}></div>;
}

export default RoomleConfiguration3D;
