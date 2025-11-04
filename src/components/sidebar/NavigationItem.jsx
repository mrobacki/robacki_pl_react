import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useState } from "react";

export default function NavigationItem({ children, to, pageName }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipId = `tip-${pageName.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <li className={`${showTooltip ? styles.hovered : ""}`}>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? styles.active : "")}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(false)}
        aria-describedby={tooltipId}
      >
        {children}
        {showTooltip && (
          <span className={`${styles.tooltip} `} id={tooltipId} role="tooltip">
            {pageName}
          </span>
        )}
      </NavLink>
    </li>
  );
}
