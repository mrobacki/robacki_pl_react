import Hero from "./elements/Hero";
import styles from "./elements/Hero.module.scss";
import AboutMe from "./home/AboutMe";
import Skills from "./home/Skills";
import Collaboration from "./home/Collaboration";

export default function Home({ actualLocationName }) {
  return (
    <>
      <Hero actualLocationName={actualLocationName}>
        <h2 className={styles.hero_title}>
          <span className="hero_label">Cześć, jestem Maciek</span> —{" "}
          <span className="highlight">kreatywny</span> frontend developer.
        </h2>
        <p className={styles.heroSubtitle}>
          Zamieniam pomysły w wyjątkowe doświadczenia cyfrowe. Łączę design z
          technologią i optymalizacją. Tworzę szybkie, estetyczne i skuteczne
          strony internetowe.
        </p>
        {/* <a href="#projects" className="btn btn-primary">
          View My Work
        </a> */}
      </Hero>
      <AboutMe />
      <Skills showLines={true} />
      <Collaboration />
    </>
  );
}
