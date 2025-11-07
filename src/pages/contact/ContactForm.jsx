import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./ContactForm.module.scss";

const phoneRegex = /^(\+?[0-9][0-9\s-]{6,14}[0-9])$/;

const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Imię i nazwisko jest za krótkie")
    .max(100, "Za długie imię i nazwisko"),
  email: z.string().email("Podaj poprawny e‑mail"),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || phoneRegex.test(v), {
      message: "Podaj poprawny numer telefonu",
    }),
  service: z.enum(["website", "ecommerce", "seo", "consulting", "other"], {
    required_error: "Wybierz usługę",
  }),
  budget: z.enum(["<5k", "5-15k", "15-40k", ">40k"], {
    required_error: "Wybierz budżet",
  }),
  message: z
    .string()
    .min(10, "Napisz kilka zdań o projekcie (min. 10 znaków)")
    .max(5000, "Za długa wiadomość"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Zgoda jest wymagana" }),
  }),
  company: z.string().max(0, ""), // honeypot
});

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export default function ContactForm() {
  const [serverState, setServerState] = React.useState({ status: "idle" });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: undefined,
      budget: undefined,
      message: "",
      consent: false,
      company: "",
    },
    mode: "onTouched",
  });

  async function onSubmit(values) {
    try {
      setServerState({ status: "idle" });

      // FormData – działa z załącznikami i zewnętrznymi backendami formularzy
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => fd.append(k, String(v)));

      const fileInput = document.querySelector("#attachment");
      const file = fileInput?.files?.[0];
      if (file) {
        if (file.size > 6 * 1024 * 1024) {
          setError("message", {
            type: "manual",
            message: "Załącznik jest zbyt duży (max 6 MB)",
          });
          return;
        }
        fd.append("attachment", file);
      }

      // Dla Formspree zalecane jest ustawienie nagłówka Accept
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!response.ok) throw new Error("Nie udało się wysłać formularza");
      setServerState({ status: "success" });
      reset();
      if (fileInput) fileInput.value = "";
    } catch (err) {
      setServerState({
        status: "error",
        message: err?.message ?? "Coś poszło nie tak",
      });
    }
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Porozmawiajmy o Twoim projekcie</h2>
      <p className={styles.subtitle}>
        Wypełnij krótki brief — odpowiem zwykle w 24h.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={styles.form}
      >
        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className={styles.honeypot}
          {...register("company")}
        />

        <div className={styles.field}>
          <label htmlFor="fullName" className={styles.label}>
            Imię i nazwisko*
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className={`${styles.input} ${
              errors.fullName ? styles.inputError : ""
            }`}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className={styles.error}>
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              E‑mail*
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`${styles.input} ${
                errors.email ? styles.inputError : ""
              }`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className={styles.error}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              Telefon (opcjonalnie)
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="np. +48 600 000 000"
              className={`${styles.input} ${
                errors.phone ? styles.inputError : ""
              }`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
            {errors.phone && (
              <p id="phone-error" className={styles.error}>
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="service" className={styles.label}>
              Usługa*
            </label>
            <select
              id="service"
              className={`${styles.input} ${styles.select} ${
                errors.service ? styles.inputError : ""
              }`}
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? "service-error" : undefined}
              {...register("service")}
            >
              <option value="" disabled>
                — wybierz —
              </option>
              <option value="website">Strona WWW / landing</option>
              <option value="ecommerce">Sklep internetowy</option>
              <option value="seo">SEO / wydajność</option>
              <option value="consulting">Konsultacje / audyt</option>
              <option value="other">Inne</option>
            </select>
            {errors.service && (
              <p id="service-error" className={styles.error}>
                {errors.service.message}
              </p>
            )}
          </div>

          {/* <div className={styles.field}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.label}>Budżet*</legend>
              <div className={styles.budgetGrid}>
                {["<5k", "5-15k", "15-40k", ">40k"].map((b) => (
                  <label key={b} className={styles.radioItem}>
                    <input type="radio" value={b} {...register("budget")} />
                    <span>
                      {b === "<5k"
                        ? "< 5 tys."
                        : b === "5-15k"
                        ? "5–15 tys."
                        : b === "15-40k"
                        ? "15–40 tys."
                        : "> 40 tys."}
                    </span>
                  </label>
                ))}
              </div>
              {errors.budget && (
                <p className={styles.error}>{errors.budget.message}</p>
              )}
            </fieldset>
          </div> */}
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Opisz krótko projekt*
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Cel, zakres, deadline, referencje…"
            className={`${styles.input} ${styles.textarea} ${
              errors.message ? styles.inputError : ""
            }`}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className={styles.error}>
              {errors.message.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="attachment" className={styles.label}>
            Załącznik (specyfikacja, wireframe) — max 6 MB
          </label>
          <input
            id="attachment"
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.webp,.txt,.md,.doc,.docx,.xlsx,.csv,.zip"
            className={styles.file}
          />
          <p className={styles.hint}>Wysyłając plik, użyjemy FormData.</p>
        </div>

        <label className={styles.consent}>
          <input type="checkbox" {...register("consent")} />
          <span>
            Wyrażam zgodę na kontakt w sprawie zapytania. Wiadomość może zostać
            zapisana w celu obsługi zgłoszenia.
          </span>
        </label>
        {errors.consent && (
          <p className={styles.error}>{errors.consent.message}</p>
        )}

        <div className={styles.actions}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            {isSubmitting ? "Wysyłam…" : "Wyślij"}
          </button>
          {serverState.status === "success" && (
            <span className={styles.success}>
              Dzięki! Wiadomość została wysłana.
            </span>
          )}
          {serverState.status === "error" && (
            <span className={styles.failure}>{serverState.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}
