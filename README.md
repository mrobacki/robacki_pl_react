# robacki.pl – Portfolio

Personal portfolio of **Me** – a creative frontend developer who blends design, engineering and performance into fast, modern web experiences.

The site is built as a **single-page React application** with multiple routed views, smooth transitions, and animated SVG details.

Live site: **https://robacki.pl**

---

## Features

- 🧭 **Multi-page layout with routing**
  - Home, About, Projects (with project details), Experiments, Contact, 404
  - Route-based fading (`fadeOut` state) for smooth page transitions
- 🎬 **Custom route loader**
  - Global loader displayed on route change
- 🧱 **Modular page sections**
  - Reusable `Hero` component
  - Sections: `AboutMe`, `Skills`, `Collaboration`, `BottomSection`
- 🎨 **Animated SVG elements**
  - SVG-based logo/accents with animation hooks
- 🧾 **Layout with sidebar & footer**
  - Persistent `Header`, `Sidebar`, `Footer`
  - Scroll-to-top on navigation
- 📐 **SCSS Modules & layout utilities**
  - Component-scoped `.module.scss`
  - Container-based layout with page-specific container classes
- ⚠️ **404 Not Found page**

---

## Tech Stack

- **React**
- **React Router DOM**
- **Vite**
- **SCSS Modules**
- **Custom SVG assets**

---

## Project Structure (simplified)

```
src/
  App.jsx              # Routing, loader, layout
  App.module.scss

  pages/
    Home.jsx
    About.jsx
    Projects.jsx
    Experiments.jsx
    Contact.jsx
    NotFound.jsx
    elements/
      Hero.jsx
      BottomSection.jsx
    home/
      AboutMe.jsx
      Skills.jsx
      Collaboration.jsx

  components/
    Header.jsx
    Sidebar.jsx
    Footer.jsx
    Loader.jsx
```

---

## Getting Started

### Install dependencies

```
npm install
```

### Development

```
npm run dev
```

### Production build

```
npm run build
```

---

## Routing Overview

- `/` – Home
- `/o-mnie` – About
- `/projekty` – Projects list
- `/projekty/:projectName` – Single project
- `/eksperymenty` – Experiments
- `/kontakt` – Contact
- `*` – 404

---

## Live Website

👉 **https://robacki.pl**

---

## Contact

If you’d like to work together or discuss a project:

- Email: **maciek@robacki.pl**
- Website: **https://robacki.pl**
