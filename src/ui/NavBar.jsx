import Logo from './Logo';
import NavIcon from './NavIcon';

function NavBar() {
  return (
    <div className={'z-10 flex w-full items-center bg-stone-100 shadow-lg'}>
      <Logo />
      <NavIcon />
    </div>
  );
}

export default NavBar;
