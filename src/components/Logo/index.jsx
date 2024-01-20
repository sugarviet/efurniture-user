import { Link } from "react-router-dom";
import { PATH } from "../../router";

function Logo({ className }) {
  return (
    <Link to={PATH.home}>
      <span className="sr-only">E-Furniture</span>
      <img className={className} src="/images/logo.svg" alt="" />
    </Link>
  );
}

export default Logo;
