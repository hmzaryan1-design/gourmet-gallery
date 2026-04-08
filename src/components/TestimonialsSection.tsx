import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import weddingImg from "@/assets/wedding-reception.jpg";
import dekraImg from "@/assets/dekra-event.png";
import baptismImg from "@/assets/baptism-event.jpg";
import corporateImg from "@/assets/corporate-gala.jpg";

// Artistic blurred event photos tied to each testimonial
const eventImages = [
  { image: weddingImg, alt: "Événement de mariage" },
  { image: dekraImg, alt: "Centenaire DEKRA" },
  { image: baptismImg, alt: "Événement privé" },
  { image: corporateImg, alt: "Gala d'entreprise" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.testimonials;

  return (
    <section id="testimonials" className="bg-secondary px-6 py-28 md:px-16 lg:py-36">
      <div ref={ref} className="mx-auto max-w-5xl">
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

        {/* Floating testimonials — no boxes, no stars */}
        <div className="space-y-24">
          {t.items[language].map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className={`flex flex-col items-center gap-10 lg:flex-row ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Artistic blurred event photo */}
                <div className="relative w-full overflow-hidden lg:w-2/5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={eventImages[index].image}
                      alt={eventImages[index].alt}
                      className="h-full w-full object-cover blur-[2px] brightness-75 saturate-[0.8] transition-all duration-700 hover:blur-0 hover:brightness-90"
                      loading="lazy"
                    />
                    {/* Warm overlay for artistic effect */}
                    <div className="absolute inset-0 bg-accent/[0.08] mix-blend-multiply" />
                  </div>
                </div>

                {/* Floating quote — no box, just text on cream */}
                <div className={`w-full lg:w-3/5 ${isReversed ? "lg:pr-8" : "lg:pl-8"}`}>
                  {/* Large decorative quote mark */}
                  <span className="font-serif text-6xl leading-none text-accent/30" aria-hidden="true">
                    «
                  </span>
                  <blockquote className="-mt-4 font-serif text-lg font-light italic leading-relaxed text-foreground/80 md:text-xl">
                    {item.quote}
                  </blockquote>
                  <div className="gold-separator mb-4 mt-6" />
                  <p className="font-serif text-sm tracking-wide text-foreground">
                    {item.name}
                  </p>
                  <p className="font-body text-xs tracking-wide text-muted-foreground">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
