import Breadcrumbs from "./Breadcrumbs";
import Button from "./Button";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Breadcrumbs />
      <span className={styles.copyright}>
        &copy; {new Date().getFullYear()} Maciek Robacki. All rights reserved.
      </span>
      <Button>let’s-get-in-touch</Button>
    </footer>
  );
}
