import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" className="bg-background px-6 py-28 md:px-16 lg:py-36">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.3em] text-accent">
            NOTRE PHILOSOPHIE
          </span>
          <div className="gold-separator mx-auto my-8" />
          <h2 className="mb-10 text-3xl font-light leading-snug tracking-wide text-foreground md:text-5xl">
            Là où la gastronomie
            <br />
            <span className="italic">rencontre l'art de vivre</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mx-auto max-w-2xl font-body text-base font-light leading-loose text-muted-foreground md:text-lg">
            Depuis plus de vingt ans, La Table Raffinée sublime chaque événement
            en une symphonie de saveurs. Nos chefs sélectionnent avec passion les
            produits les plus nobles — truffes, homards, herbes fraîches de nos
            jardins — pour créer des menus sur-mesure qui racontent votre histoire.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {[
            { title: "Produits d'Exception", desc: "Sélection rigoureuse de produits nobles, locaux et de saison." },
            { title: "Savoir-Faire Artisanal", desc: "Chaque plat est une œuvre, dressé à la pince avec précision." },
            { title: "Sur-Mesure Absolu", desc: "Votre événement est unique, notre prestation l'est aussi." },
          ].map((item, i) => (
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
