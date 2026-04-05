import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import food1 from "@/assets/food-plating-1.jpg";
import food2 from "@/assets/food-plating-2.jpg";
import food3 from "@/assets/food-plating-3.jpg";
import food4 from "@/assets/food-plating-4.jpg";
import food5 from "@/assets/food-plating-5.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const dishImages = [
  { image: food1, alt: "Buffet chaud gastronomique" },
  { image: food2, alt: "Table de réception élégante en or et blanc" },
  { image: food3, alt: "Réception en plein air avec décoration florale" },
  { image: food4, alt: "Buffet extérieur avec fruits et verrines" },
  { image: food5, alt: "Façade La Table Raffinée — accueil événementiel" },
];

const GastronomySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.gastronomy;

  return (
    <section id="gastronomy" className="bg-background px-6 py-28 md:px-16 lg:py-36">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="font-body text-xs tracking-[0.3em] text-accent">
            {t.label[language]}
          </span>
          <div className="gold-separator mx-auto my-8" />
          <h2 className="mb-6 text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t.title1[language]} <span className="italic">{t.title2[language]}</span>
          </h2>
          <p className="mx-auto max-w-xl font-body text-base font-light leading-relaxed text-muted-foreground">
            {t.description[language]}
          </p>
        </motion.div>

        {/* Top row: 3 images */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {dishImages.slice(0, 3).map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/[0.06] mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="w-full p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="gold-separator mb-3" />
                    <p className="font-serif text-lg tracking-wide text-accent">
                      {t.dishes[language][index]}
                    </p>
                    <p className="mt-2 font-body text-xs font-light leading-relaxed tracking-wide text-primary-foreground/70">
                      {t.dishDescriptions[language][index]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 2 images, wider */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {dishImages.slice(3, 5).map((dish, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index + 3) * 0.15 }}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/[0.06] mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="w-full p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="gold-separator mb-3" />
                    <p className="font-serif text-lg tracking-wide text-accent">
                      {t.dishes[language][index + 3]}
                    </p>
                    <p className="mt-2 font-body text-xs font-light leading-relaxed tracking-wide text-primary-foreground/70">
                      {t.dishDescriptions[language][index + 3]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;
