import styles from "./ProjectItem.module.scss";

export default function ProjectItem({
  projectName,
  projectTitle,
  projectDesc,
  projectStack,
  projectYear,
  projectClient,
  projectServices,
  projectEngagement,
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

      <div className={styles.projectDetails}>
        <div className={styles.projectDetailsDesc}>
          <div className={styles.detail}>
            <strong>Klient:</strong>
            <p className="highlight5">{projectClient}</p>
          </div>
          <div className={styles.detail}>
            <strong>Zaangażowanie w projekt:</strong>
            <p className="highlight5">{projectEngagement}</p>
          </div>
        </div>
        <div className={styles.projectDetailsServices}>
          <div className={styles.detail}>
            <strong>Rok wdrożenia:</strong>
            <p className="highlight5">{projectYear}</p>
          </div>
          <div className={styles.detail}>
            <strong>Usługi:</strong>
            <ul className={`${styles.services} highlight5`}>
              {projectServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.fullImage}>
        <img
          src={`/projects/${projectName}.webp`}
          alt={projectTitle}
          className={styles.projectItemFullImage}
        />
      </div>
    </>
  );
}
