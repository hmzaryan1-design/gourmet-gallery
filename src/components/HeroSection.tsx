import { motion } from "framer-motion";
import heroBg from "@/assets/hero-banquet.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Banquet de mariage somptueux sous des lustres en cristal"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
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
          <a href="#philosophy" className="transition-colors hover:text-accent">Philosophie</a>
          <a href="#services" className="transition-colors hover:text-accent">Prestations</a>
          <a href="#gastronomy" className="transition-colors hover:text-accent">Gastronomie</a>
          <a href="#testimonials" className="transition-colors hover:text-accent">Témoignages</a>
          <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
        </motion.div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <div className="gold-separator-wide mx-auto mb-8" />
          <h1 className="mb-6 text-4xl font-light leading-tight tracking-wide text-primary-foreground md:text-6xl lg:text-7xl">
            L'Art de Recevoir,
            <br />
            <span className="italic">L'Excellence à Votre Table.</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-base font-light leading-relaxed tracking-wide text-primary-foreground/70 md:text-lg">
            Traiteur d'exception pour vos événements les plus précieux.
            <br />
            Mariages, baptêmes, galas — chaque instant devient inoubliable.
          </p>
          <div className="gold-separator-wide mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#contact"
            className="mt-4 inline-block border border-accent px-10 py-4 font-body text-xs tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            ORGANISER VOTRE ÉVÉNEMENT
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
