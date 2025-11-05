import styles from "./Hero.module.scss";
import ScrollMark from "./ScrollMark";

export default function Hero({ actualLocationName, children }) {
  return (
    <section
      className={`${styles.hero} hero h100 d-flex direction-column justify-content-center align-items-center`}
    >
      <div className="container">
        <h1 className={styles.hero_micro}>{`<${actualLocationName}>`}</h1>
        {children}
      </div>
      <a href="#">
        <ScrollMark className={styles.scrollMark} />
      </a>
    </section>
  );
}
