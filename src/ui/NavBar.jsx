import Logo from './Logo';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    <div
      className={'z-10 mb-4 flex w-full items-center bg-stone-100 shadow-lg'}
    >
      <Logo />
      <NavMenu />
    </div>
  );
}

export default NavBar;
