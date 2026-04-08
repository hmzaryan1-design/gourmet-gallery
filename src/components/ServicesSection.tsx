import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import weddingImg from "@/assets/wedding-reception.jpg";
import baptismImg from "@/assets/baptism-event.jpg";
import corporateImg from "@/assets/corporate-gala.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";
import {
  Flower2,
  CalendarCheck,
  ShieldCheck,
  Car,
  Building2,
  Music,
} from "lucide-react";

const images = [
  { image: weddingImg, alt: "Réception de mariage" },
  { image: baptismImg, alt: "Buffet pour baptême" },
  { image: corporateImg, alt: "Gala d'entreprise" },
];

const serviceIcons = [Flower2, CalendarCheck, ShieldCheck, Car, Building2, Music];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const t = translations.services;
  const allServices = t.items[language];

  // First 3 = featured with images, rest = icon cards
  const featured = allServices.slice(0, 3);
  const additional = allServices.slice(3);

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

        {/* Featured services with images */}
        <div className="space-y-24">
          {featured.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`relative flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full overflow-hidden lg:w-[45%]">
                <img
                  src={images[index].image}
                  alt={images[index].alt}
                  className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[500px]"
                  loading="lazy"
                />
              </div>
              <div className="relative w-full lg:w-[55%] lg:px-12">
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

        {/* Additional services grid */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="gold-separator mx-auto mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additional.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.9 + index * 0.1 }}
                  className="group relative border border-accent/10 bg-background/50 p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_8px_30px_-12px_hsl(var(--accent)/0.15)]"
                >
                  {/* Corner accent */}
                  <div className="absolute left-0 top-0 h-8 w-[1px] bg-accent/40 transition-all duration-500 group-hover:h-12" />
                  <div className="absolute left-0 top-0 h-[1px] w-8 bg-accent/40 transition-all duration-500 group-hover:w-12" />

                  <Icon className="mb-5 h-7 w-7 text-accent" strokeWidth={1.2} />
                  <h3 className="mb-2 text-lg font-light tracking-wide text-foreground">
                    {service.title}
                  </h3>
                  <p className="mb-3 font-serif text-sm italic text-accent">
                    {service.subtitle}
                  </p>
                  <p className="font-body text-xs font-light leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
