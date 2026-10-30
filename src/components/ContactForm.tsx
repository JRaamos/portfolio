import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useLocale } from "../context/Locale";
export default function ContactForm() {
  const { locale } = useLocale();
  const pt = locale === "pt";
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = {
      from_name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };
    if (!fields.from_name || !fields.email || !fields.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      // Preserve the existing portfolio's EmailJS service and public browser identifier.
      const response = await emailjs.send(
        "service_mwjn5sb",
        "template_bhq5mr9",
        fields,
        { publicKey: "i100fPMzQzLJ8RQ2S" },
      );
      if (response.status !== 200) throw new Error("Message not accepted");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-label={pt ? "Formulário de contato" : "Contact form"}
    >
      <label htmlFor="contact-name">{pt ? "Nome" : "Name"}</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        placeholder={pt ? "Como posso chamar você?" : "What is your name?"}
        required
        maxLength={100}
      />
      <label htmlFor="contact-email">E-mail</label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder={pt ? "Seu melhor e-mail" : "Your email address"}
        required
        maxLength={254}
      />
      <label htmlFor="contact-message">{pt ? "Mensagem" : "Message"}</label>
      <textarea
        id="contact-message"
        name="message"
        placeholder={
          pt
            ? "Me conte um pouco sobre sua ideia..."
            : "Tell me a little about your idea..."
        }
        required
        maxLength={2000}
        rows={5}
      />
      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {status === "success"
          ? pt
            ? "Mensagem enviada. Obrigado pelo contato!"
            : "Message sent. Thank you for getting in touch!"
          : status === "error"
            ? pt
              ? "Não foi possível enviar agora. Tente novamente ou use o contato direto."
              : "Unable to send right now. Try again or use the email link."
            : ""}
      </p>
      <button
        className="button-primary"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? pt
            ? "Enviando..."
            : "Sending..."
          : pt
            ? "Enviar mensagem"
            : "Send message"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
