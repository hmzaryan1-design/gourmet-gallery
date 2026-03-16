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

        {/* Asymmetric grid: side dishes smaller & offset, center elevated */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-4">
          {dishImages.map((dish, index) => {
            // Center card is larger, sides are offset vertically
            const isCenter = index === 1;
            const colSpan = isCenter ? "md:col-span-5" : "md:col-span-3";
            const offsetClass = index === 0
              ? "md:translate-y-8"
              : index === 2
                ? "md:-translate-y-8"
                : "";
            const heightClass = isCenter ? "h-[480px]" : "h-[380px]";
            const colStart = index === 0 ? "md:col-start-1" : index === 1 ? "md:col-start-4" : "md:col-start-9";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className={`group relative overflow-hidden ${colSpan} ${colStart} ${offsetClass}`}
              >
                {/* Image with color harmonization overlay */}
                <div className={`relative ${heightClass} overflow-hidden`}>
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Warm tone harmonization filter */}
                  <div className="absolute inset-0 bg-accent/[0.06] mix-blend-multiply" />

                  {/* Elegant hover overlay with description */}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GastronomySection;
