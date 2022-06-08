// Styling
import styles from "./Navbar.module.css";

// NavLink import
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => ( isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => ( isActive ? styles.active : "")}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => ( isActive ? styles.active : "")}>
            Registro
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => ( isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
