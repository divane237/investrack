import Logo from './Logo';
import NavMenu from './NavMenu';

function NavBar() {
  return (
    <div className={'sticky top-0 z-50 backdrop-blur-lg'}>
      <div
        className={
          'z-2 mb-2 flex w-full items-center shadow-lg backdrop-blur-lg'
        }
      >
        <Logo />
        <NavMenu />
      </div>
    </div>
  );
}

export default NavBar;
