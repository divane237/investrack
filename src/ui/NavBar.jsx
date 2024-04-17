import Logo from './Logo';

import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';

const NAVLINK_STYLE =
  'max-sm:hidden py-2.5 hover:bg-stone-300 hover:py-2.5 md:text-base lg:text-lg px-2 inline-block transition-all duration-300 ease-in-out  font-medium';

function NavBar() {
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
          {/*  */}

          {/* Mobile Menu */}
          {mobileMenu && (
            <div
              className={`absolute left-0 top-0 z-10 min-h-[100vh] w-full bg-stone-100 transition-all duration-1000 ease-in-out md:w-2/3`}
            >
              <div className="mb-1 flex border-b-2 py-2 shadow-md">
                <Logo />
                <button
                  className={
                    'px-4 py-2 text-2xl font-semibold text-red-500 hover:cursor-pointer hover:text-[1.6rem]'
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

              <div className={'absolute bottom-0 w-full'}>
                <Footer />
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
