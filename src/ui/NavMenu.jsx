import { NavLink } from 'react-router-dom';
// Menu icon heigh h-8 w-10
// login icon w-10
const NAVLINK_STYLE =
  'max-sm:hidden hover:bg-stone-300 hover:py-3 md:text-base lg:text-lg font-semibold px-2';

function NavMenu() {
  return (
    <div className={''}>
      {/* Mobile icons nav bar */}
      <ul className={'flex w-full items-center font-medium sm:hidden'}>
        <li className={'block px-2 hover:bg-stone-300 hover:py-2.5'}>
          <NavLink>
            <span>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <g>
                  <circle cx="4" cy="4" r="4" fill="#282323" />
                  <circle cx="24" cy="24" r="4" fill="#282323" />
                  <circle cx="14" cy="24" r="4" fill="#282323" />
                  <circle cx="4" cy="24" r="4" fill="#282323" />
                  <circle cx="24" cy="14" r="4" fill="#282323" />
                  <circle cx="14" cy="14" r="4" fill="#282323" />
                  <circle cx="4" cy="14" r="4" fill="#282323" />
                  <circle cx="24" cy="4" r="4" fill="#282323" />
                  <circle cx="14" cy="4" r="4" fill="#282323" />
                </g>
                <defs>
                  <clipPath id="clip0_7_2">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </NavLink>
        </li>
        {/*  */}
        <li className={'px-2 hover:bg-stone-300 hover:py-3'}>
          <NavLink to="login" className={''}>
            {' '}
            <svg width="30" height="24" viewBox="0 0 35 27" fill="none">
              <g>
                <path
                  d="M21 5C21 7.04617 18.9399 9 16 9C13.0601 9 11 7.04617 11 5C11 2.95383 13.0601 1 16 1C18.9399 1 21 2.95383 21 5Z"
                  stroke="#282323"
                  strokeWidth="2"
                />
                <path
                  d="M27.4497 15.6757C28.1698 16.4176 28.8122 17.2253 29.3712 18.0853C30.607 19.9866 30.281 21.8728 29.0363 23.3665C27.753 24.9066 25.4889 26 23 26H16.5L10 26C7.51113 26 5.24697 24.9066 3.96367 23.3665C2.71905 21.8728 2.39304 19.9866 3.62883 18.0853C4.18785 17.2253 4.8302 16.4176 5.55032 15.6757C8.45959 12.6782 12.3989 11 16.5 11C20.6011 11 24.5404 12.6782 27.4497 15.6757Z"
                  stroke="#282323"
                  strokeWidth="2"
                />
                <path
                  d="M34 19.5C34 23.03 30.9278 26 27 26C23.0722 26 20 23.03 20 19.5C20 15.97 23.0722 13 27 13C30.9278 13 34 15.97 34 19.5Z"
                  fill="#FCFCFC"
                  stroke="#282323"
                  strokeWidth="2"
                />
                <path
                  d="M33 20L28 17.1132V22.8868L33 20ZM20 20.5L28.5 20.5V19.5L20 19.5V20.5Z"
                  fill="#282323"
                />
              </g>
            </svg>
          </NavLink>
        </li>
      </ul>

      {/* DESKTOP display */}
      <ul className={'flex w-full items-center'}>
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

        <li
          className={
            'px-2 font-semibold hover:bg-stone-300 hover:py-3 max-sm:hidden md:text-base lg:text-lg'
          }
        >
          <NavLink to="login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
