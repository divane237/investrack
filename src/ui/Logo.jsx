import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className={'mr-auto block'}>
      <img
        src="../public/images/investracker.svg"
        className={'ml-2 mt-3 w-36'}
      />
    </NavLink>
  );
}

export default Logo;
