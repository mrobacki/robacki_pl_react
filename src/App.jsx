import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
// import { useState } from "react";

function App() {
  // const [isFull, setIsFull] = useState(true);

  return (
    <div className="p-2">
      {/* <div className={`${styles.wrapper} ${isFull && "size-full"}`}> */}
      <main className={`${styles.layout} ${"layoutFull"}`}>
        <Header />
        <div className={styles.layoutBody}>
          <Sidebar />
          <div className={styles.pageContent}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/experiences" element={<Experiences />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
