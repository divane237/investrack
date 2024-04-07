import { Outlet } from 'react-router';
import Footer from './Footer';
import NavBar from './NavBar';

function AppLayout() {
  return (
    <div className={''}>
      <NavBar />

      <main className={''}>
        <Outlet />
      </main>
      <Footer>Divane Footer</Footer>
    </div>
  );
}

export default AppLayout;
