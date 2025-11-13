import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import LogoMark from "./footer/LogoMark";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LogoMark stylesFromOther={styles.markFooter} />

      <Breadcrumbs />
      <span className={styles.copyright}>
        <a href="https://github.com/mrobacki/">Github</a>
      </span>
      <Button to="/kontakt">porozmawiajmy</Button>
    </footer>
  );
}
