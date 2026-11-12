import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Cable,
  Check,
  Cylinder,
  DoorOpen,
  Droplets,
  Fence,
  Footprints,
  House,
  Map,
  MapPinned,
  Minus,
  Plus,
  Route as RoutePath,
  Sprout,
  Store,
  TreePine,
  Waves,
} from "lucide-react";
import heroImage from "@/assets/projects-hero.jpg";
import siteLevellingImage from "@/assets/services/site-levelling.jpg";
import roadsImage from "@/assets/services/internal-roads.jpg";
import wallsImage from "@/assets/services/compound-walls.jpg";
import drainageImage from "@/assets/services/drainage.jpg";
import waterImage from "@/assets/services/water-supply.jpg";
import electricalImage from "@/assets/services/electrical.jpg";
import entranceImage from "@/assets/services/entrance-gate.jpg";
import footpathsImage from "@/assets/services/kerbs-footpaths.jpg";
import parksImage from "@/assets/services/parks-landscape.jpg";
import plantationImage from "@/assets/services/avenue-plantation.jpg";
import storageImage from "@/assets/services/water-storage.jpg";
import amenitiesImage from "@/assets/services/additional-amenities.jpg";
import inspectionImage from "@/assets/approach/site-inspection.jpg";
import planningImage from "@/assets/approach/scope-planning.jpg";
import infrastructureImage from "@/assets/approach/infrastructure-development.jpg";
import completionImage from "@/assets/approach/project-completion.jpg";
import serviceRangeImage from "@/assets/why-choose/service-range.jpg";
import projectPlanningImage from "@/assets/why-choose/project-planning.jpg";
import qualityCheckImage from "@/assets/why-choose/quality-check.jpg";
import coordinatedTeamImage from "@/assets/why-choose/coordinated-team.jpg";
import developmentSupportImage from "@/assets/why-choose/development-support.jpg";
import logoImage from "@/assets/logo.png";
import { track } from "@/lib/analytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TITLE = "Full Layout Development Services | Leenus India";
const DESCRIPTION =
  "End-to-end layout development across site preparation, roads, drainage, water supply, electrical works, parks and common amenities.";

export const Route = createFileRoute("/")({
  component: LayoutDevelopmentPage,
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

const services = [
  {
    number: "01",
    title: "Site Levelling & Plot Demarcation",
    icon: Map,
    image: siteLevellingImage,
    imageAlt: "Site preparation and civil works for a layout development",
    items: [
      "Internal site levelling and grading as per the approved layout plan",
      "Plot boundary marking and demarcation",
      "Supply and installation of plot marking stones",
      "Plot numbering and painting for easy identification",
      "Road area cutting and levelling as required",
    ],
  },
  {
    number: "02",
    title: "Internal Road Development",
    icon: RoutePath,
    image: roadsImage,
    imageAlt: "Finished internal road through a residential layout",
    items: [
      "Internal road marking and alignment",
      "Road cutting and excavation as required",
      "Gravel spreading and sub-base preparation",
      "Wet Mix Macadam (WMM) laying and compaction",
      "Bituminous Tar (BT) road construction",
      "Cement Concrete (CC) road construction, where specified",
      "Road dressing, levelling and finishing",
    ],
  },
  {
    number: "03",
    title: "Compound Walls & Fencing",
    icon: Fence,
    image: wallsImage,
    imageAlt: "Completed infrastructure within a residential development",
    items: [
      "Site marking and excavation for foundations",
      "RCC foundation and structural work",
      "Precast concrete compound wall installation",
      "Brick masonry, plastering and wall painting",
      "Fencing pole or wire fencing installation as required",
    ],
  },
  {
    number: "04",
    title: "Underground Drainage & Stormwater",
    icon: Waves,
    image: drainageImage,
    imageAlt: "Roadside drainage works in progress",
    items: [
      "Drainage trench excavation to required alignment and levels",
      "Supply and laying of DWC or ECO drainage pipes",
      "Inspection chamber and manhole installation",
      "Connections from individual plot drainage points to the main network",
      "Trench backfilling and compaction",
      "Stormwater drainage along main roads",
      "Saucer drains along internal roads",
      "Connections from stormwater drains to the main network",
    ],
  },
  {
    number: "05",
    title: "Water Supply Pipeline Network",
    icon: Droplets,
    image: waterImage,
    imageAlt: "Large water supply pipelines installed beside a road",
    items: [
      "Supply and laying of HDPE water pipelines",
      "Installation of pipes in different diameters",
      "Pipeline fittings, specials and valves",
      "Individual household water connections",
      "Irrigation connections for parks and plantation areas",
      "RCC Hume pipe protection at road crossings, where specified",
      "Trench excavation, refilling and finishing",
    ],
  },
  {
    number: "06",
    title: "Electrical Infrastructure",
    icon: Cable,
    image: electricalImage,
    imageAlt: "Infrastructure works along an internal road",
    items: [
      "Overhead electrical infrastructure installation",
      "Precast concrete electrical pole installation",
      "Electrical wiring and distribution arrangements",
      "Streetlight installation with LED fixtures",
      "Electrical distribution boxes and control panels",
      "Underground electrical cable infrastructure, where specified",
      "Solar-powered street lighting, where required",
      "Additional communication line provisions, where included in scope",
    ],
  },
  {
    number: "07",
    title: "Entrance Arch & Main Gate",
    icon: DoorOpen,
    image: entranceImage,
    imageAlt: "Development site with infrastructure works underway",
    items: [
      "RCC-framed entrance arch construction",
      "Brickwork and plastering",
      "Structural finishing and painting",
      "Main entrance gate installation",
      "Security or watchman room construction, where required",
    ],
  },
  {
    number: "08",
    title: "Kerbs & Footpaths",
    icon: Footprints,
    image: footpathsImage,
    imageAlt: "Finished road and pedestrian infrastructure",
    items: [
      "Kerb stone installation along internal roads",
      "Footpath preparation and levelling",
      "Footpath tile installation",
      "Roadside finishing",
      "Saucer drain provisions for rainwater management, where required",
    ],
  },
  {
    number: "09",
    title: "Parks & Landscape Development",
    icon: TreePine,
    image: parksImage,
    imageAlt: "Water infrastructure supporting shared landscape areas",
    items: [
      "Park area preparation and levelling",
      "Plantation and garden bed development",
      "Children’s play equipment installation",
      "Sandpit development and irrigation pipeline arrangements",
      "Park boundary and partition works, where required",
      "Outdoor gym and recreational equipment, where specified",
      "Open activity spaces and other amenities to project requirements",
    ],
  },
  {
    number: "10",
    title: "Avenue Plantation & Greenery",
    icon: Sprout,
    image: plantationImage,
    imageAlt: "Infrastructure beside a landscaped development area",
    items: [
      "Selection and supply of suitable avenue plants",
      "Plantation along designated road stretches",
      "Planting bed preparation",
      "Tree spacing and plantation arrangements",
      "Irrigation provisions, where required",
      "Initial plant maintenance as agreed for the project",
    ],
  },
  {
    number: "11",
    title: "Water Storage & Pumping",
    icon: Cylinder,
    image: storageImage,
    imageAlt: "Water supply pipeline installation",
    items: [
      "RCC underground water sump construction",
      "Overhead water tank installation or construction",
      "Readymade water storage tank installation",
      "Water pump installation",
      "Pump room construction, where required",
      "Associated pipeline and water distribution connections",
    ],
  },
  {
    number: "12",
    title: "Additional Infrastructure & Amenities",
    icon: Building2,
    image: amenitiesImage,
    imageAlt: "Civil infrastructure development project site",
    items: [
      "Sewage Treatment Plant (STP) installation and associated infrastructure",
      "Treated wastewater reuse arrangements for irrigation",
      "Clubhouse construction and related civil works",
      "Swimming pool construction with pumping and filtration arrangements",
      "Communication line infrastructure",
      "Layout signboards and directional signage",
      "Additional common facilities based on project requirements",
    ],
  },
];

const approach = [
  {
    number: "01",
    title: "Site Inspection and Requirement Assessment",
    text: "We understand the project requirements, assess the site conditions and identify the infrastructure works required for development.",
    image: inspectionImage,
    imageAlt: "Engineers reviewing a layout plan at a site marked for development",
  },
  {
    number: "02",
    title: "Scope and Execution Planning",
    text: "Based on the layout plan and project specifications, we identify the required development activities, materials and execution requirements.",
    image: planningImage,
    imageAlt: "Civil engineer planning infrastructure work from project drawings",
  },
  {
    number: "03",
    title: "Infrastructure Development",
    text: "We undertake the agreed civil and infrastructure works, including roads, drainage, water supply, electrical systems and other required facilities.",
    image: infrastructureImage,
    imageAlt: "Construction crew installing drainage and water supply pipelines",
  },
  {
    number: "04",
    title: "Finishing and Project Completion",
    text: "The completed development works are checked and finished according to the agreed project scope and specifications.",
    image: completionImage,
    imageAlt: "Site engineer inspecting a completed residential layout road",
  },
];

const applications = [
  {
    title: "Residential Plotted Layouts",
    text: "Infrastructure for residential plots, including internal roads, drainage, water supply, electrical networks and common amenities.",
    icon: House,
  },
  {
    title: "Gated Communities & Townships",
    text: "Integrated infrastructure for larger residential communities with organised access roads, utility networks, parks and shared facilities.",
    icon: Building2,
  },
  {
    title: "Commercial Layouts",
    text: "Essential infrastructure and civil development works for commercial land developments, based on their intended use.",
    icon: Store,
  },
  {
    title: "Large-Scale Land Development",
    text: "Site preparation, road infrastructure, utility networks and other development activities for larger land parcels.",
    icon: MapPinned,
  },
];

const reasons = [
  { title: "Wide Range of Services", text: "From site preparation and roads to drainage, water supply and landscaping.", image: serviceRangeImage, imageAlt: "A residential layout with road, drainage, utility and landscape work" },
  { title: "Project-Based Solutions", text: "Services planned around site conditions and development requirements.", image: projectPlanningImage, imageAlt: "Engineers planning plots and utility routes on a layout plan" },
  { title: "Quality Workmanship", text: "Careful execution and suitable materials for every infrastructure work.", image: qualityCheckImage, imageAlt: "Engineer checking the finish and level of a completed road" },
  { title: "Coordinated Execution", text: "Multiple development activities managed under one agreed project scope.", image: coordinatedTeamImage, imageAlt: "Infrastructure team coordinating around a shared project plan" },
  { title: "Development Support", text: "Support through each stage of layout infrastructure development.", image: developmentSupportImage, imageAlt: "Engineer discussing a completed layout with its landowner" },
];

const faqs = [
  {
    question: "What is included in layout development?",
    answer:
      "Layout development generally includes site levelling, plot demarcation, internal roads, compound walls, drainage, water supply, electrical infrastructure, footpaths, parks and other required facilities.",
  },
  {
    question: "Do you undertake complete layout development projects?",
    answer:
      "Yes. We undertake different civil and infrastructure works required for layout development. Services can be selected based on the project’s requirements.",
  },
  {
    question: "Do you provide road construction for residential layouts?",
    answer:
      "Yes. We undertake internal road development, including site preparation, gravel spreading, WMM, BT roads and CC roads based on project specifications.",
  },
  {
    question: "Are all layout development services included in every project?",
    answer:
      "No. Each project has different requirements. The services and scope of work are finalised based on site conditions, the layout plan and project specifications.",
  },
];

function LayoutDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0]?.question ?? null);
  const [siteEnquiryOpen, setSiteEnquiryOpen] = useState(false);

  const handleSiteEnquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone Number: ${formData.get("phone") || "Not provided"}`,
      `Project Location: ${formData.get("location")}`,
      `Requirement: ${formData.get("requirement")}`,
    ].join("\n");

    track("contact_team_clicked", { source: "site_enquiry_form" });
    window.location.href = `mailto:projects@leenusindia.com?subject=${encodeURIComponent("Layout development enquiry")}&body=${encodeURIComponent(message)}`;
    setSiteEnquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Leenus India home" className="flex items-center">
            <img src={logoImage} alt="Leenus India" className="h-12 w-auto object-contain sm:h-14" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-body lg:flex" aria-label="Main navigation">
            <a className="transition-colors hover:text-brand" href="#services">Services</a>
            <a className="transition-colors hover:text-brand" href="#approach">Our approach</a>
            <a className="transition-colors hover:text-brand" href="#faq">FAQs</a>
          </nav>
          <a
            href="#contact"
            onClick={() => track("request_pricing_clicked", { source: "header" })}
            className="pill-cta bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate flex h-[280px] items-center justify-center overflow-hidden sm:h-[340px] lg:h-[400px]">
          <img src={heroImage} alt="Underground drainage pipeline installation at a development site" className="absolute inset-0 -z-20 size-full object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-[#245887]/75" aria-hidden="true" />
          <h1 className="mx-auto max-w-[1320px] px-5 text-center text-[40px] font-extrabold uppercase leading-tight tracking-wide text-white sm:px-8">
            Full Layout Development Services
          </h1>
        </section>

        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1320px] space-y-5 px-5 text-[15px] leading-[1.8] text-[#171717] sm:px-8">
            <p>
              Developing a layout requires proper planning and the right infrastructure to make the land ready for its intended use. From site levelling and internal roads to drainage, water supply and electrical connections, every part plays an important role in the development.
            </p>
            <p>
              At Leenus India, we undertake full layout development works covering essential civil and infrastructure requirements. As experienced layout development contractors, we handle different stages of development, helping builders, developers and landowners create well-planned layouts with the required facilities.
            </p>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[740px]">
                <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-tight text-[#35689d]">Layout Development Services</h2>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:gap-3">Discuss your project <ArrowRight size={16} /></a>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className="group flex h-full flex-col overflow-hidden border border-line bg-card transition-colors hover:border-[#245887]/50">
                    <div className="relative h-[178px] overflow-hidden bg-surface">
                      <img src={service.image} alt={service.imageAlt} loading="lazy" className="size-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="flex size-12 items-center justify-center bg-[#e8f1fb] text-[#245887]"><Icon size={23} strokeWidth={1.8} aria-hidden="true" /></span>
                      </div>
                      <h3 className="text-[18px] font-bold uppercase leading-snug">{service.title}</h3>
                      <ul className="mt-4 space-y-2.5">
                        {service.items.map((item) => (
                          <li className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-body" key={item}>
                            <Check className="mt-0.5 shrink-0 text-[#245887]" size={15} strokeWidth={2.5} aria-hidden="true" />
                            <span className="text-[15px]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <h2 className="mb-8 text-[28px] font-extrabold uppercase tracking-tight text-[#35689d]">How We Approach Layout Development Projects</h2>
            <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {approach.map((step) => (
                <li key={step.number} className="flex flex-col border border-line bg-white">
                  <img src={step.image} alt={step.imageAlt} loading="lazy" className="h-[170px] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-2 text-xs font-bold tracking-[.14em] text-[#245887]">STEP {step.number}</span>
                    <h3 className="text-[18px] font-bold uppercase leading-snug text-foreground">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.7] text-body">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">
              <div>
                <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-tight text-[#35689d]">Where Are Our Layout Development Services Used?</h2>
                <button type="button" onClick={() => setSiteEnquiryOpen(true)} className="pill-cta mt-7 bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90">Tell us about your site</button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {applications.map((item, index) => (
                  <article key={item.title} className="border border-line bg-card p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[.15em] text-[#245887]">0{index + 1}</span>
                      <span className="flex size-11 items-center justify-center bg-[#e8f1fb] text-[#245887]"><item.icon size={21} strokeWidth={1.8} aria-hidden="true" /></span>
                    </div>
                    <h3 className="mt-4 text-[18px] font-bold uppercase leading-snug">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-body">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[28px] font-extrabold uppercase leading-tight tracking-tight text-[#35689d]">Why Choose Leenus India for Layout Development?</h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-body">
                Layout development involves several civil and infrastructure works that need proper coordination. At Leenus India, we undertake multiple development activities to help simplify project execution.
              </p>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
              {reasons.map((reason, index) => (
                <li key={reason.title} className={`flex flex-col border border-line bg-white p-5 shadow-sm sm:p-6 ${index < 3 ? "xl:col-span-2" : "xl:col-span-3"}`}>
                  <img src={reason.image} alt={reason.imageAlt} loading="lazy" className="h-[190px] w-full object-cover" />
                  <div className="pt-5">
                    <span className="text-xs font-bold tracking-[.14em] text-[#245887]">0{index + 1}</span>
                    <h3 className="mt-2 text-[18px] font-bold uppercase leading-snug text-foreground">{reason.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-body">{reason.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="mailto:projects@leenusindia.com?subject=Layout%20development%20quote" onClick={() => track("request_pricing_clicked", { source: "why_choose_section" })} className="pill-cta bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90">Get a Quote</a>
              <a href="mailto:projects@leenusindia.com?subject=Layout%20development%20enquiry" onClick={() => track("contact_team_clicked")} className="pill-cta bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90">Contact Us</a>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[.62fr_1.38fr] lg:gap-16">
            <div className="max-w-[460px]">
              <h2 className="text-[28px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#35689d]">Frequently Asked Questions (FAQs)</h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#171717]">For more information on our layout development services or to discuss your project needs, please reach out to us:</p>
              <a href="mailto:projects@leenusindia.com?subject=Layout%20development%20enquiry" onClick={() => track("contact_team_clicked")} className="pill-cta mt-7 bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90">Get a Quote</a>
            </div>
            <div className="divide-y divide-line">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === faq.question;
                const answerId = `faq-${index + 1}`;
                return (
                  <div key={faq.question} className="border-b border-line py-5 first:pt-0">
                    <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : faq.question)} className="flex w-full cursor-pointer items-start gap-3 text-left text-[18px] font-bold leading-7 text-foreground">
                      <span className="mt-[2px] flex size-5 shrink-0 items-center justify-center text-[#245887]" aria-hidden="true">
                        {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                      </span>
                      <span>{faq.question}</span>
                    </button>
                    <div id={answerId} aria-hidden={!isOpen} className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="min-h-0 overflow-hidden">
                        <p className="max-w-3xl pl-8 pt-3 text-[15px] leading-7 text-body">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Dialog open={siteEnquiryOpen} onOpenChange={setSiteEnquiryOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-w-[760px] rounded-none border-0 bg-white p-0 shadow-2xl sm:rounded-none">
          <div className="max-h-[88vh] overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
            <DialogHeader className="mb-7 pr-10 text-left">
              <DialogTitle className="text-[28px] font-extrabold uppercase leading-tight text-[#35689d]">Get in Touch</DialogTitle>
              <DialogDescription className="pt-2 text-[15px] leading-6 text-body">
                Share a few details about your layout development project.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSiteEnquirySubmit} className="space-y-4">
              <div>
                <label htmlFor="enquiry-name" className="sr-only">Name</label>
                <input id="enquiry-name" name="name" autoComplete="name" required placeholder="Name *" className="h-[58px] w-full rounded-md border-2 border-[#202124] bg-white px-4 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#35689d]" />
              </div>
              <div>
                <label htmlFor="enquiry-email" className="sr-only">Email</label>
                <input id="enquiry-email" name="email" type="email" autoComplete="email" required placeholder="Email *" className="h-[58px] w-full rounded-md border-2 border-[#202124] bg-white px-4 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#35689d]" />
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="sr-only">Phone Number</label>
                <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone Number" className="h-[58px] w-full rounded-md border-2 border-[#202124] bg-white px-4 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#35689d]" />
              </div>
              <div>
                <label htmlFor="enquiry-location" className="sr-only">Project Location</label>
                <input id="enquiry-location" name="location" autoComplete="address-level2" required placeholder="Project Location *" className="h-[58px] w-full rounded-md border-2 border-[#202124] bg-white px-4 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#35689d]" />
              </div>
              <div>
                <label htmlFor="enquiry-requirement" className="sr-only">Requirement</label>
                <textarea id="enquiry-requirement" name="requirement" required placeholder="Requirement *" rows={5} className="w-full resize-y rounded-md border-2 border-[#202124] bg-white px-4 py-4 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-[#35689d]" />
              </div>
              <button type="submit" className="pill-cta bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90">Send Enquiry</button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-line bg-surface/70 py-8">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 px-5 text-xs text-muted-foreground sm:flex-row sm:px-8 sm:text-sm">
          <a href="#top" aria-label="Leenus India home"><img src={logoImage} alt="Leenus India" className="h-12 w-auto object-contain" /></a>
        </div>
      </footer>
    </div>
  );
}
