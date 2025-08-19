import { NavLink, Outlet } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div>
          <h1>Utility App</h1>
        </div>
        <nav className={styles.nav}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/todos"}>Todo</NavLink>
          <NavLink to="/notes">Notes</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
