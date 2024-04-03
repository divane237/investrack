import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

function AppLayout() {
  return (
    <div>
      <NavBar />

      <main>
        <Outlet />
      </main>
      <Footer>Divane Footer</Footer>
    </div>
  );
}

export default AppLayout;
