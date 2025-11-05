import styles from "./Box.module.scss";

export default function Box({ children, boxTitle, itemClassName }) {
  return (
    <div className={`${styles.box} ${styles[itemClassName]}`}>
      <div className={styles.boxBar}>{boxTitle}</div>
      <div className={styles.boxContent}>{children}</div>
    </div>
  );
}
