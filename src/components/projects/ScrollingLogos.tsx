import { Building2, ShieldCheck, HardHat, LandPlot, Network } from "lucide-react";

const CLIENTS = [
  { name: "AADHAAR BUILDERS & INFRA", icon: Building2 },
  { name: "HPR INFRA LLP", icon: HardHat },
  { name: "SRI ADITYA HOMES", icon: LandPlot },
  { name: "VASAVI GROUP", icon: Building2 },
  { name: "SUMADHURA INFRACON", icon: Network },
  { name: "APARNA CONSTRUCTIONS", icon: ShieldCheck },
  { name: "GREEN SPACE DEVELOPERS", icon: LandPlot },
  { name: "VASUDEVA INFRA DEVELOPERS", icon: HardHat },
  { name: "HASINI ESTATES", icon: Building2 },
  { name: "ZAHAUSE PROPERTIES", icon: Network },
  { name: "KAPIL PRECAST & INFRA", icon: HardHat },
  { name: "SRI SRINIVASA BUILDERS", icon: Building2 },
  { name: "NISRA REALCON", icon: LandPlot },
  { name: "CHIRAHARITA LIMITED", icon: ShieldCheck },
  { name: "EGK INFRA PROJECTS", icon: HardHat },
  { name: "SAMVRUDDI ESTATES", icon: LandPlot },
  { name: "SUBHA GRUHA PROJECTS", icon: Building2 },
];

export function ScrollingLogos() {
  return (
    <section className="border-y border-line bg-surface/60 py-6 overflow-hidden select-none">
      <div className="mx-auto max-w-[1320px] px-6 text-center mb-3">
        <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
          Trusted Infrastructure Partner For Leading Developers &amp; Project Clients
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="animate-marquee flex items-center gap-8 py-2 shrink-0">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => {
            const Icon = client.icon;
            return (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center gap-2.5 rounded-full border border-line/80 bg-background px-5 py-2.5 shadow-2xs transition-all hover:border-brand-red/50 hover:bg-background"
              >
                <Icon className="size-4 text-brand-red shrink-0" />
                <span className="text-xs font-bold tracking-wide text-foreground whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
