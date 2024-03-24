import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink
      to="/"
      className="items-centerS flex flex-col px-1 text-xl font-extrabold tracking-wider md:text-2xl"
    >
      <span>💱🏦</span> <span>InvesTrack</span>
    </NavLink>
  );
}

export default Logo;
