import Hero from "./elements/Hero";
import styles from "./elements/Hero.module.scss";
import AboutMe from "./home/AboutMe";
import Collaboration from "./home/Collaboration";

export default function Home({ actualLocationName }) {
  return (
    <>
      <Hero actualLocationName={actualLocationName}>
        <h2 className={styles.hero_title}>
          <span className="hero_label">Hi, I’m Maciek. </span>A{" "}
          <span className="highlight">creative developer</span> crafting
          meaningful digital experiences.
        </h2>
        <p className="hero_subtitle">
          I merge design, technology, and performance into beautiful,
          fast-loading websites.
        </p>
        {/* <a href="#projects" className="btn btn-primary">
          View My Work
        </a> */}
      </Hero>
      <AboutMe />
      <Collaboration />
    </>
  );
}
