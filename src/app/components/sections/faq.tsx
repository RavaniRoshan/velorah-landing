import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const faqs = [
  {
    q: "What exactly is Velorah?",
    a: "Velorah is a quiet workspace for deep thinkers and bold creators — a single place to focus, draft, and ship without the noise of a dozen disconnected apps.",
  },
  {
    q: "Who is it built for?",
    a: "Deep thinkers, bold creators, and quiet rebels. If you do your best work in long, uninterrupted stretches, Velorah was designed with you in mind.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. Your spaces are available offline and sync seamlessly the moment you reconnect, so a dropped connection never breaks your flow.",
  },
  {
    q: "How is my data handled?",
    a: "Everything is end-to-end encrypted and private by design. Your work belongs to you alone — we never train on it or sell it.",
  },
  {
    q: "Can I bring my existing tools?",
    a: "Velorah connects with 40+ tools out of the box, weaving them into one calm surface instead of scattering your attention across tabs.",
  },
  {
    q: "Is there a free trial?",
    a: "Begin your journey free, no card required. Upgrade only when Velorah has earned a permanent place in your day.",
  },
];

export function Faq() {
  return (
    <section className="relative z-10 w-full px-6 py-28 md:py-36">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.0] tracking-[-1.5px] text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Questions, <em className="not-italic text-muted-foreground">answered.</em>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-foreground text-base hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
