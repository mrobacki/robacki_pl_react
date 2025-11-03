import Navigation from "./sidebar/Navigation";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <sidebar className={styles.sidebar}>
      <Navigation />
    </sidebar>
  );
}
