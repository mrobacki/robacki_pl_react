import heroStyles from "./elements/Hero.module.scss";
import styles from "./Projects.module.scss";
import Hero from "./elements/Hero";
import ProjectListItem from "./projects/ProjectListItem";

import { useParams } from "react-router-dom";
import ProjectItem from "./projects/ProjectItem";

const PROJECTS = [
  {
    projectName: "robacki",
    projectTitle: "Maciek Robacki",
    projectDesc: "Autorskie portfolio robacki.pl",
    projectStack: [
      "ux / ui",
      "figma",
      "react",
      "javascript",
      "css modules",
      "scss",
      "vite",
      "git",
    ],
    projectYear: "2025",
    projectClient:
      "robacki.pl to moje autorskie portfolio, stworzone jako nowoczesna i dopracowana wizytówka prezentująca doświadczenie, projekty oraz kompetencje w zakresie front-end developmentu, projektowania interfejsów i budowania wydajnych stron internetowych. Serwis pełni funkcję profesjonalnego profilu online, prezentując zarówno realizacje komercyjne, jak i projekty eksperymentalne oraz technologiczne.",
    projectServices: [
      "identyfikacja wizualna marki osobistej",
      "projekt UX/UI",
      "architektura informacji",
      "front-end development (React + SCSS)",
      "projekt i implementacja animacji oraz interakcji",
      "optymalizacja wydajności i Core Web Vitals",
      "SEO techniczne i konfiguracja metadanych",
      "tworzenie i integracja dynamicznego systemu prezentacji projektów",
    ],
    projectEngagement:
      "Byłem odpowiedzialny za stworzenie nowego, nowoczesnego portfolio osobistego robacki.pl, które prezentuje moją pracę jako front-end developera, projektanta interfejsów oraz twórcy rozwiązań webowych. Projekt miał na celu zbudowanie spójnej, dopracowanej wizualnie i technologicznie platformy pokazującej moje doświadczenie, podejście do projektowania oraz jakość realizowanych projektów. Stworzyłem kompletny projekt UX/UI, opracowałem strukturę serwisu i zaprojektowałem animacje oraz detale interfejsu podkreślające charakter marki osobistej. Następnie zaimplementowałem szybki, lekki i w pełni responsywny frontend oparty na React, CSS Modules i niestandardowych komponentach, dbając o wydajność, przejrzystość kodu i wrażenia użytkownika. Serwis został rozbudowany o sekcje projektowe, dynamiczne podstrony oraz system prezentacji realizacji, co pozwala na łatwe skalowanie i dodawanie kolejnych prac.",
  },
  {
    projectName: "spatrychologiczne",
    projectTitle: "Gabinet Hair Therapy",
    projectDesc:
      "Projekt i realizacja dla gabinetu trychologicznego spatrychologiczne.pl",
    projectStack: [
      "ux / ui",
      "figma",
      "cms",
      "html5",
      "css/scss",
      "bootstrap",
      "javascript",
      "php",
      "webpack",
      "git",
    ],
    projectYear: "2025",
    projectClient:
      "Spa Trychologiczne to specjalistyczny gabinet zajmujący się diagnostyką i terapią problemów skóry głowy, wypadania włosów oraz profesjonalną pielęgnacją trychologiczną. Gabinet oferuje zabiegi regeneracyjne, oczyszczające i terapeutyczne oparte na nowoczesnych technologiach oraz indywidualnych konsultacjach. Marka stawia na wysoki standard obsługi, skuteczność zabiegów i edukację klientów w zakresie zdrowia skóry głowy i włosów.",
    projectServices: [
      "projekt UX/UI",
      "wdrożenie strony internetowej",
      "front-end development",
      "integracja i konfiguracja CMS",
      "optymalizacja SEO (w tym lokalne SEO)",
      "optymalizacja wydajności i Core Web Vitals",
      "przygotowanie treści i struktury informacji",
      "wdrożenie elementów marketingowych (popup voucherowy, landing pages, blog)",
    ],
    projectEngagement:
      "Byłem odpowiedzialny za zaprojektowanie i wdrożenie nowoczesnej strony internetowej dla Spa Trychologicznego — specjalistycznego gabinetu zajmującego się diagnozowaniem problemów skóry głowy oraz profesjonalną pielęgnacją włosów. Celem projektu było stworzenie estetycznego, lekkiego i intuicyjnego serwisu, który w przejrzysty sposób prezentuje ofertę zabiegów, buduje zaufanie nowych klientów oraz uproszcza proces umawiania wizyt. Opracowałem strukturę treści, przygotowałem przyjazny i elegancki projekt UX/UI, a następnie wdrożyłem kompletny system CMS ułatwiający aktualizację cennika, opisów usług i publikację treści edukacyjnych. Zaimplementowałem szybki front-end z naciskiem na wydajność, SEO, lokalne pozycjonowanie oraz najwyższą responsywność na urządzeniach mobilnych. Projekt został zrealizowany z dbałością o estetykę, klarowną prezentację usług oraz doświadczenia użytkownika.",
  },
  {
    projectName: "lekarzpomorze",
    projectTitle: "lekarzpomorze.pl",
    projectDesc: "Projekt dla sieci przychodni lekarzpomorze.pl",
    projectStack: [
      "ux / ui",
      "figma",
      "cms",
      "html5",
      "css/scss",
      "bootstrap",
      "javascript",
      "php",
      "webpack",
      "git",
    ],
    projectYear: "2025",
    projectClient:
      "Lekarz Pomorze — sieć przychodni świadczących usługi medyczne na terenie Pomorza, oferująca konsultacje lekarskie, diagnostykę oraz usługi profilaktyczne dla pacjentów w każdym wieku.",
    projectServices: [
      "projekt UX/UI",
      "front-end development",
      "wdrożenie CMS",
      "optymalizacja wydajności",
      "SEO & Accessibility",
      "web performance tuning",
    ],
    projectEngagement:
      "Byłem odpowiedzialny za kompleksowe zaprojektowanie i wdrożenie nowej strony internetowej lekarzpomorze.pl. Celem projektu było odświeżenie wizerunku sieci przychodni, uporządkowanie treści oraz stworzenie intuicyjnego, przejrzystego i szybkiego serwisu, który skutecznie prezentuje ofertę medyczną i wspiera proces umawiania wizyt. Opracowałem nową architekturę informacji oraz pełny projekt UX/UI, a następnie wdrożyłem elastyczny CMS umożliwiający rozbudowę i łatwe zarządzanie treściami. Zaimplementowałem front-end oparty na HTML5, SCSS i JavaScripcie, dbając o wysoką wydajność, responsywność, zgodność z SEO i optymalizację pod urządzenia mobilne, które stanowią główne źródło ruchu pacjentów. Projekt powstał z naciskiem na lekkość, szybkość i prostotę obsługi, pozostając jednocześnie spójnym z identyfikacją wizualną klienta i celami biznesowymi przychodni.",
  },
  {
    projectName: "szkolabankowa",
    projectTitle: "Szkoła Bankowa",
    projectDesc: "Wdrożenie strony dla Szkoły Bankowej w Sandomierzu",
    projectStack: [
      "html5",
      "css/scss",
      "bootstrap",
      "javascript",
      "php",
      "Joomla CMS",
      "webpack",
      "git",
    ],
    projectYear: "2024",
    projectClient:
      "Szkoła Bankowa w Sandomierzu to placówka edukacyjna oferująca kierunki o profilu ekonomicznym, biznesowym, administracyjnym i zawodowym, skupiona na praktycznym przygotowaniu uczniów do pracy w sektorze finansowym oraz przedsiębiorczości.",
    projectServices: [
      "wdrożenie strony internetowej",
      "wdrożenie Biuletynu Informacji Publicznej (BIP)",
      "dostosowanie serwisu do WCAG (dostępność cyfrowa)",
      "front-end development",
      "konfiguracja i integracja CMS",
      "optymalizacja nawigacji i struktury informacji",
      "dostosowanie treści i komponentów do standardów dostępności",
      "współpraca produkcyjna z Artist Design Studio",
    ],
    projectEngagement:
      "Byłem odpowiedzialny za wdrożenie nowej strony internetowej Szkoły Bankowej w Sandomierzu, realizowanej we współpracy z Artist Design Studio. Projekt obejmował przygotowanie funkcjonalnego i dostępnego serwisu zgodnego ze standardami WCAG, a także implementację Biuletynu Informacji Publicznej (BIP) w oparciu o obowiązujące wymagania prawne. W ramach prac zaimplementowałem front-end, wdrożyłem system CMS, dostosowałem treści i komponenty do zasad dostępności, zoptymalizowałem strukturę nawigacji oraz zadbałem o poprawną prezentację informacji dla różnych grup użytkowników. Projekt powstał z naciskiem na dostępność, przejrzystość, szybkość działania i łatwe zarządzanie treścią przez placówkę.",
  },
  {
    projectName: "examedin",
    projectTitle: "examedin.com",
    projectDesc:
      "Strona i sklepy internetowy marki glukometrów dla firmy AFLOFARM Farmacja Polska Sp. z o.o.",
    projectStack: [
      "ux / ui",
      "Adobe XD",
      "cms",
      "html5",
      "css/scss",
      "bootstrap",
      "javascript",
      "jquery",
      "php",
      "webpack",
      "git",
      "bitbucket",
    ],
    projectYear: "2019",
    projectClient:
      "Examedin to marka glukometrów i akcesoriów diagnostycznych należąca do firmy Aflofarm, jednego z największych polskich producentów leków, suplementów i wyrobów medycznych. Marka koncentruje się na dostarczaniu precyzyjnych i łatwych w obsłudze urządzeń do codziennego monitorowania poziomu glukozy.",
    projectServices: [
      "projekt UX/UI",
      "wdrożenie strony internetowej",
      "wdrożenie sklepu internetowego",
      "integracja i konfiguracja CMS",
      "front-end development",
      "wdrożenie CMS",
      "optymalizacja wydajności",
      "dostosowanie do urządzeń mobilnych",
      "przygotowanie projektu i wdrożenie produkcyjne",
    ],
    projectEngagement:
      "Byłem odpowiedzialny za zaprojektowanie i wdrożenie nowej strony internetowej oraz sklepu internetowego dla marki glukometrów Examedin należącej do firmy AFLOFARM. Projekt obejmował stworzenie nowoczesnego i przejrzystego serwisu, który prezentuje produkty w sposób czytelny i wiarygodny, a jednocześnie umożliwia klientom łatwy zakup urządzeń i akcesoriów. W ramach prac zaprojektowałem strukturę informacji, przygotowałem UI/UX serwisu, zaimplementowałem wydajny front-end oparty na HTML5, SCSS, Bootstrapie i JavaScripcie oraz wdrożyłem system CMS umożliwiający swobodne zarządzanie treściami i ofertą. Projekt został zrealizowany z naciskiem na estetykę, responsywność, wysoką wydajność oraz pełną zgodność z identyfikacją wizualną marki.",
  },
];

export default function Projects({ actualLocationName }) {
  const { projectName } = useParams();

  if (projectName) {
    const {
      projectTitle,
      projectDesc,
      projectStack,
      projectYear,
      projectClient,
      projectServices,
      projectEngagement,
    } = PROJECTS.find((p) => p.projectName === projectName) || {};

    if (!projectTitle) {
      return <p>Projekt nie istnieje.</p>;
    }

    return (
      <>
        <ProjectItem
          projectName={projectName}
          projectTitle={projectTitle}
          projectDesc={projectDesc}
          projectStack={projectStack}
          projectYear={projectYear}
          projectClient={projectClient}
          projectServices={projectServices}
          projectEngagement={projectEngagement}
        />
      </>
    );
  }

  return (
    <>
      <Hero actualLocationName={actualLocationName}>
        <h2 className={heroStyles.hero_title}>
          Wybrane <span className="highlight">projekty</span>, nad którymi
          pracowałem.
        </h2>
        <p className={heroStyles.heroSubtitle}>
          Przez lata tworzyłem{" "}
          <span className="highlight3">strony, sklepy i interfejsy</span> dla
          firm z wielu branż — od małych biznesów po duże marki. Mam{" "}
          <span className="highlight">kilkanaście lat doświadczenia</span> w
          branży i na co dzień współpracuję z{" "}
          <span className="highlight2">
            agencjami, studiami projektowymi i freelancerami
          </span>
          , dostarczając{" "}
          <span className="highlight5">
            nowoczesne, dopracowane rozwiązania
          </span>{" "}
          webowe.
        </p>
      </Hero>
      <div className={styles.projectListItems}>
        {PROJECTS.map((p) => (
          <ProjectListItem
            key={p.projectName}
            projectTitle={p.projectTitle}
            projectDesc={p.projectDesc}
            projectName={p.projectName}
            projectStack={p.projectStack}
          />
        ))}
      </div>
    </>
  );
}
