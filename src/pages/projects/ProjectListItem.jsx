import { Link } from "react-router-dom";
import styles from "./ProjectListItem.module.scss";

export default function ProjectListItem({
  projectTitle,
  projectDesc,
  projectName,
  projectStack = [],
}) {
  const techStack = projectStack;
  return (
    <Link to={projectName} className={styles.linkContainer}>
      <div className={styles.projectBox}>
        <div className={styles.projectItemDetails}>
          <h3>{projectTitle}</h3>
          <p>{projectDesc}</p>
          <div className={styles.tech}>
            {techStack.map((item) => (
              <span key={item} className={`stack-item stack-${item}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="thumb">
          <img
            src={`/projects/thumbs/${projectName}.webp`}
            alt={projectTitle}
            className={styles.projectItemThumb}
          />
        </div>
      </div>
    </Link>
  );
}
