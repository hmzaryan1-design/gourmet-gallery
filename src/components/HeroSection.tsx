import { motion } from "framer-motion";
import heroBg from "@/assets/hero-banquet.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Banquet de mariage somptueux sous des lustres en cristal"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/[0.18]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-serif text-xl tracking-[0.3em] text-primary-foreground md:text-2xl">
            LA TABLE RAFFINÉE
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden items-center gap-10 font-body text-sm tracking-[0.15em] text-primary-foreground/80 md:flex"
        >
          <a href="#philosophy" className="transition-colors hover:text-accent">{t.nav.philosophy[language]}</a>
          <a href="#services" className="transition-colors hover:text-accent">{t.nav.services[language]}</a>
          <a href="#gastronomy" className="transition-colors hover:text-accent">{t.nav.gastronomy[language]}</a>
          <a href="#testimonials" className="transition-colors hover:text-accent">{t.nav.testimonials[language]}</a>
          <a href="#contact" className="transition-colors hover:text-accent">{t.nav.contact[language]}</a>
          <LanguageSwitcher />
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="welcome-title relative z-10 flex h-[calc(100vh-200px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <div className="gold-separator-wide mx-auto mb-8" />
          <h1 className="mb-6 text-4xl font-light leading-tight tracking-wide text-gold-gradient md:text-6xl lg:text-7xl">
            {t.hero.title1[language]}
            <br />
            <span className="italic">{t.hero.title2[language]}</span>
          </h1>
          <p className="mx-auto max-w-2xl whitespace-pre-line font-body text-base font-extralight leading-relaxed tracking-wide text-primary-foreground/80 md:text-lg">
            {t.hero.subtitle[language]}
          </p>
          <div className="gold-separator-wide mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="event-contact"
        >
          <a
            href="#contact"
            className="mt-4 inline-block border border-accent px-10 py-4 font-body text-xs tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {t.hero.cta[language]}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-12 w-[1px] bg-accent/50"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
