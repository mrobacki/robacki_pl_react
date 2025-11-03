import Navigation from "./sidebar/Navigation";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Navigation />
    </aside>
  );
}
