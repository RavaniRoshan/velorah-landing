const stats = [
  { value: "12k+", label: "Quiet rebels building daily" },
  { value: "99.9%", label: "Uptime you never think about" },
  { value: "40+", label: "Tools, woven into one space" },
  { value: "4.9", label: "Average maker rating" },
];

export function Stats() {
  return (
    <section className="relative z-10 w-full px-6 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 md:divide-x divide-border">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center px-4"
          >
            <span
              className="text-5xl md:text-6xl text-foreground tracking-[-1.5px]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {stat.value}
            </span>
            <span className="text-muted-foreground text-sm mt-3 max-w-[12rem] leading-relaxed">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
