import Logo from './Logo';
import NavIcon from './NavIcon';

function NavBar() {
  return (
    <div className={'mb-2 flex items-center bg-stone-100 shadow-lg'}>
      <Logo />
      <NavIcon />
    </div>
  );
}

export default NavBar;
