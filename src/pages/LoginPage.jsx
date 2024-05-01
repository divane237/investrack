import { NavLink, Outlet } from 'react-router-dom';

const activeLinkStyling = 'w-1/2 rounded-full py-2 text-center';

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(./images/BgLogin5.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100% 100%`,
        backgroundPosition: `fixed`,
      }}
      className="relative h-[100dvh] w-full"
    >
      <div className="absolute left-1/2 mt-12 flex w-[300px] -translate-x-1/2 justify-around rounded-full bg-stone-400 text-white sm:w-[500px]">
        <NavLink
          to="login"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? 'pending' : '',
              isActive
                ? `active ${activeLinkStyling} bg-blue-400`
                : `${activeLinkStyling}`,
              isTransitioning ? 'transitioning' : '',
            ].join(' ')
          }
        >
          Login
        </NavLink>
        <NavLink
          to="signup"
          // className={activeLinkStyling}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? 'pending' : '',
              isActive
                ? `active ${activeLinkStyling} bg-blue-400`
                : `${activeLinkStyling}`,
              isTransitioning ? 'transitioning' : '',
            ].join(' ')
          }
        >
          Signup
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default LoginPage;
