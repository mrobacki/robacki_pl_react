import styles from "./ContactForm.module.scss";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm2() {
  const [state, handleSubmit] = useForm("mqagrvwq");

  if (state.succeeded) {
    return (
      <p className="highlight3">
        Dzięki za formularz, odezwę się jak najszybciej!
      </p>
    );
  }

  return (
    <>
      <h3 className={styles.title}>Formularz kontaktowy</h3>
      <p className={styles.subtitle}>
        <span className="highlight2">Wypełnij krótki brief</span> — odpowiadam
        zwykle w 24h.
      </p>
      {state.succeeded ? <p>Thanks for joining!</p> : ""}
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Imię i nazwisko*</label>
            <input
              id="name"
              type="name"
              name="name"
              className={styles.input}
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Adres e-mail*</label>
            <input
              id="email"
              type="email"
              name="email"
              className={styles.input}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="phone">Telefon (opcjonalnie)</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              className={styles.input}
              pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
              placeholder="123456789"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Usługa (opcjonalnie)</label>
            <select id="service" className={styles.input}>
              <option value="" disabled>
                — wybierz —
              </option>
              <option value="website">Strona WWW / landing</option>
              <option value="ecommerce">Sklep internetowy</option>
              <option value="seo">SEO / wydajność</option>
              <option value="consulting">Konsultacje / audyt</option>
              <option value="other">Inne</option>
            </select>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Opisz krótko projekt*</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Cel, zakres, deadline..."
            className={styles.input}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          wyślij-wiadomość
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 7.5C2.72386 7.5 2.5 7.72386 2.5 8C2.5 8.27614 2.72386 8.5 3 8.5V8V7.5ZM14.3536 8.35355C14.5488 8.15829 14.5488 7.84171 14.3536 7.64645L11.1716 4.46447C10.9763 4.2692 10.6597 4.2692 10.4645 4.46447C10.2692 4.65973 10.2692 4.97631 10.4645 5.17157L13.2929 8L10.4645 10.8284C10.2692 11.0237 10.2692 11.3403 10.4645 11.5355C10.6597 11.7308 10.9763 11.7308 11.1716 11.5355L14.3536 8.35355ZM3 8V8.5H14V8V7.5H3V8Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </>
  );
}
