import { NavLink, Outlet } from 'react-router-dom';
import Login from '../ui/Login';
import Signup from '../ui/Signup';

function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(./images/BgLogin5.jpg)`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100% 100%`,
        backgroundPosition: `fixed`,
      }}
      className="relative h-[100vh] w-full"
    >
      <div className="absolute left-1/2 -translate-x-1/2 text-white">
        <button>Login</button>
        <button>Signup</button>
      </div>

      <Outlet />
    </div>
  );
}

export default LoginPage;
