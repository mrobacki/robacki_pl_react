import styles from "./Box.module.scss";

export default function Box({ children, boxTitle, itemClassName, showLines }) {
  return (
    <div
      className={`${styles.box} ${itemClassName ? styles[itemClassName] : ""} ${
        showLines ? styles.boxLines : ""
      }`}
    >
      <div className={styles.boxBar}>{boxTitle}</div>
      <div className={styles.boxContent}>{children}</div>
    </div>
  );
}
