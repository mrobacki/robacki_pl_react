import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import LogoMark from "./footer/LogoMark";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <LogoMark />
      </Link>
      <Breadcrumbs />
      <span className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()}. Made by{" "}
        <Link to="/">Me :)</Link>
      </span>
      <Button to="/contact" className={styles.button}>
        let’s-get-in-touch
      </Button>
    </footer>
  );
}
