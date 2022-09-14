import { Outlet } from "react-router-dom";

import Navbar from "../components/NavBar";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <section>
        <Outlet />
      </section>

      <footer>
        Tienda de electronica ficticia que se hace real por medio de la
        programacion
      </footer>
    </div>
  );
};

export default Layout;
