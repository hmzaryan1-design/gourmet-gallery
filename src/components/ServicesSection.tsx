import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import weddingImg from "@/assets/wedding-reception.jpg";
import baptismImg from "@/assets/baptism-event.jpg";
import corporateImg from "@/assets/corporate-gala.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const images = [
  { image: weddingImg, alt: "Réception de mariage en plein air avec décoration florale blanche et or" },
  { image: baptismImg, alt: "Buffet élégant pour un baptême avec pâtisseries raffinées" },
  { image: corporateImg, alt: "Gala d'entreprise prestigieux avec décoration noire et or" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.services;

  return (
    <section id="services" className="bg-secondary px-6 py-28 md:px-16 lg:py-36">
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
          <h2 className="text-3xl font-light tracking-wide text-foreground md:text-5xl">
            {t.title1[language]} <span className="italic">{t.title2[language]}</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {t.items[language].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image — slightly narrower to give text more breathing room */}
              <div className="w-full overflow-hidden lg:w-[45%]">
                <img
                  src={images[index].image}
                  alt={images[index].alt}
                  className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[500px]"
                  loading="lazy"
                />
              </div>

              {/* Text content with filigree monogram background */}
              <div className="relative w-full lg:w-[55%] lg:px-12">
                {/* Filigree monogram watermark */}
                <span
                  className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-serif text-[12rem] font-light leading-none tracking-wider text-accent/[0.06]"
                  aria-hidden="true"
                >
                  LTR
                </span>

                <div className="relative z-10">
                  <div className="gold-separator mb-6" />
                  <h3 className="mb-2 text-2xl font-light tracking-wide text-foreground md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-4 font-serif text-base italic text-accent">
                    {service.subtitle}
                  </p>
                  <p className="font-body text-sm font-light leading-loose text-muted-foreground">
                    {service.description}
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

export default ServicesSection;
