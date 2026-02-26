import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import food1 from "@/assets/food-plating-1.jpg";
import food2 from "@/assets/food-plating-2.jpg";
import food3 from "@/assets/food-plating-3.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const dishImages = [
  { image: food1, alt: "Plat gastronomique avec fleurs comestibles" },
  { image: food2, alt: "Sphère au chocolat et feuille d'or" },
  { image: food3, alt: "Amuse-bouche sur cuillère dorée" },
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dishImages.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group relative overflow-hidden"
            >
              <img
                src={dish.image}
                alt={dish.alt}
                className="h-96 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="p-6">
                  <div className="gold-separator mb-3" />
                  <p className="font-serif text-lg tracking-wide text-primary-foreground">
                    {t.dishes[language][index]}
                  </p>
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
