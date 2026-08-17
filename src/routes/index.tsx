import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/projects-hero.jpg";
import logoImage from "@/assets/logo.png";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { ScrollingLogos } from "@/components/projects/ScrollingLogos";
import { track } from "@/lib/analytics";

const TITLE = "PROJECTS ACROSS THE STATES | Leenus India";
const DESCRIPTION =
  "Explore Leenus India infrastructure projects across all districts in Telangana and Andhra Pradesh.";

export const Route = createFileRoute("/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6">
          <a
            href="/"
            id="header-logo-link"
            className="flex items-center py-1 group transition-opacity hover:opacity-90"
          >
            <img
              src={logoImage}
              alt="Leenus India"
              className="h-12 sm:h-14 md:h-16 w-auto max-w-[220px] sm:max-w-[280px] object-contain"
            />
          </a>
          <a
            href="#contact"
            onClick={() => track("request_pricing_clicked", { source: "header" })}
            className="pill-cta bg-brand-red text-primary-foreground hover:bg-brand-red/90 text-xs sm:text-sm py-2.5 px-6 ml-auto shadow-sm"
          >
            Request Pricing
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[380px] sm:min-h-[420px] md:min-h-[460px] items-center justify-center text-center overflow-hidden">
          <img
            src={heroImage}
            alt="Leenus India infrastructure projects background"
            width={1920}
            height={1088}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/85" />

          <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col items-center justify-center px-6 py-16">
            <h1 className="text-center font-black tracking-wider text-primary-foreground uppercase drop-shadow-md text-[40px] leading-tight">
              PROJECTS ACROSS THE STATES
            </h1>
          </div>
        </section>

        {/* Scrolling Logos Banner between Hero and District Explorer */}
        <ScrollingLogos />

        {/* Interactive District Explorer */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-[1320px] px-6 text-center">
            <h2 className="text-[26px] font-extrabold tracking-tight text-foreground uppercase leading-tight md:text-[34px] lg:text-[40px]">
              Explore Our Projects By District
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-[1320px] px-4 sm:px-6">
            <ProjectExplorer />
          </div>
        </section>

        {/* Conversion / Contact Section */}
        <section id="contact" className="scroll-mt-20 bg-brand-dark py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-[28px] font-bold text-primary-foreground leading-tight md:text-[36px]">
              Planning an Infrastructure Project?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              Speak with the Leenus India team about water, sewer, stormwater and electrical
              infrastructure requirements for your upcoming development.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:projects@leenusindia.com?subject=Pricing%20request"
                onClick={() => track("request_pricing_clicked", { source: "footer_cta" })}
                className="pill-cta bg-brand-red text-primary-foreground hover:bg-brand-red/90 px-7 py-3"
              >
                Request Pricing
              </a>
              <a
                href="mailto:projects@leenusindia.com?subject=Project%20enquiry"
                onClick={() => track("contact_team_clicked")}
                className="pill-cta border border-primary-foreground/70 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-brand-dark px-7 py-3"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line py-10 bg-surface/60">
        <div className="mx-auto flex max-w-[1320px] flex-col sm:flex-row items-center justify-between gap-6 px-6 text-xs sm:text-sm text-muted-foreground">
          <a
            href="/"
            id="footer-logo-link"
            className="flex items-center group transition-opacity hover:opacity-90"
          >
            <img
              src={logoImage}
              alt="Leenus India"
              className="h-11 sm:h-13 md:h-14 w-auto max-w-[220px] sm:max-w-[260px] object-contain"
            />
          </a>
          <p className="text-center sm:text-right font-medium text-body">
            Water · Sewer · Stormwater · Electrical Infrastructure — Telangana &amp; Andhra Pradesh
          </p>
        </div>
      </footer>
    </div>
  );
}
