import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavIcon from "./NavIcon";

function NavBar() {
  return (
    <div className="flex items-center text-slate-100 bg-blue-600">
      <Logo />
      <NavIcon />
      {/* <Link className="h-full block bg-red-500">Hello</Link> */}
    </div>
  );
}

export default NavBar;
