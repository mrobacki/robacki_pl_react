import styles from "./AboutIntro.module.scss";

export default function AboutIntro() {
  return (
    <section className={styles.aboutIntro}>
      <div className={styles.intro}>
        <p>
          Nazywam się Maciek Robacki — jestem{" "}
          <span className="highlight">Frontend Web Developerem</span> i
          projektantem UX/UI z ponad{" "}
          <span className="highlight2">10-letnim doświadczeniem</span> w
          tworzeniu wydajnych stron internetowych, platform e-commerce oraz
          interfejsów użytkownika.
        </p>
        <p>
          Zrealizowałem ponad <span className="highlight3">400 projektów</span>{" "}
          dla marek takich jak{" "}
          <span className="highlight5">
            Aflofarm, Uniwerytet Rzeszowski, Ministerstwo Finansów, Colorland,
            nPhoto etc.
          </span>
          , łącząc precyzję projektową z czystym i przemyślanym kodem.
        </p>
        <p>
          Moja praca łączy{" "}
          <span className="highlight4">kreatywność z wiedzą techniczną</span> —
          od układów typu pixel-perfect po responsywne interfejsy i systemy
          projektowania zorientowane na użytkownika. Pasjonuję się tworzeniem
          eleganckich, nowoczesnych doświadczeń cyfrowych, które wyglądają
          świetnie i działają bezbłędnie.
        </p>
      </div>
    </section>
  );
}
