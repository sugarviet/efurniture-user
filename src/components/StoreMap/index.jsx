import { Fragment } from "react";
import { classNames } from "../../utils/classNames";

function StoreMap({ className }) {
  return (
    <Fragment>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6099415310487!2d106.80730270936196!3d10.84113285795479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1705773532306!5m2!1svi!2s"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={classNames("w-full h-full", className)}
      ></iframe>
    </Fragment>
  );
}

export default StoreMap;
