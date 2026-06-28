import { motion } from "motion/react";
import {
  Focus,
  Layers,
  Cloud,
  Sparkles,
  Lock,
  Command,
  type LucideIcon,
} from "lucide-react";

type Tile = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
};

const tiles: Tile[] = [
  {
    title: "Focus Mode",
    description:
      "Silence every distraction with a single keystroke. The world fades, your work sharpens.",
    icon: Focus,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Infinite Canvas",
    description: "Layer ideas without limits.",
    icon: Layers,
    className: "md:col-span-1",
  },
  {
    title: "Always Synced",
    description: "Your spaces follow you everywhere.",
    icon: Cloud,
    className: "md:col-span-1",
  },
  {
    title: "Quiet Intelligence",
    description:
      "Subtle assistance that anticipates your next move without ever shouting for attention.",
    icon: Sparkles,
    className: "md:col-span-2",
  },
  {
    title: "Private by Design",
    description: "End-to-end encrypted. Yours alone.",
    icon: Lock,
    className: "md:col-span-1",
  },
  {
    title: "Command Everything",
    description: "One palette to move at the speed of thought.",
    icon: Command,
    className: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="relative z-10 w-full px-6 py-28 md:py-36">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-[-1.5px] text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          A space for{" "}
          <em className="not-italic text-muted-foreground">everything.</em>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Thoughtful capabilities, arranged to stay out of sight until the
          moment you need them.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
        {tiles.map((tile, i) => {
          const Icon = tile.icon;
          return (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className={`liquid-glass rounded-3xl p-7 flex flex-col justify-between ${tile.className}`}
            >
              <div className="text-foreground/90">
                <Icon size={26} strokeWidth={2} />
              </div>
              <div>
                <h3
                  className="text-foreground text-2xl tracking-tight mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {tile.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tile.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
