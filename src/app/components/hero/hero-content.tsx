export function HeroContent() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px]">
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Where{" "}
        <em className="not-italic text-black drop-shadow-[0_1px_6px_rgba(255,255,255,0.35)]">
          dreams
        </em>{" "}
        rise{" "}
        <em className="not-italic text-black drop-shadow-[0_1px_6px_rgba(255,255,255,0.35)]">
          through the silence.
        </em>
      </h1>

      <p className="animate-fade-rise-delay text-white text-base sm:text-lg max-w-2xl mt-8 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.55)]">
        We're designing tools for deep thinkers, bold creators, and quiet
        rebels. Amid the chaos, we build digital spaces for sharp focus and
        inspired work.
      </p>

      <button
        type="button"
        className="liquid-glass animate-fade-rise-delay-2 rounded-full px-14 py-5 text-base text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] mt-12 transition-transform hover:scale-[1.03] cursor-pointer"
      >
        Begin Journey
      </button>
    </section>
  );
}
