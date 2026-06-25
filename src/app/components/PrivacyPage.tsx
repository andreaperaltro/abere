import svgPaths from "../../imports/HomeV2/svg-1mc7qefnp7";

export default function PrivacyPage() {
  const updatedAt = "25 giugno 2026";

  return (
    <main
      className="min-h-[100dvh] bg-[#CDC7BF] text-black"
      style={{
        fontFamily: "var(--font-futura-book)",
        fontWeight: "var(--font-weight-book)",
      }}
    >
      <div
        className="mx-auto flex min-h-[100dvh] w-full flex-col gap-[48px] py-[64px] md:w-[70vw]"
        style={{
          paddingLeft: "clamp(1.25rem, 12vw - 1.5625rem, 12.5rem)",
          paddingRight: "clamp(1.25rem, 12vw - 1.5625rem, 12.5rem)",
        }}
      >
        <header className="flex flex-col items-start gap-[48px]">
          <a href="/" aria-label="Torna alla home" className="block h-[100px] w-[122px]">
            <svg
              role="img"
              aria-label="Abere Selezione"
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 122.002 100.004"
            >
              <path d={svgPaths.p38df5780} fill="black" />
            </svg>
          </a>
          <div className="flex flex-col gap-[10px]">
            <p
              className="text-[16px] uppercase leading-[normal]"
              style={{
                fontFamily: "var(--font-futura-medium)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Privacy
            </p>
            <h1
              className="max-w-[760px] text-[30px] uppercase leading-[1.05]"
              style={{
                fontFamily: "var(--font-futura-medium)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Informativa privacy
            </h1>
          </div>
        </header>

        <div className="flex max-w-[760px] flex-col gap-[28px] text-[16px] leading-[1.45]">
          <section className="flex flex-col gap-[8px]">
            <h2 className="text-[18px] uppercase leading-[normal]" style={{ fontFamily: "var(--font-futura-medium)", fontWeight: "var(--font-weight-medium)" }}>
              Titolare
            </h2>
            <p>
              Il titolare del trattamento è Abere Srl, PI 11077440961. Per richieste relative alla privacy puoi scrivere a{" "}
              <a className="underline text-black" href="mailto:amministrazione@abere.it">
                amministrazione@abere.it
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-[8px]">
            <h2 className="text-[18px] uppercase leading-[normal]" style={{ fontFamily: "var(--font-futura-medium)", fontWeight: "var(--font-weight-medium)" }}>
              Dati trattati
            </h2>
            <p>
              Questo sito è informativo e non raccoglie dati tramite form, account, newsletter o aree riservate. Se ci contatti via email o telefono, useremo i dati che ci fornisci solo per rispondere alla tua richiesta.
            </p>
          </section>

          <section className="flex flex-col gap-[8px]">
            <h2 className="text-[18px] uppercase leading-[normal]" style={{ fontFamily: "var(--font-futura-medium)", fontWeight: "var(--font-weight-medium)" }}>
              Cookie
            </h2>
            <p>
              Il sito non utilizza cookie di profilazione, strumenti di tracciamento pubblicitario o analytics di terze parti. Per questo non viene mostrato un banner cookie.
            </p>
          </section>

          <section className="flex flex-col gap-[8px]">
            <h2 className="text-[18px] uppercase leading-[normal]" style={{ fontFamily: "var(--font-futura-medium)", fontWeight: "var(--font-weight-medium)" }}>
              Servizi tecnici
            </h2>
            <p>
              Il sito è ospitato su Vercel. Come normale per i servizi di hosting, possono essere trattati dati tecnici necessari al funzionamento e alla sicurezza del sito, come indirizzo IP, data e ora della richiesta, pagina visitata e informazioni sul browser.
            </p>
          </section>

          <section className="flex flex-col gap-[8px]">
            <h2 className="text-[18px] uppercase leading-[normal]" style={{ fontFamily: "var(--font-futura-medium)", fontWeight: "var(--font-weight-medium)" }}>
              Link esterni
            </h2>
            <p>
              Il sito contiene link verso Instagram, Google Drive e contatti email o telefonici. Quando apri servizi esterni, si applicano le rispettive informative privacy.
            </p>
          </section>

          <section className="flex flex-col gap-[8px]">
            <h2 className="text-[18px] uppercase leading-[normal]" style={{ fontFamily: "var(--font-futura-medium)", fontWeight: "var(--font-weight-medium)" }}>
              Diritti
            </h2>
            <p>
              Puoi chiedere accesso, rettifica, cancellazione o limitazione dei dati personali che ci hai comunicato, scrivendo a{" "}
              <a className="underline text-black" href="mailto:amministrazione@abere.it">
                amministrazione@abere.it
              </a>
              .
            </p>
          </section>

          <p className="pt-[12px] text-[12px] leading-[normal]">Ultimo aggiornamento: {updatedAt}</p>
        </div>

        <footer className="mt-auto flex flex-col gap-[10px] text-[12px] leading-[normal] md:flex-row md:justify-between">
          <a className="underline text-black" href="/">
            Torna alla home
          </a>
          <span>Copyright {new Date().getFullYear()} Abere Srl PI 11077440961</span>
        </footer>
      </div>
    </main>
  );
}
