import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../../imports/HomeV2/svg-1mc7qefnp7";
import AnimatedIcons from "./AnimatedIcons";

const bgColors = [
  "#D3C175", // Yellow
  "#CDC7BF", // Beige
  "#AD927D", // Brown
  "#B56C6A", // Red
  "#BA97BB", // Purple
  "#B2B88B", // Green
];

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedHome({ initialBgColor }: { initialBgColor: string }) {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [colorIndex, setColorIndex] = useState(() => {
    return bgColors.indexOf(initialBgColor);
  });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => {
        const next = (prev + 1) % bgColors.length;
        setBgColor(bgColors[next]);
        return next;
      });
    }, 3000); // Change color every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const transition = "background-color 1.5s ease-in-out";
    document.documentElement.style.transition = transition;
    document.body.style.transition = transition;
    document.getElementById("root")?.style.setProperty("transition", transition);
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.backgroundColor = bgColor;
    document.getElementById("root")?.style.setProperty("background-color", bgColor);
  }, [bgColor]);

  return (
    <motion.div
      data-home-shell="true"
      className="relative flex min-h-[100dvh] w-full flex-col pt-[120px] lg:pt-[100px]"
      style={{ backgroundColor: bgColor, paddingBottom: "max(24px, env(safe-area-inset-bottom))" }}
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Animated SVG icons — fixed, behind all content (z-index: 0) */}
      <AnimatedIcons />

      {/* Content wrapper — full width + padding on mobile, 70vw centered on desktop */}
      <div
        data-content-zone
        className="relative flex flex-col gap-[40px] lg:gap-[50px] w-full md:w-[70vw] md:mx-auto md:px-0"
        style={{
          zIndex: 1,
          paddingLeft: 'clamp(1.25rem, 12vw - 1.5625rem, 12.5rem)',
          paddingRight: 'clamp(1.25rem, 12vw - 1.5625rem, 12.5rem)',
        }}
      >

      {/* Logo */}
      <AnimatedSection delay={0}>
        <header className="flex flex-col items-start w-full">
          <div className="h-[100px] overflow-clip relative shrink-0 w-[122px]" data-name="Logo">
            <svg role="img" aria-label="Abere Selezione" className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.002 100.004">
              <path d={svgPaths.p38df5780} fill="var(--fill-0, black)" id="Union" />
            </svg>
          </div>
        </header>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.1}>
        <nav aria-label="Sezioni del sito" className="flex flex-col lg:flex-row gap-[10px] lg:gap-[30px] items-start leading-[normal] text-black whitespace-nowrap w-full">
          <a href="#selezione" className="relative shrink-0 text-[30px] uppercase no-underline text-black hover:opacity-70 transition-opacity" style={{ fontFamily: 'var(--font-futura-medium)', fontWeight: 'var(--font-weight-medium)' }}>Selezione</a>
          <a href="#importazione" className="relative shrink-0 text-[30px] uppercase no-underline text-black hover:opacity-70 transition-opacity" style={{ fontFamily: 'var(--font-futura-medium)', fontWeight: 'var(--font-weight-medium)' }}>Importazione</a>
          <a href="#distribuzione" className="relative shrink-0 text-[30px] uppercase no-underline text-black hover:opacity-70 transition-opacity" style={{ fontFamily: 'var(--font-futura-medium)', fontWeight: 'var(--font-weight-medium)' }}>Distribuzione</a>
        </nav>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.2}>
        <main className="flex flex-col gap-[10px] items-start text-black w-full">
          <h1 className="sr-only">Abere Selezione — Vini artigianali da produttori indipendenti</h1>
          <p className="leading-[normal] relative shrink-0 text-[24px] w-full italic" style={{ fontFamily: 'var(--font-futura-medium)', fontWeight: 'var(--font-weight-medium)' }}>"Andiamo Abere!"</p>
          <div className="leading-[0] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" style={{ fontFamily: 'var(--font-futura-book)', fontWeight: 'var(--font-weight-book)' }}>
            <section id="selezione">
              <h2 className="sr-only">Selezione di vini artigianali</h2>
              <p className="leading-[normal] mb-0">{`Questa era la frase tra due amici, Thomas Piras (sommelier e ristoratore) e Marco Tinessa (vigneron), per fissare l'appuntamento settimanale, che piano piano è diventato un vero e proprio progetto. `}</p>
            </section>
            <section id="importazione">
              <h2 className="sr-only">Importazione di produttori indipendenti</h2>
              <p className="leading-[normal] mb-0">{`Abere nasce dalla voglia di rimettere al centro la piacevolezza del vino, che in ogni luogo è figlia della capacità dell'uomo di interagire con la natura. Un modo di pensare al terroir che sposta l'attenzione dall'appartenenza geografica, alla capacità di interpretare i fenomeni della natura, in vigna ed in cantina. Crediamo sia questo (in estrema sintesi) ciò che contraddistingue tutti i vini che nel corso degli anni ci hanno davvero emozionato. `}</p>
            </section>
            <section id="distribuzione">
              <h2 className="sr-only">Distribuzione vini</h2>
              <p className="leading-[normal]">Abbiamo cercato di allargare il nostro orizzonte rivolgendo lo sguardo a quei produttori che pur provenendo da aree geograficamente distanti, incarnano perfettamente questi valori. Crediamo questo sia il modo giusto per pensare il vino negli anni a venire, rendendolo accessibile a tutti.</p>
            </section>
          </div>
        </main>
      </AnimatedSection>

      {/* Contacts Section */}
      <AnimatedSection delay={0.3}>
        <address id="contatti" className="flex flex-col lg:flex-row gap-[10px] lg:gap-[30px] items-start leading-[normal] text-black whitespace-nowrap w-full not-italic" style={{ fontFamily: 'var(--font-futura-book)', fontWeight: 'var(--font-weight-book)' }}>
          <a href="https://www.instagram.com/abereselezione/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @abereselezione" className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline text-[16px] text-black hover:opacity-70 transition-opacity">@abereselezione</a>
          <a href="mailto:thomas@abere.it" aria-label="Email Thomas" className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline text-[16px] text-black hover:opacity-70 transition-opacity">thomas@abere.it</a>
          <a href="mailto:amministrazione@abere.it" aria-label="Email amministrazione" className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline text-[16px] text-black hover:opacity-70 transition-opacity">amministrazione@abere.it</a>
          <a href="tel:+393490521622" aria-label="Telefono +39 349 0521622" className="[text-underline-position:from-font] decoration-from-font decoration-solid relative shrink-0 underline text-[16px] text-black hover:opacity-70 transition-opacity">+39 349 0521622</a>
        </address>
      </AnimatedSection>

      {/* Footer Button */}
      <AnimatedSection delay={0.4}>
        <a
          href="https://drive.google.com/file/d/1X4pOdojh5zCZ17zhI66tDvQ8HmbFoGpE/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scarica il catalogo Abere in PDF"
          className="inline-flex items-center justify-center px-[20px] py-[10px] rounded-[30px] border border-black border-solid hover:bg-black transition-colors relative group"
        >
          <p className="leading-[normal] not-italic relative shrink-0 text-[16px] text-black group-hover:text-[#D3C175] uppercase whitespace-nowrap transition-colors" style={{ fontFamily: 'var(--font-futura-medium)', fontWeight: 'var(--font-weight-medium)' }}>Scarica il nostro catalogo</p>
        </a>
      </AnimatedSection>
      </div>{/* end content wrapper */}

      <footer
        className="relative z-[1] mt-auto w-full pt-[40px] text-[10px] leading-[normal] text-black md:mx-auto md:w-[70vw] md:px-0"
        style={{
          fontFamily: 'var(--font-futura-book)',
          fontWeight: 'var(--font-weight-book)',
          paddingLeft: 'clamp(1.25rem, 12vw - 1.5625rem, 12.5rem)',
          paddingRight: 'clamp(1.25rem, 12vw - 1.5625rem, 12.5rem)',
        }}
      >
        <div className="flex flex-col gap-[8px] md:flex-row md:items-center md:justify-between">
          <span>Copyright {currentYear} Abere Srl PI 11077440961</span>
          <a href="/privacy" className="underline text-black hover:opacity-70 transition-opacity">
            Privacy
          </a>
        </div>
      </footer>
    </motion.div>
  );
}
