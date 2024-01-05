import RoomleSdk from "@roomle/web-sdk";
import { useEffect, useState } from "react";
import { useRef } from "react";

function RoomleModel3D() {
  const [params, setParams] = useState(null);
  const [configuratorApi, setConfiguratorApi] = useState(null);
  const scene = useRef();

  console.log(params);

  const updateParam = () => {
    configuratorApi.setParameter(
      params[0],
      "sitzfeldt:Leder_Pur_beige_2",
      true
    );
  };

  useEffect(() => {
    RoomleSdk.setGlobalInitData({
      customApiUrl: "https://api.roomle.com/v2",
    });

    const initializeRoomle = async () => {
      const configurator = await RoomleSdk.getConfigurator();
      configurator.boot();

      const configuratorApiClone = await configurator.getApi();
      setConfiguratorApi(configuratorApiClone);
      await configuratorApiClone.init(scene.current);

      configuratorApiClone.callbacks.onUpdateParameters = async (
        parameters
      ) => {
        setParams(parameters);
      };

      await configuratorApiClone.loadConfigurableItemById(
        "sitzfeldt:Chuck_L_Sofa_Rechts"
      );
    };

    initializeRoomle();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 400, height: 400 }} ref={scene}></div>
      <button style={{ width: 100, height: 100 }} onClick={updateParam}>
        Button
      </button>
    </div>
  );
}

export default RoomleModel3D;
