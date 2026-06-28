import { useEffect, useRef } from "react";
import { Twitter, Linkedin, Github, Send } from "lucide-react";

const navColumns = [
  {
    title: "Navigation",
    links: ["How it works", "Features", "Pricing", "FAQ"],
  },
  {
    title: "Company",
    links: ["Journal", "About", "Terms & Conditions", "Privacy Policy"],
  },
];

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-[9px] bg-[#0e1014] flex items-center justify-center text-white/90 shadow-lg transition-all duration-200 hover:bg-black hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    function fitWatermark() {
      const svg = svgRef.current;
      const text = textRef.current;
      if (!svg || !text) return;
      try {
        const bbox = text.getBBox();
        svg.setAttribute(
          "viewBox",
          `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
        );
      } catch {
        /* getBBox can throw before layout — ignore */
      }
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark);
    } else {
      fitWatermark();
    }
    window.addEventListener("resize", fitWatermark);
    return () => window.removeEventListener("resize", fitWatermark);
  }, []);

  return (
    <footer className="relative z-10 w-full px-6 pt-20 pb-0">
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-[350px_1fr] gap-4 items-stretch">
        {/* Left card — video background */}
        <div className="relative min-h-[340px] rounded-[28px] p-8 overflow-hidden flex flex-col justify-between bg-[#072031] shadow-[0_12px_40px_rgba(21,76,189,0.25)]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4"
              type="video/mp4"
            />
          </video>

          <div className="relative z-[1] flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/15 border-[1.5px] border-white/85 flex items-center justify-center text-white text-base font-bold tracking-tight">
              V
            </div>
            <span
              className="text-white text-2xl tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah
            </span>
          </div>

          <div className="relative z-[1] mt-auto mb-7">
            <p className="text-white text-[19px] leading-[1.45]">
              Spaces for sharp focus,
              <br />
              <span className="text-white/65">made for deep work.</span>
            </p>
          </div>

          <div className="relative z-[1] flex items-center justify-between gap-3">
            <span
              className="text-white/90 text-lg tracking-wide"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Stay in touch!
            </span>
            <div className="flex gap-[7px]">
              <SocialIcon>
                <Twitter size={15} />
              </SocialIcon>
              <SocialIcon>
                <Linkedin size={15} />
              </SocialIcon>
              <SocialIcon>
                <Github size={15} />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Right card — navy glass */}
        <div className="liquid-glass relative rounded-[28px] p-10 flex flex-col justify-between bg-white/[0.02]">
          {/* Floating lucky badge */}
          <div className="absolute -top-9 right-10 z-10 flex flex-col items-start gap-1.5">
            <div
              className="w-24 h-24 rounded-[22px] flex items-center justify-center shadow-[inset_3px_3px_8px_rgba(255,255,255,0.35),inset_-3px_-3px_12px_rgba(0,0,0,0.18),8px_14px_28px_rgba(20,72,200,0.35)]"
              style={{
                transform: "rotate(-10deg)",
                background:
                  "linear-gradient(135deg, #5b9ffb 0%, #1e5dd7 55%, #1448be 100%)",
              }}
            >
              <span
                className="text-white text-[42px] leading-none"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  transform: "rotate(10deg)",
                  textShadow: "0 3px 6px rgba(0,0,0,0.25)",
                }}
              >
                V
              </span>
            </div>
            <div
              className="flex items-center gap-1.5 mt-1"
              style={{ transform: "rotate(-4deg)" }}
            >
              <span
                className="text-muted-foreground text-xl whitespace-nowrap"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Feeling lucky?
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-[72px] gap-y-10 pt-2">
            {navColumns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h4
                  className="text-muted-foreground text-2xl italic mb-[18px]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {col.title}
                </h4>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-foreground text-sm font-medium mb-3.5 transition-colors hover:text-[#5b9ffb]"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-12">
            <p className="text-muted-foreground text-xs">
              © 2026 Velorah. All rights reserved.
            </p>

            <div className="flex flex-col gap-3.5">
              <h4 className="text-muted-foreground text-[15px] leading-[1.45]">
                Ideas move fast.
                <br />
                <strong
                  className="block text-foreground text-[19px]"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Stay ahead with Velorah.
                </strong>
              </h4>
              <div className="flex items-center w-full md:w-[310px] liquid-glass rounded-xl p-[5px]">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 px-3.5 py-[11px] bg-transparent border-none outline-none text-foreground text-[13.5px] placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  className="flex items-center gap-1.5 px-5 py-[11px] bg-[#111214] text-white text-[13.5px] font-medium rounded-lg shadow-lg transition-all duration-200 hover:bg-black hover:-translate-y-px"
                >
                  <Send size={13} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extended blue sign area with giant wordmark */}
      <div className="w-full bg-background mt-12">
        <div
          className="max-w-[1150px] mx-auto pointer-events-none select-none"
          style={{ lineHeight: 0 }}
        >
          <svg
            ref={svgRef}
            viewBox="62 95 876 175"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-auto overflow-visible"
          >
            <text
              ref={textRef}
              x="500"
              y="240"
              textAnchor="middle"
              fontSize="320"
              style={{
                fontFamily: "'Instrument Serif', serif",
                letterSpacing: "-0.03em",
                fill: "rgba(255, 255, 255, 0.06)",
              }}
            >
              VELORAH
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}
