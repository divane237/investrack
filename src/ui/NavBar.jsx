import Logo from './Logo';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    <div className={'z-2 mb-2 flex w-full items-center shadow-lg'}>
      <Logo />
      <NavMenu />
    </div>
  );
}

export default NavBar;
