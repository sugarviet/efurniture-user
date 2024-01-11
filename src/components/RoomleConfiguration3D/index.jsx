import RoomleConfiguratorApi from "@roomle/embedding-lib/roomle-configurator-api.es.min.js";
import { useEffect, useRef } from "react";

function RoomleConfiguration3D() {
  const planer = useRef(null);

  useEffect(() => {
    const initRoomle = async () => {
      const options = {
        id: "sitzfeldt:Chuck_L_Sofa_Rechts",
        elements: {
          bottom_bar: false,
        },
      };

      const plan = await RoomleConfiguratorApi.createPlanner(
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
