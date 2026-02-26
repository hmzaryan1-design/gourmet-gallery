import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Isabelle & Thomas D.",
    event: "Mariage — Château de Versailles",
    quote:
      "La Table Raffinée a transformé notre mariage en un rêve éveillé. Chaque bouchée était une œuvre d'art, chaque service d'une élégance rare. Nos invités en parlent encore.",
    stars: 5,
  },
  {
    name: "Famille Leroy",
    event: "Baptême — Villa Borghese",
    quote:
      "Une délicatesse absolue, tant dans les saveurs que dans l'attention portée aux détails. Le buffet était somptueux et les pâtisseries ont enchanté petits et grands.",
    stars: 5,
  },
  {
    name: "Groupe Hermès",
    event: "Gala annuel — Palais de Tokyo",
    quote:
      "Un partenaire d'exception pour nos événements les plus prestigieux. Le professionnalisme et la créativité culinaire sont tout simplement incomparables.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            TÉMOIGNAGES
          </span>
          <div className="gold-separator mx-auto my-8" />
          <h2 className="text-3xl font-light tracking-wide text-foreground md:text-5xl">
            Prestigieuses <span className="italic">références</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="border border-border bg-background p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 font-body text-sm font-light italic leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="gold-separator mb-4" />
              <p className="font-serif text-sm tracking-wide text-foreground">{t.name}</p>
              <p className="font-body text-xs tracking-wide text-muted-foreground">{t.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
