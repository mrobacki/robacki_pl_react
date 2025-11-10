import ContactForm from "./contact/ContactForm";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={`${styles.contactIntro} text-center`}>
        <h2 className={styles.title}>Porozmawiajmy o Twoim projekcie</h2>
        <p className={styles.subtitle}>
          Możesz odezwać się bezpośrednio na{" "}
          <a href="mailto:maciek@robacki.pl">maciek@robacki.pl</a>
        </p>
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </section>
  );
}
