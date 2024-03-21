import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default AppLayout;
