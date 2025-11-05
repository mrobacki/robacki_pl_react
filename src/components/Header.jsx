import Logo from "./header/Logo";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
