import { motion } from "motion/react";
import { Brain, Palette, Zap, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
};

function FeatureCard({
  title,
  description,
  icon: Icon,
  gradient,
  delay,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[260px] md:max-w-[300px] group mx-auto"
    >
      {/* Blurred gradient glow */}
      <div
        className="absolute w-full h-[260px] md:h-[300px] opacity-40 rounded-[40px] pointer-events-none"
        style={{ background: gradient, filter: "blur(45px)" }}
      />

      {/* Foreground liquid glass card */}
      <div className="liquid-glass relative self-stretch h-[260px] md:h-[300px] rounded-[40px] z-10 overflow-hidden">
        <div className="w-full h-full p-7 flex flex-col justify-between relative z-10">
          <div className="text-foreground/90">
            <Icon size={32} strokeWidth={2.5} />
          </div>
          <div>
            <h3
              className="font-medium text-xl mb-3 tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif", color: "#E1E0CC" }}
            >
              {title}
            </h3>
            <p className="text-muted-foreground text-[14px] leading-[1.6] font-normal selection:bg-white/20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const cards: FeatureCardProps[] = [
  {
    title: "Deep Focus",
    icon: Brain,
    delay: 0.1,
    description:
      "A workspace engineered for power and quiet. It is calm, durable, and holds your attention when it matters most.",
    gradient: "linear-gradient(137deg, #5b9ffb 0%, #1e5dd7 50%, #1448be 100%)",
  },
  {
    title: "The Canvas",
    icon: Palette,
    delay: 0.2,
    description:
      "Studio is where you define every pixel. It is the hub for each idea, each draft, and each canvas you deliver.",
    gradient: "linear-gradient(137deg, #DEDBC8 0%, #9db8d8 45%, #2a6cc4 100%)",
  },
  {
    title: "In Motion",
    icon: Zap,
    delay: 0.3,
    description:
      "Build lively prototypes that feel alive, bridging the gap between a fleeting view and finished, shipped work.",
    gradient: "linear-gradient(137deg, #2a6cc4 0%, #4a90d9 50%, #DEDBC8 100%)",
  },
];

export function FeatureCards() {
  return (
    <section className="relative z-10 w-full px-6 py-28 md:py-36">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-[-1.5px] text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the way you{" "}
          <em className="not-italic text-muted-foreground">think.</em>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
          Every detail is tuned for sharp focus and inspired work — a quiet set
          of tools that get out of your way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-3 lg:gap-3 w-full max-w-[936px] mx-auto">
        {cards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
