import Hero from "./elements/Hero";
import styles from "./elements/Hero.module.scss";

import Skills from "./home/Skills";
import Collaboration from "./home/Collaboration";
import AboutIntro from "./about/AboutIntro";
import Clients from "./about/Clients";

export default function About({ actualLocationName }) {
  return (
    <>
      <Hero actualLocationName={actualLocationName}>
        <h2 className={styles.hero_title}>
          Let’s get to know the <span className="highlight">builder</span>{" "}
          behind the code.
        </h2>
        <p className="hero_subtitle">
          I’m Maciek — a creative front-end developer who blends aesthetics with
          engineering. Here’s how I work, who I collaborate with, and the tools
          I rely on to bring ideas to life.
        </p>
        {/* <a href="#projects" className="btn btn-primary">
          View My Work
        </a> */}
      </Hero>
      <AboutIntro />
      <Skills />
      <Clients />
      <Collaboration />
    </>
  );
}
