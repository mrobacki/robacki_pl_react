import Button from "../../components/Button";
import Box from "../elements/Box";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={`${styles.aboutMe} space-bottom`}>
      <h2>
        <span className="highlight">Developer</span>, który łączy design,
        technologię i wydajność
      </h2>
      <div className={styles.boxes}>
        <Box boxTitle={"profilowe"} itemClassName="aboutPortrait">
          <img src="me.webp" alt="avatar" />
        </Box>
        <Box boxTitle={"o-mnie"} itemClassName="aboutIntro">
          <ol>
            <li>
              Pasjonuję się projektowaniem i tworzeniem stron internetowych, ze
              szczególnym naciskiem na{" "}
              <span className="highlight">front-end</span>. To przestrzeń, w
              której mogę połączyć{" "}
              <span className="highlight2">
                techniczne umiejętności z kreatywnością
              </span>
              .
            </li>
            <li>
              Współpracuję z{" "}
              <span className="highlight3">
                agencjami, studiami projektowymi i freelancerami
              </span>
              , pomagając im realizować projekty, które łączą{" "}
              <span className="highlight">
                design, funkcjonalność i wydajność
              </span>
              .
            </li>
            <li>
              Pisanie kodu to dla mnie nie tylko praca — to sposób na{" "}
              <span className="highlight4">
                tworzenie, eksperymentowanie i rozwój
              </span>
              . Regularnie tworzę własne projekty, dzielę się wiedzą i wspieram
              i eskperymentuję.
            </li>
            <li>
              Pracuję z <span className="highlight3">Rzeszowa</span> — miasta, w
              którym technologia ma swój rytm. Współpracuję z firmami z całej{" "}
              <span className="highlight2">Polski 🇵🇱</span> i{" "}
              <span className="highlight">Europy 🇪🇺</span>.
            </li>
          </ol>
        </Box>

        <Box boxTitle={"moje-umiejętności"} itemClassName="aboutSkills">
          <ol>
            <li>
              <strong>Frontend:</strong>
              <br />
              <span className="small grey">
                JavaScript, React, jQuery, HTML5, CSS3/SCSS/Less etc.
                <br />
                TailwindCSS, CSS Modules, Bootstrap etc.
              </span>
            </li>
            <li>
              <strong>Dev Tools:</strong>
              <br />
              <span className="small grey">
                GIT, SVN, Webpack, Node, Vite, VS Code etc.
                <br />
                Joomla, Wordpress, SaaS etc.
              </span>
            </li>
            <li>
              <strong>UX / UI:</strong>
              <br />
              <span className="small grey">
                Figma, Adobe Photoshop / XD, GA etc.
              </span>
            </li>
            <li>
              <strong>Team work:</strong>
              <br />
              <span className="small grey">
                Jira, Trello, Redmine, Bitbucket etc.
              </span>
            </li>
            <li>
              <strong>Work style:</strong>
              <br />
              <span className="small grey">
                pixel-perfect, minimalizm, dbałość o każdy detal i płynność
                interfejsu
              </span>
            </li>
          </ol>
        </Box>
        <Box boxTitle={"w-liczbach"} itemClassName="aboutLocation">
          <ol>
            <li>
              Ponad <span className="highlight">10 lat</span> doświadczenia w
              web dev.
            </li>
            <li>
              <span className="highlight2">Setki</span> dopracowanych, wydajnych
              i estetycznych realizacji.
            </li>
            <li>
              <span className="highlight3">100%</span> zaangażowania — od
              pomysłu po wdrożenie i optymalizację.
            </li>
            <li>
              <span className="highlight">Dziesiątki</span> partnerów i
              zespołów, z którymi wspólnie tworzyłem skuteczne, nowoczesne
              projekty.
            </li>
          </ol>
        </Box>

        <Button
          to="o-mnie"
          bigSize={true}
          additionalStyles={styles.buttonToAbout}
        >
          więcej-o-mnie
        </Button>
      </div>
    </section>
  );
}
