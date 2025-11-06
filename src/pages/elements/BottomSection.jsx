import { Link } from "react-router-dom";
import LogoMark from "../../components/footer/LogoMark";
import Logo from "../../components/header/Logo";
import Navigation from "../../components/sidebar/Navigation";
import styles from "./BottomSection.module.scss";

export default function Footer() {
  return (
    <section className={styles.bottom}>
      <div className="container">
        <div className={styles.bottomTop}>
          <div className={styles.bottomTopLeft}>
            <LogoMark stylesFromOther={styles.bottomMark} />
            <Logo />
          </div>
          <Navigation
            showNavTooltip={true}
            stylesFromOther={styles.bottomNav}
          />
        </div>
        <div
          className={`${styles.bottomFooter} d-flex justify-content-between`}
        >
          <div>
            <span className={styles.copyright}>
              &copy; Copyright {new Date().getFullYear()}. Made by{" "}
              <Link to="/">Me :)</Link>
            </span>
          </div>
          <div className={styles.bottomSubnav}>
            <a href="">privacy_link</a> <span>cookie-free website</span>
          </div>
        </div>
      </div>
    </section>
  );
}
