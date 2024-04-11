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
      <Footer></Footer>
    </div>
  );
}
// Nothing

export default AppLayout;
