import Box from "../elements/Box";
import Button from "../../components/Button";
import styles from "./Skills.module.scss";
import { useState, useEffect } from "react";

export default function Skills({ showLines }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // pobiera wszystkie pliki graficzne z folderu src/assets/skills
    const images = import.meta.glob(
      "/src/assets/stack/*.{png,jpg,jpeg,svg,gif}",
      {
        eager: true,
      }
    );

    // konwertujemy obiekt { path: module } -> tablicę ścieżek
    const loadedImages = Object.values(images).map((img) => img.default);
    setSkills(loadedImages);
  }, []);

  return (
    <section className={`${styles.skills} space-bottom`}>
      <Box
        boxTitle={"moj-codzienny-stack"}
        showLines={showLines}
        itemClassName="boxSkills"
      >
        <div className={styles.skillsGrid}>
          {skills.map((src, i) => (
            <div className={styles.skillItem} key={i}>
              <img src={src} alt={`skill-${i}`} className="skill-icon" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            bigSize={true}
            to="/kontakt"
            additionalStyles={styles.buttonToContact}
          >
            porozmawiajmy-o-współpracy
          </Button>
        </div>
      </Box>
    </section>
  );
}
