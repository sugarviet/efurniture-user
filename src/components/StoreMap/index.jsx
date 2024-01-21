import { Fragment, useEffect, useRef } from "react";
import { classNames } from "../../utils/classNames";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9iaXRhODkiLCJhIjoiY2xyajRxMGVnMDVuajJrcW41aGFtYzh5YSJ9.1A258o2oKsYxbYY8Qfx2yQ";

function StoreMap({ className, center }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nobita89/clrn549cu004j01o3h8f38nmr",
      center: center,
      zoom: 9,
    });

    return () => map.remove();
  }, []);

  return (
    <Fragment>
      <div
        className={classNames("w-full h-full", className)}
        ref={mapContainer}
      ></div>
    </Fragment>
  );
}

export default StoreMap;
