// Styling
import styles from "./Navbar.module.css";

// NavLink import
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul class={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => ( isActive ? styles.active : "")}>
            Home
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
