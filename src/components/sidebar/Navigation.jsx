import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/about">about</NavLink>
      </li>
      <li>
        <NavLink to="/contact">contact</NavLink>
      </li>
    </ul>
  );
}
