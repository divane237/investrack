import Logo from './Logo';

import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';

const NAVLINK_STYLE =
  'max-sm:hidden py-2.5 hover:bg-stone-300 hover:py-2.5 md:text-base lg:text-lg px-2 inline-block transition-all duration-300 ease-in-out  font-medium';

function NavBar() {
  // Disble the background content once redux is installed
  // in Global state.
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleMobileMenuToggle() {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  }

  function removeMobileMenu() {
    setMobileMenu(false);
  }

  return (
    <div className={'sticky top-0 z-50 backdrop-blur-lg'}>
      <div
        className={
          'z-2 mb-2 flex w-full items-center shadow-lg backdrop-blur-lg'
        }
      >
        {<Logo />}

        <div>
          {/* Mobile icons nav bar */}
          <ul className={'flex w-full items-center font-medium sm:hidden'}>
            <li>
              <a
                onClick={handleMobileMenuToggle}
                className={
                  'block px-2 py-3 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-stone-300 hover:py-3'
                }
              >
                <span>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
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
              </a>
            </li>
            {/*  */}
            <li>
              <NavLink
                to="login"
                className={
                  'block px-2 py-3 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-stone-300 hover:py-[0.82rem]'
                }
              >
                {' '}
                <svg width="35" height="24" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </li>
          </ul>
          {/*  */}

          {/* Mobile Menu */}
          {mobileMenu && (
            <div
              className={`animate-mobile-menu absolute left-0 top-0 z-10 min-h-[100vh] w-full bg-stone-100 transition-all duration-1000 ease-in-out md:w-2/3`}
            >
              <div className="mb-1 flex border-b-2 py-2 shadow-md">
                <Logo />
                <button
                  className={
                    'px-4 py-2 text-2xl font-semibold text-red-500 hover:cursor-pointer hover:text-[1.8rem]'
                  }
                  onClick={removeMobileMenu}
                >
                  X
                </button>
              </div>
              <ul className={''}>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    to="home"
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                    to="cryptocurrencies"
                  >
                    Cryptocurrencies
                  </NavLink>
                </li>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                    to="stocks"
                  >
                    Stocks
                  </NavLink>
                </li>
                <li onClick={removeMobileMenu}>
                  <NavLink
                    className={
                      'block py-4 text-center text-base font-semibold transition-all duration-300 ease-in-out hover:bg-stone-300 hover:text-xl'
                    }
                    to="portfolio"
                  >
                    Portfolio
                  </NavLink>
                </li>
              </ul>
              {/*  */}
              <div
                className={'mt-1 flex items-center justify-center gap-3 px-4'}
              >
                <select className={'px-2 py-2 hover:cursor-pointer'}>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
                <button
                  className={
                    'rounded-full px-2 py-2 text-3xl transition-all duration-500 ease-in-out hover:bg-stone-300'
                  }
                >
                  <span className={'text-yellow-300'}>☀</span>/
                  <span className={'text-black'}>🌑</span>
                </button>
              </div>
            </div>
          )}

          {/* DESKTOP display */}

          <ul className={'flex w-full items-center'}>
            <li>
              <NavLink to="Home" className={NAVLINK_STYLE}>
                Home
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

            <li>
              <NavLink to="login" className={NAVLINK_STYLE}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
