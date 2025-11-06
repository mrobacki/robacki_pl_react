import { useRef, useCallback } from "react";
import styles from "./Hero.module.scss";
import ScrollMark from "./ScrollMark";

export default function Hero({ actualLocationName, children }) {
  const sectionRef = useRef(null);

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    const el = sectionRef.current;
    if (!el) return;
    const container = el.closest("[data-scroll-container]");
    const height = el.offsetHeight;
    if (container && "scrollBy" in container) {
      container.scrollBy({ top: height, left: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: height, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <section
      className={`${styles.hero} hero h100 d-flex direction-column justify-content-center align-items-center`}
      ref={sectionRef}
    >
      <div className="container">
        <h1 className={styles.hero_micro}>{`<${actualLocationName}>`}</h1>
        {children}
      </div>
      <a href="#" onClick={handleScroll} aria-label="Scroll down" role="button">
        <ScrollMark className={styles.scrollMark} />
      </a>
    </section>
  );
}
