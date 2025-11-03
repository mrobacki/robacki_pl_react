import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    location.pathname !== "/" && (
      <nav className={styles.breadcrumbs} aria-label="breadcrumb">
        <Link to="/">home</Link>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <span key={name}>
              {" / "}
              {isLast ? <span>{name}</span> : <Link to={routeTo}>{name}</Link>}
            </span>
          );
        })}
      </nav>
    )
  );
}
