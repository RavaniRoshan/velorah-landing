const navLinks = [
  { label: "Home", active: true },
  { label: "Studio", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

export function NavBar() {
  return (
    <nav className="relative z-10 flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <a
        href="#"
        className="text-3xl tracking-tight text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        Velorah<sup className="text-xs">®</sup>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href="#"
            className={`text-sm transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${
              link.active ? "text-white" : "text-white/75 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.03] cursor-pointer"
      >
        Begin Journey
      </button>
    </nav>
  );
}
