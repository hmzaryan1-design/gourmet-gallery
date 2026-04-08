import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import { toast } from "sonner";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.footer;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Pour Vercel, nous utilisons Formspree (remplacez 'votre_id' par votre ID Formspree)
      const formspreeUrl = "https://formspree.io/f/mykbvdpa"; // Votre ID Formspree réel
      
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t.successMessage[language], {
          description: "Nous avons bien reçu votre demande et vous répondrons très vite.",
          duration: 5000,
        });
        setFormData({ name: "", phone: "", email: "", event: "", message: "" });
      } else {
        toast.error("Désolé, une erreur technique est survenue.");
      }
    } catch (error) {
      toast.error("Veuillez vérifier votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventValues = ["mariage", "bapteme", "corporate", "prive"];

  return (
    <footer id="contact" className="bg-foreground px-6 py-28 md:px-16 lg:py-36">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center">

          <span className="font-body text-xs tracking-[0.3em] text-accent">
            {t.label[language]}
          </span>
          <div className="gold-separator mx-auto my-8" />
          <h2 className="mb-4 text-3xl font-light tracking-wide text-primary-foreground md:text-5xl">
            {t.title1[language]} <span className="italic">{t.title2[language]}</span>
          </h2>
          <p className="mx-auto max-w-lg font-body text-sm font-light leading-relaxed text-primary-foreground/60">
            {t.description[language]}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="mx-auto max-w-xl space-y-6">

          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder={t.namePlaceholder[language]}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
              className="border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none disabled:opacity-50" />

            <input
              type="tel"
              name="phone"
              placeholder={t.phonePlaceholder[language]}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              disabled={isSubmitting}
              className="border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none disabled:opacity-50" />
          </div>

          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder[language]}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isSubmitting}
            className="w-full border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none disabled:opacity-50" />
          <select
            name="event"
            value={formData.event}
            onChange={(e) => setFormData({ ...formData, event: e.target.value })}
            required
            disabled={isSubmitting}
            className="w-full border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground/40 focus:border-accent focus:outline-none [&>option]:bg-foreground [&>option]:text-primary-foreground disabled:opacity-50">

            <option value="">{t.eventLabel[language]}</option>
            {t.eventOptions[language].map((opt, i) =>
            <option key={i} value={eventValues[i]}>{opt}</option>
            )}
          </select>
          <textarea
            name="message"
            placeholder={t.messagePlaceholder[language]}
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            disabled={isSubmitting}
            className="w-full resize-none border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none disabled:opacity-50" />

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 border border-accent px-12 py-4 font-body text-xs tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary-foreground">

              {isSubmitting ? "ENVOI..." : t.submitButton[language]}
            </button>
          </div>
        </motion.form>

        {/* Footer bottom */}
        <div className="mt-24 border-t border-primary-foreground/10 pt-10 text-center">
          <p className="font-serif text-lg tracking-[0.2em] text-primary-foreground/80">
            LA TABLE RAFFINÉE
          </p>
          <p className="mt-3 font-body text-xs tracking-wide text-primary-foreground/40">
            Casablanca, Maroc
          </p>
          <p className="mt-1 font-body text-xs tracking-wide text-primary-foreground/40">
            <a href="tel:+212661576446" className="transition-colors hover:text-accent">+212 661 57 64 46</a>
            {" — "}
            <a href="tel:+212661577837" className="transition-colors hover:text-accent">+212 661-577837</a>
            {" — "}
            <a href="mailto:contact@latableraffinee.com" className="transition-colors hover:text-accent">contact@latableraffinee.com</a>
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            <a href="https://www.instagram.com/la_table_raffinee?igsh=MWhodTVnNXVkemsxaA==" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.15em] text-primary-foreground/30 transition-colors hover:text-accent">
              Instagram
            </a>
            <span className="text-primary-foreground/10">|</span>
            <a href="https://maps.google.com/?q=La+Table+Raffinée+Casablanca+Maroc" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-[0.15em] text-primary-foreground/30 transition-colors hover:text-accent">
              Google Maps
            </a>
          </div>
          <p className="mt-8 font-body text-[10px] tracking-wide text-primary-foreground/20">
            {t.copyright[language]}
          </p>
        </div>
      </div>
    </footer>);

};

export default FooterSection;
