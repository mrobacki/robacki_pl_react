import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export default function Button({ children, to }) {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
}
