import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.footer;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.successMessage[language]);
    setFormData({ name: "", email: "", event: "", message: "" });
  };

  const eventValues = ["mariage", "bapteme", "corporate", "prive"];

  return (
    <footer id="contact" className="bg-foreground px-6 py-28 md:px-16 lg:py-36">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
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
          className="mx-auto max-w-xl space-y-6"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder={t.namePlaceholder[language]}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              placeholder={t.emailPlaceholder[language]}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
            />
          </div>
          <select
            value={formData.event}
            onChange={(e) => setFormData({ ...formData, event: e.target.value })}
            required
            className="w-full border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground/40 focus:border-accent focus:outline-none [&>option]:bg-foreground [&>option]:text-primary-foreground"
          >
            <option value="">{t.eventLabel[language]}</option>
            {t.eventOptions[language].map((opt, i) => (
              <option key={i} value={eventValues[i]}>{opt}</option>
            ))}
          </select>
          <textarea
            placeholder={t.messagePlaceholder[language]}
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full resize-none border-b border-primary-foreground/20 bg-transparent px-0 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 border border-accent px-12 py-4 font-body text-xs tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {t.submitButton[language]}
            </button>
          </div>
        </motion.form>

        {/* Footer bottom */}
        <div className="mt-24 border-t border-primary-foreground/10 pt-10 text-center">
          <p className="font-serif text-lg tracking-[0.2em] text-primary-foreground/80">
            LA TABLE RAFFINÉE
          </p>
          <p className="mt-3 font-body text-xs tracking-wide text-primary-foreground/40">
            {t.address[language]}
          </p>
          <p className="mt-1 font-body text-xs tracking-wide text-primary-foreground/40">
            +33 1 42 68 00 00 — contact@latable-raffinee.fr
          </p>
          <div className="mt-6 flex justify-center gap-8">
            <a href="#" className="font-body text-xs tracking-[0.15em] text-primary-foreground/30 transition-colors hover:text-accent">
              Instagram
            </a>
            <a href="#" className="font-body text-xs tracking-[0.15em] text-primary-foreground/30 transition-colors hover:text-accent">
              Pinterest
            </a>
            <a href="#" className="font-body text-xs tracking-[0.15em] text-primary-foreground/30 transition-colors hover:text-accent">
              LinkedIn
            </a>
          </div>
          <p className="mt-8 font-body text-[10px] tracking-wide text-primary-foreground/20">
            {t.copyright[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
