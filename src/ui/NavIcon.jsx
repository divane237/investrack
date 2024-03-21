import { Link, NavLink } from "react-router-dom";

const NAVLINK_STYLE =
  "md:text-2xl font-bold text-md max-sm:hidden md:font-bold hover:bg-blue-900 px-8 py-9 active:bg-blue-900";

function NavIcon() {
  return (
    <div className="flex sm:items-center min-h-full px-1">
      <Link className="sm:hidden hover:bg-blue-900">
        <img src="../public/images/menuIcon.png" />
      </Link>
      <NavLink to="cryptocurrencies" className={NAVLINK_STYLE}>
        Cryptocurrencies
      </NavLink>
      <NavLink to="stocks" className={NAVLINK_STYLE}>
        Stocks
      </NavLink>
      <NavLink to="portfolio" className={NAVLINK_STYLE}>
        Portfolio
      </NavLink>
    </div>
  );
}

export default NavIcon;
