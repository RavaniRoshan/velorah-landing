export function CtaBand() {
  return (
    <section className="relative z-10 w-full px-6 py-28 md:py-40">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2
          className="text-4xl sm:text-6xl md:text-7xl leading-[0.98] tracking-[-2px] text-foreground max-w-3xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Your best work is waiting in the{" "}
          <em className="not-italic text-muted-foreground">silence.</em>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mt-8 leading-relaxed">
          Step away from the chaos. Build something that matters, in a space made
          for sharp focus.
        </p>
        <button
          type="button"
          className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 transition-transform hover:scale-[1.03] cursor-pointer"
        >
          Begin Journey
        </button>
      </div>
    </section>
  );
}
