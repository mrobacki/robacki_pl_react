import styles from "./ProjectItem.module.scss";

export default function ProjectItem({
  projectName,
  projectTitle,
  projectDesc,
  projectStack,
}) {
  return (
    <>
      <div className={styles.projectHeader}>
        <h1>{projectTitle}</h1>
        <p>{projectDesc}</p>
        <div className={styles.tech}>
          {projectStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className={styles.projectThumb}>
        <img
          src={`/projects/thumbs/${projectName}.webp`}
          alt={projectTitle}
          className={styles.projectItemThumb}
        />
      </div>

      {/* tutaj dopiszesz galerię, opis, case study itd */}
    </>
  );
}
