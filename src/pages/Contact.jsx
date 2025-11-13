import Hero from "./elements/Hero";
import ContactForm from "./contact/ContactForm";
import styles from "./Contact.module.scss";

export default function Contact({ actualLocationName }) {
  return (
    <>
      <Hero actualLocationName={actualLocationName}>
        <h2 className={styles.hero_title}>
          <span className="hero_label">
            Porozmawiajmy o Twoim <span className="highlight">projekcie</span>.
          </span>
        </h2>
        <p className={styles.heroSubtitle}>
          Możesz odezwać się bezpośrednio na{" "}
          <a href="mailto:maciek@robacki.pl">maciek@robacki.pl</a> lub
          skorzystać z formularza poniej.
        </p>
        {/* <a href="#projects" className="btn btn-primary">
              View My Work
            </a> */}
      </Hero>
      <section className={styles.contact}>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
