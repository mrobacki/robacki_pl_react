import heroStyles from "./elements/Hero.module.scss";
import styles from "./Projects.module.scss";
import Hero from "./elements/Hero";
import ProjectListItem from "./projects/ProjectListItem";

import { useParams } from "react-router-dom";
import ProjectItem from "./projects/ProjectItem";

const PROJECTS = [
  {
    projectName: "lekarzpomorze",
    projectTitle: "lekarzpomorze.pl",
    projectDesc: "projekt dla sieci przychodni lekarzpomorze.pl",
    projectStack: [
      "ux / ui",
      "figma",
      "cms",
      "html5",
      "css/scss",
      "bootstrap",
      "javascript",
      "webpack",
      "git",
    ],
  },
  {
    projectName: "ecommerce",
    projectTitle: "Sklep eCommerce",
    projectDesc: "Nowoczesny sklep internetowy",
    projectStack: ["html", "css", "react", "cms"],
  },
];

export default function Projects({ actualLocationName }) {
  const { projectName } = useParams();

  if (projectName) {
    const { projectTitle, projectDesc, projectStack } =
      PROJECTS.find((p) => p.projectName === projectName) || {};

    if (!projectTitle) {
      return <p>Projekt nie istnieje.</p>;
    }

    return (
      <>
        <ProjectItem
          projectName={projectName}
          projectTitle={projectTitle}
          projectDesc={projectDesc}
          projectStack={projectStack}
        />
      </>
    );
  }

  return (
    <>
      <Hero actualLocationName={actualLocationName}>
        <h2 className={heroStyles.hero_title}>
          Wybrane <span className="highlight">projekty</span>, nad którymi
          pracowałem.
        </h2>
        <p className={heroStyles.heroSubtitle}>
          Przez lata tworzyłem{" "}
          <span className="highlight3">strony, sklepy i interfejsy</span> dla
          firm z wielu branż — od małych biznesów po duże marki. Mam{" "}
          <span className="highlight">kilkanaście lat doświadczenia</span> w
          branży i na co dzień współpracuję z{" "}
          <span className="highlight2">
            agencjami, studiami projektowymi i freelancerami
          </span>
          , dostarczając{" "}
          <span className="highlight5">
            nowoczesne, dopracowane rozwiązania
          </span>{" "}
          webowe.
        </p>
      </Hero>
      <div className={styles.projectListItems}>
        {PROJECTS.map((p) => (
          <ProjectListItem
            key={p.projectName}
            projectTitle={p.projectTitle}
            projectDesc={p.projectDesc}
            projectName={p.projectName}
            projectStack={p.projectStack}
          />
        ))}
      </div>
    </>
  );
}
