import HoverModule from "../elements/HoverModule";
import styles from "./Clients.module.scss";

import { useState, useEffect } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const images = import.meta.glob(
      "/src/assets/clients/*.{png,jpg,jpeg,svg,gif}",
      {
        eager: true,
      }
    );

    // konwertujemy obiekt { path: module } -> tablicę ścieżek
    const loadedImages = Object.values(images).map((img) => img.default);
    setClients(loadedImages);
  }, []);

  return (
    <section className={styles.clients}>
      <div className={styles.hheader}>
        <h2>
          Miałem przyjemność <span className="highlight">współpracować</span> z
          wyjątkowymi markami.
        </h2>
        <p>
          To tylko niewielka część spośród{" "}
          <span className="highlight3">kilkuset firm i zespołów</span>, z
          którymi tworzyłem skuteczne, nowoczesne projekty.
        </p>
      </div>
      <div className={styles.clientsGrid}>
        {clients.map((src, i) => (
          <div className={styles.clientItem} key={i}>
            <img src={src} alt={`client-${i}`} className="client-icon" />
          </div>
        ))}
      </div>
    </section>
  );
}
