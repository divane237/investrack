import { Outlet } from 'react-router';
import Footer from './Footer';
import NavBar from './NavBar';

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
