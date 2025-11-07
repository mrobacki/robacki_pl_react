import styles from "./ContactForm.module.scss";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm2() {
  const [state, handleSubmit] = useForm("mqagrvwq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  if (state.errors) {
    console.log(state);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className={styles.input}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className={styles.field}>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        onClick={() => console.log(state.errors)}
      >
        Submit
      </button>
    </form>
  );
}
