import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink
      to="/"
      className="items-centerS flex flex-col px-1 text-xl font-extrabold tracking-wider md:text-2xl"
    >
      <img src="../public/images/investracker.svg" />
    </NavLink>
  );
}

export default Logo;
