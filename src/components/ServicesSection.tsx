import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import weddingImg from "@/assets/wedding-reception.jpg";
import baptismImg from "@/assets/baptism-event.jpg";
import corporateImg from "@/assets/corporate-gala.jpg";

const services = [
  {
    title: "Mariages",
    subtitle: "Le plus beau jour de votre vie, sublimé.",
    description:
      "De la cérémonie au dîner, nous orchestrons chaque détail culinaire avec une élégance inégalée. Menus dégustation, cocktails signature, pièce montée spectaculaire.",
    image: weddingImg,
    alt: "Réception de mariage en plein air avec décoration florale blanche et or",
  },
  {
    title: "Baptêmes & Événements Privés",
    subtitle: "Des moments de grâce en famille.",
    description:
      "Buffets raffinés, pâtisseries délicates, et une attention particulière portée aux plus jeunes convives. Chaque célébration familiale mérite l'exception.",
    image: baptismImg,
    alt: "Buffet élégant pour un baptême avec pâtisseries raffinées",
  },
  {
    title: "Galas & Corporate",
    subtitle: "L'excellence au service de votre image.",
    description:
      "Dîners de gala, lancements de produits, séminaires prestigieux. Notre expertise transforme vos événements d'entreprise en expériences mémorables.",
    image: corporateImg,
    alt: "Gala d'entreprise prestigieux avec décoration noire et or",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            NOS PRESTATIONS
          </span>
          <div className="gold-separator mx-auto my-8" />
          <h2 className="text-3xl font-light tracking-wide text-foreground md:text-5xl">
            Des prestations <span className="italic">d'exception</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full overflow-hidden lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[500px]"
                  loading="lazy"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:px-8">
                <div className="gold-separator mb-6" />
                <h3 className="mb-2 text-2xl font-light tracking-wide text-foreground md:text-3xl">
                  {service.title}
                </h3>
                <p className="mb-4 font-serif text-lg italic text-accent">
                  {service.subtitle}
                </p>
                <p className="font-body text-sm font-light leading-loose text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
