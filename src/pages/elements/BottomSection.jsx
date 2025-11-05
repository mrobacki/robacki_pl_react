import LogoMark from "../../components/footer/LogoMark";
import Logo from "../../components/header/Logo";
import Navigation from "../../components/sidebar/Navigation";
import styles from "./BottomSection.module.scss";

export default function Footer() {
  return (
    <section className={styles.bottom}>
      <div className="container">
        <div className="bottomTop">
          <div className="bottomTopLeft">
            <LogoMark />
            <Logo />
          </div>
          <Navigation showNavTooltip={true} />
        </div>
        <div className="bottomBottom">
          <span>privacy_link</span> <span>cookie-free website</span>
        </div>
      </div>
    </section>
  );
}
