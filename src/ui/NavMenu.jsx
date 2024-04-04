import { NavLink } from 'react-router-dom';

const NAVLINK_STYLE =
  'max-sm:hidden hover:bg-stone-300 hover:py-4 text-xl font-semibold hover:bg-blue-900 px-2 ';

function NavMenu() {
  return (
    <div className={''}>
      <ul className={'flex w-full items-center font-medium sm:hidden'}>
        {/* Mobile icons nav bar */}
        <li className={'block px-2 hover:bg-stone-300 hover:py-2.5'}>
          <NavLink className={''}>
            <img src="../public/images/MenuIcon.svg" className={'h-8 w-10'} />
          </NavLink>
        </li>
        {/*  */}
        <li className={'px-2 hover:bg-stone-300 hover:py-2.5'}>
          <NavLink to="login" className={''}>
            {' '}
            <img src="../public/images/loginIcon.svg" className={'w-10'} />
          </NavLink>
        </li>
      </ul>

      <ul className={'flex w-full items-center'}>
        {/* DESKTOP display */}
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
    </div>
  );
}

export default NavMenu;
