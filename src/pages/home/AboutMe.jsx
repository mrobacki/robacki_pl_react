import Box from "../elements/Box";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={`${styles.aboutMe} h100 `}>
      <h1>Your web developer</h1>
      <Box boxTitle={"about-me"} itemClassName="aboutIntro">
        tresc opisu
      </Box>
      <Box boxTitle={"portrait"} itemClassName="aboutPortrait">
        tresc opisu
      </Box>
      <Box boxTitle={"where-i-work"} itemClassName="aboutLocation">
        tresc opisuaa
      </Box>
      <Box boxTitle={"skills"} itemClassName="aboutSkills">
        tresc opisuaa
      </Box>
    </section>
  );
}
