import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className="mr-auto px-2 ms:px-3 ms:py-2 block">
      <p className="h-20 w-24 sm:h-24 sm:w-36 text-3xl font-bold flex flex-col pt-2">
        <span>💱🏦</span> <span>InvesTrack</span>
      </p>
    </NavLink>
  );
}

export default Logo;
