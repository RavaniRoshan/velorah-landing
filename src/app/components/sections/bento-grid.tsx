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
  image?: string;
};

// Cohesive atmospheric coastal imagery — same visual family as the hero:
// misty cliffs, twilight seascapes, fog over the ocean.
const tiles: Tile[] = [
  {
    title: "Focus Mode",
    description:
      "Silence every distraction with a single keystroke. The world fades, your work sharpens.",
    icon: Focus,
    className: "md:col-span-2 md:row-span-2",
    image:
      "https://images.unsplash.com/photo-1535040761622-9edd123edbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1000",
  },
  {
    title: "Infinite Canvas",
    description: "Layer ideas without limits.",
    icon: Layers,
    className: "md:col-span-1",
    image:
      "https://images.unsplash.com/photo-1744901212945-63c2fde41ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Always Synced",
    description: "Your spaces follow you everywhere.",
    icon: Cloud,
    className: "md:col-span-1",
    image:
      "https://images.unsplash.com/photo-1722521090736-a2dc3d250252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Quiet Intelligence",
    description:
      "Subtle assistance that anticipates your next move without ever shouting for attention.",
    icon: Sparkles,
    className: "md:col-span-2",
    image:
      "https://images.unsplash.com/photo-1574009183716-a8f34cfffc75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    title: "Private by Design",
    description: "End-to-end encrypted. Yours alone.",
    icon: Lock,
    className: "md:col-span-1",
    image:
      "https://images.unsplash.com/photo-1654011645334-d39f8ec52fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Command Everything",
    description: "One palette to move at the speed of thought.",
    icon: Command,
    className: "md:col-span-2",
    image:
      "https://images.unsplash.com/photo-1683395785493-64f96e7fdaee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
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
              className={`liquid-glass rounded-3xl p-7 flex flex-col justify-between relative ${tile.className}`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
                e.currentTarget.style.setProperty("--glow-opacity", "1");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("--glow-opacity", "0");
              }}
            >
              {/* Background media — clipped by liquid-glass overflow:hidden */}
              {tile.image && (
                <img
                  src={tile.image}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
                />
              )}

              {/* Dark overlay so glass surface stays dominant */}
              {tile.image && (
                <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
              )}

              {/* Mouse-tracking glow blob */}
              <div
                className="pointer-events-none absolute rounded-full z-[2]"
                style={{
                  width: 220,
                  height: 220,
                  left: "var(--glow-x, 50%)",
                  top: "var(--glow-y, 50%)",
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(180,210,255,0.08) 45%, transparent 70%)",
                  filter: "blur(24px)",
                  opacity: "var(--glow-opacity, 0)",
                  transition: "opacity 0.35s ease",
                }}
              />

              <div className="relative z-10 text-foreground/90">
                <Icon size={26} strokeWidth={2} />
              </div>
              <div className="relative z-10">
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
