import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={`${styles.logo} {'logo'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="144"
        height="14"
        viewBox="0 0 144 14"
        fill="none"
      >
        <g id="logo">
          <text
            id="firstName"
            fill="white"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="PP Neue Machina"
            fontSize="16"
            letterSpacing="0em"
            className={`${styles.firstName} {'firstName}`}
          >
            <tspan x="0" y="13.0775">
              maciek
            </tspan>
          </text>
          <text
            id="lastName"
            fill="#8FFF86"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="PP Neue Machina"
            fontSize="16"
            letterSpacing="0em"
            className={styles.lastName}
          >
            <tspan x="72.4931" y="13.28">
              robacki
            </tspan>
          </text>
          <g id="tags" className="tags">
            <text
              id="tag"
              fill="#8FFF86"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="PP Neue Machina"
              fontSize="16"
              letterSpacing="0em"
              className={`${styles.rightTag} {'rightTag'}`}
            >
              <tspan x="134" y="12.89">
                &gt;
              </tspan>
            </text>
            <text
              id="tag"
              fill="#8FFF86"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="PP Neue Machina"
              fontSize="16"
              letterSpacing="0em"
              className={`${styles.leftTag} {'leftTag'}`}
            >
              <tspan x="63" y="13.0775">
                &lt;
              </tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
