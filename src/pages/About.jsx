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
          Za <span className="highlight">kodem</span> stoi człowiek — poznaj go.
        </h2>
        <p className={styles.heroSubtitle}>
          Zobacz, jak pracuję, z kim współtworzę i z jakich narzędzi korzystam,
          by ożywiać pomysły. Razem możemy stworzyć coś, co naprawdę działa i
          wygląda świetnie.
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
