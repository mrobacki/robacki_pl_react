import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BottomSection from "./pages/elements/BottomSection";

import styles from "./App.module.scss";

function App() {
  // const [isFull, setIsFull] = useState(true);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [displayLocation, setDisplayLocation] = useState(location);
  const [isFading, setIsFading] = useState(false);

  const actualLocationName =
    displayLocation.pathname === "/"
      ? "home"
      : displayLocation.pathname.split("/").filter(Boolean).at(-1);

  // 1) Fade-out current route, then switch to the new one
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsFading(true);
      const t = setTimeout(() => {
        setDisplayLocation(location);
        setIsFading(false);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [location, displayLocation]);

  useEffect(() => {
    // Do not show route loader on home page
    // if (location.pathname === "/") {
    //   setLoading(false);
    //   return;
    // }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="p-2">
      {/* <div className={`${styles.wrapper} ${isFull && "size-full"}`}> */}
      <main className={`${styles.layout} ${"layoutFull"}`}>
        <Header />
        <div className={styles.layoutBody}>
          <Sidebar />
          <div className={styles.pageContent}>
            {/* {actualLocationName && <h1>{`<${actualLocationName}>`}</h1>} */}
            {loading && (
              <div
                className={`${styles.loader} ${loading ? styles.active : ""}`}
              >
                <Loader active={loading} />
              </div>
            )}
            <div
              className={`h100 container container_${actualLocationName} ${
                styles.routeContainer
              } ${isFading ? styles.fadeOut : ""}`}
            >
              <Routes location={displayLocation}>
                <Route
                  path="/"
                  element={<Home actualLocationName={actualLocationName} />}
                ></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/experiences" element={<Experiences />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
              <BottomSection />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
