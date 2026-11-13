import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Déclenchement de l'envoi d'email via le client de messagerie par défaut
    const subject = encodeURIComponent(`Contact Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:moskateloadam@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 md:p-10"
    >
      <p className="font-sans text-xs text-muted/80">
        Les champs marqués d’un * sont obligatoires.
      </p>

      {/* Champ Nom */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-sm font-medium text-ink"
        >
          Nom *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          className="h-12 w-full rounded-lg border border-line bg-page px-4 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      {/* Champ Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-sm font-medium text-ink"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Votre adresse email"
          value={formData.email}
          onChange={handleChange}
          className="h-12 w-full rounded-lg border border-line bg-page px-4 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      {/* Champ Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-sm font-medium text-ink"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Votre projet, votre question..."
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-line bg-page p-4 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>

      {/* Bouton d'envoi */}
      <button
        type="submit"
        className="flex h-13 w-full items-center justify-center gap-3 rounded-lg border border-accent bg-accent font-sans text-[15px] font-semibold text-accent-ink transition-opacity hover:opacity-90"
      >
        Envoyer
        <FiSend aria-hidden="true" className="size-4" />
      </button>

      <p className="text-center font-sans text-xs text-muted/60 sm:text-left">
        Évitez de partager des informations sensibles dans votre message.
      </p>
    </form>
  );
}
