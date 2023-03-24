import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
const Navbar = (props) => {
  const { children } = props;
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Encuesta
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/encuestas"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Realizadas
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};
export default Navbar;
