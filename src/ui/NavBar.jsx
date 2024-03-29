import Logo from './Logo';
import NavIcon from './NavIcon';

function NavBar() {
  return (
    <div className="h-15 flex items-center justify-between bg-stone-600 text-slate-100">
      <Logo />
      <NavIcon />
      {/* <Link className="h-full block bg-red-500">Hello</Link> */}
    </div>
  );
}

export default NavBar;
