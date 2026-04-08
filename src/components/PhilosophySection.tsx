import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.philosophy;

  return (
    <section id="philosophy" className="bg-background px-6 py-28 md:px-16 lg:py-36">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.3em] text-accent">
            {t.label[language]}
          </span>
          <div className="gold-separator mx-auto my-8" />
          <h2 className="mb-10 text-3xl font-light leading-snug tracking-wide text-foreground md:text-5xl">
            {t.title1[language]}
            <br />
            <span className="italic">{t.title2[language]}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mx-auto max-w-2xl font-body text-base font-light leading-loose text-muted-foreground md:text-lg">
            {t.description[language]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {t.pillars[language].map((item, i) => (
            <div key={i} className="group">
              <div className="gold-separator mx-auto mb-6" />
              <h3 className="mb-3 text-lg font-medium tracking-wide text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
