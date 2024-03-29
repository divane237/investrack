import { NavLink } from 'react-router-dom';

const NAVLINK_STYLE =
  'max-sm:hidden text-xl font-semibold hover:bg-blue-900 text-center px-2 py-[1.2rem]';
// const NAVLINK_STYLE = 'max-sm:bg-red-700 bg-green-700';

function NavIcon() {
  return (
    <ul className="mr-2 flex-row  sm:flex sm:items-center">
      {/* Mobile icons nav bar */}
      <li className="flex items-center gap-x-4">
        <NavLink className="hover:bg-green-900 sm:hidden">
          <img src="../public/images/menuIcon.png" className="w-16" />
        </NavLink>
        <NavLink to="login" className="sm:hidden">
          {' '}
          <img src="../public/images/loginIcon.png" className="w-6" />
        </NavLink>
      </li>

      <li>
        <NavLink to="cryptocurrencies" className={NAVLINK_STYLE}>
          Cryptocurrencies
        </NavLink>
      </li>
      <li>
        <NavLink to="stocks" className={NAVLINK_STYLE}>
          Stocks
        </NavLink>
      </li>
      <li>
        <NavLink to="portfolio" className={NAVLINK_STYLE}>
          Portfolio
        </NavLink>
      </li>

      <li className={`${NAVLINK_STYLE} text-green-600`}>
        <NavLink to="login" className="max-sm:hidden">
          Login
        </NavLink>
      </li>
    </ul>
  );
}

export default NavIcon;
