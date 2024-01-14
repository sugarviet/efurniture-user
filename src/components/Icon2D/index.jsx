import PropTypes from "prop-types";

const ICON_TYPE = {
  heart_solid: {
    default_props: {
      viewBox: "0 0 37 32",
    },
    path: "M27 0a9.97 9.97 0 0 0-6.704 2.595A9.97 9.97 0 0 0 18.5 4.749a10 10 0 0 0-1.796-2.155A9.974 9.974 0 0 0 10 0C4.486 0 0 4.486 0 10c0 3.722 1.158 6.66 3.871 9.825c3.942 4.6 13.919 11.62 14.342 11.917a.496.496 0 0 0 .574 0c.423-.297 10.4-7.317 14.343-11.917C35.842 16.66 37 13.722 37 10c0-5.514-4.486-10-10-10m5.371 19.175C28.876 23.251 20.191 29.516 18.5 30.72c-1.691-1.204-10.376-7.469-13.87-11.545C2.085 16.206 1 13.462 1 10c0-4.963 4.038-9 9-9c2.227 0 4.37.829 6.032 2.335a9 9 0 0 1 2.02 2.664c.17.34.726.34.896 0a8.984 8.984 0 0 1 2.02-2.663A8.968 8.968 0 0 1 27 1c4.962 0 9 4.037 9 9c0 3.462-1.085 6.206-3.629 9.175",
  },
  heart_fill: {
    default_props: {
      viewBox: "0 0 1200 1200",
    },
    path: "M1176.629 250.347c54.502 168.401 8.89 339.761-87.232 468.872c-63.446 87.553-139.273 163.012-216.796 228.983c-71.322 66.39-230.933 197.753-273.241 201.402c-37.394-7.148-79.353-49.433-109.039-71.196C323.503 951.599 143.93 797.388 52.878 628.779c-76.34-161.871-76.48-362.086 42.333-486.189C249.271 3.702 481.533 30.841 599.359 175.944c31.644-41.05 70.556-73.335 116.737-96.853c187.213-74.728 381.972 1.418 460.533 171.256",
  },
};

function Icon2D(props) {
  const { name, onClick } = props;

  const { default_props, path } = ICON_TYPE[name];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      fill="black"
      {...default_props}
      {...props}
    >
      <path d={path}></path>
    </svg>
  );
}

Icon2D.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Icon2D;
