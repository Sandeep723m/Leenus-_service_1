import { geoAndhra, geoTelangana, type GeoState } from "./geo";

export type StateSlug = "telangana" | "andhra-pradesh";
export type ProjectStatus = "Completed" | "Ongoing" | "Temporarily Paused";
export type ServiceTag = "Water" | "Sewer" | "Stormwater" | "Electrical";

export type Project = {
  id: string;
  projectName: string;
  state: StateSlug;
  /** Official district name — must match the GeoJSON district name. */
  district: string;
  /** Display label where the official name differs from local usage. */
  districtLabel?: string;
  locality: string;
  client: string;
  services: ServiceTag[];
  status: ProjectStatus;
  completionDate: string;
  description: string;
  mapsUrl?: string;
  featured?: boolean;
};

export const STATES: { slug: StateSlug; name: string; geo: GeoState }[] = [
  { slug: "telangana", name: "Telangana", geo: geoTelangana },
  { slug: "andhra-pradesh", name: "Andhra Pradesh", geo: geoAndhra },
];

export const projects: Project[] = [
  // ── Telangana (19 Projects) ───────────────────────────────────────────
  {
    id: "tg-01",
    projectName: "SRI SAI VENKATA HILLS",
    state: "telangana",
    district: "Khammam",
    locality: "MY HOME NISHADA KOKAPETA HYDERABAD 500075",
    client: "SRI SAI VENKATA HILLS",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "04-11-2022",
    description: "Internal water supply and sewer collection network execution.",
  },
  {
    id: "tg-02",
    projectName: "SRINIDHI ENCLAVE LLP",
    state: "telangana",
    district: "Khammam",
    locality: "Khammam",
    client: "SRINIDHI ENCLAVE LLP",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "08-06-2022",
    mapsUrl: "https://maps.app.goo.gl/Wp9392DKGXHBjUa7",
    description: "Water distribution reticulation and underground sewer package.",
  },
  {
    id: "tg-03",
    projectName: "ANANTHA PROJECTS & TECHNICAL SERVICES PRIVATE LIMITED",
    state: "telangana",
    district: "Hyderabad",
    locality: "Hyderabad",
    client: "ANANTHA PROJECTS & TECHNICAL SERVICES PRIVATE LIMITED",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "01-07-2023",
    mapsUrl: "https://maps.app.goo.gl/w1ayVnDkLJJ9cGm6",
    description: "Water supply mains, distribution networks and gravity sewer lines.",
  },
  {
    id: "tg-04",
    projectName: "VASUDEVA INFRA DEVELOPERS",
    state: "telangana",
    district: "Khammam",
    locality: "Sy. No:181/Part & 182/Part Maddulapalli Revenue Village, Khammam Rural",
    client: "VASUDEVA INFRA DEVELOPERS",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "02-06-2023",
    description:
      "Water and sewer infrastructure for Maddulapalli venture under Stambhadri Urban Development Authority (SUDA).",
  },
  {
    id: "tg-05",
    projectName: "AADHAAR BUILDERS AND INFRASTRUCTURE LLP",
    state: "telangana",
    district: "Hyderabad",
    locality: "Bandlaguda Jagir, Hyderabad",
    client: "AADHAAR BUILDERS AND INFRASTRUCTURE LLP",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "03-11-2023",
    mapsUrl: "https://maps.app.goo.gl/XxWPFJYVfG5MimvL9",
    description: "Internal water supply and gravity sewer network for residential development.",
  },
  {
    id: "tg-06",
    projectName: "HPR INFRA LLP",
    state: "telangana",
    district: "Hyderabad",
    locality: "Flat No: 404, Siri Enclave, Srinagar Colony, Hyderabad",
    client: "HPR INFRA LLP",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "04-08-2023",
    description: "Water supply and underground drainage works executed alongside civil program.",
  },
  {
    id: "tg-07",
    projectName: "SANTEJA HOMES",
    state: "telangana",
    district: "Hyderabad",
    locality: "3/100/2/B, Haritha Complex, Nizampet, Hyderabad",
    client: "SANTEJA HOMES",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "04-08-2023",
    description: "Water supply reticulation and sewer collection system.",
  },
  {
    id: "tg-08",
    projectName: "SRI UHA DEVELOPERS",
    state: "telangana",
    district: "Ranga Reddy",
    districtLabel: "Rangareddy",
    locality: "Rangareddy",
    client: "SHYAM KUMAR PODICHETTY",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "06-01-2023",
    mapsUrl: "https://maps.app.goo.gl/VHjbEJ5zSaDAMHS27",
    description: "Water and sewer utility package.",
  },
  {
    id: "tg-09",
    projectName: "P.V.INFRA DEVELOPERS",
    state: "telangana",
    district: "Khammam",
    locality: "Khammam",
    client: "P.V.INFRA DEVELOPERS",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "10-11-2023",
    mapsUrl: "https://maps.app.goo.gl/ry9safHrvBab8yqq9",
    description: "Water distribution mains and sewer collection infrastructure.",
  },
  {
    id: "tg-10",
    projectName: "GRUPE BUILDERS & DEVELOPERS LLP",
    state: "telangana",
    district: "Ranga Reddy",
    districtLabel: "Rangareddy",
    locality: "Rangareddy",
    client: "Mr. Jagath Reddy",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "02-05-2024",
    mapsUrl: "https://maps.app.goo.gl/nfdNMxYZCeifJfAt5",
    description: "Water distribution network and gravity sewer lines.",
  },
  {
    id: "tg-11",
    projectName: "ZAHAUSE PROPERTIES PRIVATE LIMITED",
    state: "telangana",
    district: "Hyderabad",
    locality: "17°47'08\"N 78°40'53\"E, Hyderabad",
    client: "ZAHAUSE PROPERTIES PRIVATE LIMITED",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "03-06-2025",
    mapsUrl: "https://maps.app.goo.gl/XiZ7XDyznoQdZeRb6",
    description: "Comprehensive water distribution and gravity sewer infrastructure.",
  },
  {
    id: "tg-12",
    projectName: "SRI SRINIVASA BUILDING DEVELOPERS",
    state: "telangana",
    district: "Warangal Urban",
    districtLabel: "Hanumakonda",
    locality: "Hanumakonda",
    client: "SRI SRINIVASA BUILDERS & DEVELOPERS",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "16-07-2025",
    mapsUrl: "https://maps.app.goo.gl/1CwZxkeXSJESMJLT7",
    description: "Potable water supply and gravity sewer collection lines.",
  },
  {
    id: "tg-13",
    projectName: "YBR INFRA PROJECTS",
    state: "telangana",
    district: "Hyderabad",
    locality: "Ramdaspally near exit ORR 12 Ranga Reddy 501510",
    client: "YBR INFRA PROJECTS",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "18-07-2023",
    description: "Utility corridor water supply and sewer collection network.",
  },
  {
    id: "tg-14",
    projectName: "HASINI ESTATES PRIVATE LIMITED",
    state: "telangana",
    district: "Ranga Reddy",
    districtLabel: "Rangareddy",
    locality: "Simmapuri Ventures, Rangareddy",
    client: "HASINI ESTATES PRIVATE LIMITED",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "23-09-2023",
    description: "Internal water lines and sewer infrastructure for residential venture.",
  },
  {
    id: "tg-15",
    projectName: "HASINI ESTATES PRIVATE LIMITED - ATHMAKUR",
    state: "telangana",
    district: "Ranga Reddy",
    districtLabel: "Rangareddy",
    locality: "Flat No. 501, K V R Towers, B Block, Miyapur, Serilingampally",
    client: "HASINI ESTATES PRIVATE LIMITED - ATHMAKUR",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "24-03-2025",
    description: "Water distribution reticulation and underground sewer package.",
  },
  {
    id: "tg-16",
    projectName: "M/S TARA CONSTRUCTIONS",
    state: "telangana",
    district: "Warangal Urban",
    districtLabel: "Hanumakonda",
    locality: "2-7-400/1/1, Excise Colony Street, Hanumakonda",
    client: "TARA CONSTRUCTIONS",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "28-03-2024",
    description: "Water distribution mains and gravity sewer network.",
  },
  {
    id: "tg-17",
    projectName: "LOTUS VIHAR",
    state: "telangana",
    district: "Warangal Rural",
    districtLabel: "Warangal",
    locality: "Kadipikonda Near Surya Kuteer, Warangal 506001",
    client: "LOTUS VIHAR",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "28-04-2023",
    description: "Water distribution network and underground sewer lines.",
  },
  {
    id: "tg-18",
    projectName: "KAPIL PRECAST & INFRA PVT LTD",
    state: "telangana",
    district: "Hyderabad",
    locality: "Hyderabad",
    client: "KAPIL PRECAST AND INFRA PRIVATE LIMITED",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "29-03-2025",
    mapsUrl: "https://maps.app.goo.gl/P3nmLmJ8VEhTEynMA",
    description: "Water distribution reticulation and sewer collection infrastructure.",
  },
  {
    id: "tg-19",
    projectName: "NISRA REALCON PRIVATE LIMITED",
    state: "telangana",
    district: "Warangal Rural",
    districtLabel: "Warangal",
    locality: "Hasanparthy Village, Warangal 506371",
    client: "NISRA REALCON PRIVATE LIMITED",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "30-01-2025",
    description: "Residential water supply and drainage infrastructure package.",
  },

  // ── Andhra Pradesh (16 Projects) ───────────────────────────────────────────
  {
    id: "ap-01",
    projectName: "Amrutha valley-Bhoomata",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Visakhapatnam",
    client: "Bhoomata",
    services: ["Sewer", "Water", "Stormwater", "Electrical"],
    status: "Temporarily Paused",
    completionDate: "Under Revision",
    description:
      "Integrated infrastructure package comprising sewer, water supply, stormwater drainage, and electrical works.",
  },
  {
    id: "ap-02",
    projectName: "CHIRAHARITA LIMITED",
    state: "andhra-pradesh",
    district: "NTR",
    locality: "Surampalli",
    client: "CHIRAHARITA LIMITED",
    services: ["Sewer", "Stormwater"],
    status: "Completed",
    completionDate: "2023",
    mapsUrl: "https://maps.app.goo.gl/q5QB1kanC8VxqMtS7",
    description: "Sewer network and stormwater drainage infrastructure.",
  },
  {
    id: "ap-03",
    projectName: "EGK INFRA PROJECTS LLP",
    state: "andhra-pradesh",
    district: "Kurnool",
    locality: "Orvakal Village Kurnool 518010",
    client: "EGK INFRA PROJECTS LLP",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "2023",
    description: "Water supply distribution lines and gravity sewer collection system.",
  },
  {
    id: "ap-04",
    projectName: "MANI KUMAR ENTERPRISES - REDDYPALEM",
    state: "andhra-pradesh",
    district: "Guntur",
    locality: "Reddypalem",
    client: "Mr. BILLA VINAY KUMAR",
    services: ["Sewer", "Water"],
    status: "Ongoing",
    completionDate: "In Progress",
    mapsUrl: "https://maps.app.goo.gl/Mq3SZ4EftVDetfrf6?g_st=aw",
    description: "Ongoing water supply and sewer network laying.",
  },
  {
    id: "ap-05",
    projectName: "MARGANI RAMACHANDRA RAO",
    state: "andhra-pradesh",
    district: "East Godavari",
    locality: "29-28-8/C, Lakshmivarapupeta",
    client: "RAMACHANDRA RAO MARGANI",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "2023",
    description: "Water reticulation and gravity sewer pipeline laying.",
  },
  {
    id: "ap-06",
    projectName: "N V R ESTATES",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Pendurthi, Visakhapatnam",
    client: "N V R ESTATES",
    services: ["Water", "Sewer"],
    status: "Completed",
    completionDate: "2023",
    description: "Water supply mains and underground drainage lines.",
  },
  {
    id: "ap-07",
    projectName: "Premier energies",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Visakhapatnam",
    client: "sagar",
    services: ["Sewer", "Stormwater"],
    status: "Ongoing",
    completionDate: "In Progress",
    description: "Sewer line laying and stormwater drainage construction.",
  },
  {
    id: "ap-08",
    projectName: "SAMVRUDDI ESTATES - BYREDDYPALEM",
    state: "andhra-pradesh",
    district: "Guntur",
    locality: "Byreddypalem",
    client: "SAMVRUDDI ESTATES",
    services: ["Sewer"],
    status: "Completed",
    completionDate: "2023",
    mapsUrl: "https://maps.app.goo.gl/FDLL6anPeGt11xHUA?g_st=aw",
    description: "Gravity sewer network collection system.",
  },
  {
    id: "ap-09",
    projectName: "SAMVRUDDI ESTATES - Chitti valasa",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Chittivalasa, Visakhapatnam",
    client: "SAMVRUDDI ESTATES",
    services: ["Sewer", "Water", "Electrical"],
    status: "Ongoing",
    completionDate: "In Progress",
    mapsUrl: "https://maps.app.goo.gl/2FatURKS7JYkQAjL8?g_st=aw",
    description: "Multi-utility deployment including sewer, water, and electrical lines.",
  },
  {
    id: "ap-10",
    projectName: "SATHA SAMVRUDDI ASSETS - Dabbanda",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Dabbanda, Visakhapatnam",
    client: "RAJU GARU",
    services: ["Sewer", "Water"],
    status: "Completed",
    completionDate: "2023",
    mapsUrl: "https://maps.app.goo.gl/CVNUysW5kL27e6ED9?g_st=aw",
    description: "Water distribution mains and gravity sewer infrastructure.",
  },
  {
    id: "ap-11",
    projectName: "SATHA SAMVRUDDI ASSETS (KANCHERU)",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Kancheru, Visakhapatnam",
    client: "RAJU GARU",
    services: ["Sewer", "Water"],
    status: "Completed",
    completionDate: "2023",
    mapsUrl: "https://maps.app.goo.gl/DTakidqKMkqG7Ujt5",
    description: "Water supply pipeline and sewer collection network.",
  },
  {
    id: "ap-12",
    projectName: "SRI SAI LEELA ELECTRICAL PROJECTS (BOMMURU)",
    state: "andhra-pradesh",
    district: "East Godavari",
    locality: "Bommuru, East Godavari",
    client: "Mr. Raghunandhan Babu",
    services: ["Sewer", "Water"],
    status: "Ongoing",
    completionDate: "In Progress",
    mapsUrl: "https://maps.app.goo.gl/WXJ2L8JFD3ZEkgx5",
    description: "Sewer collection and water reticulation pipeline execution.",
  },
  {
    id: "ap-13",
    projectName: "SUBHA GRUHA INFRASTRUCTURES PRIVATE LIMITED (NUNNA2)",
    state: "andhra-pradesh",
    district: "NTR",
    locality: "Nunna",
    client: "Subha Gruha Infrastructures Private Limited",
    services: ["Sewer", "Water"],
    status: "Ongoing",
    completionDate: "In Progress",
    mapsUrl: "https://maps.app.goo.gl/9b5hYGwGvao445xAA",
    description: "Residential layout sewer lines and water supply network.",
  },
  {
    id: "ap-14",
    projectName: "SUBHA GRUHA PROJECTS (INDIA) PRIVATE LIMITED",
    state: "andhra-pradesh",
    district: "Visakhapatnam",
    locality: "Muddadapeta Village, Visakhapatnam",
    client: "Subha Gruha Projects (India) Private Limited",
    services: ["Sewer", "Stormwater"],
    status: "Ongoing",
    completionDate: "In Progress",
    mapsUrl: "https://maps.app.goo.gl/c448iw8MMcpd8Dpb8",
    description: "Sewer network and stormwater drainage construction.",
  },
  {
    id: "ap-15",
    projectName: "SUBHA GRUHA PROJECTS (INDIA) PRIVATE LIMITED (NUNNA1)",
    state: "andhra-pradesh",
    district: "NTR",
    locality: "Savaragudem, Nunna",
    client: "Subha Gruha Projects (India) Private Limited",
    services: ["Sewer", "Water"],
    status: "Completed",
    completionDate: "2023",
    mapsUrl: "https://maps.app.goo.gl/LaU47R3Th1JAc3ec6",
    description: "Internal water lines and gravity sewer collection system.",
  },
  {
    id: "ap-16",
    projectName: "S V S Developers",
    state: "andhra-pradesh",
    district: "Guntur",
    locality: "Mothadaka Village, Tadikonda Mandal",
    client: "S V S Developers",
    services: ["Sewer", "Water"],
    status: "Ongoing",
    completionDate: "In Progress",
    mapsUrl: "https://maps.app.goo.gl/heK2enS6z64bZ5oD7",
    description: "Water distribution mains and sewer collection network.",
  },
];

export const ALL_SERVICES: ServiceTag[] = ["Water", "Sewer", "Stormwater", "Electrical"];

export function projectsForState(state: StateSlug) {
  return projects.filter((p) => p.state === state);
}

export function districtCounts(state: StateSlug): Record<string, number> {
  return projectsForState(state).reduce<Record<string, number>>((acc, p) => {
    acc[p.district] = (acc[p.district] ?? 0) + 1;
    return acc;
  }, {});
}

export function districtLabel(state: StateSlug, district: string) {
  return (
    projects.find((p) => p.state === state && p.district === district)?.districtLabel ?? district
  );
}

export function projectsInDistrict(state: StateSlug, district: string) {
  return projects.filter((p) => p.state === state && p.district === district);
}

export function topDistrict(state: StateSlug) {
  const counts = districtCounts(state);
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}

export function servicesIn(list: Project[]) {
  return ALL_SERVICES.filter((s) => list.some((p) => p.services.includes(s)));
}

export const footprint = {
  totalProjects: projects.length,
  states: 2,
  districts: new Set(projects.map((p) => `${p.state}:${p.district}`)).size,
  services: servicesIn(projects),
  yearsFrom: "2022",
  yearsTo: "2025+",
};

export const featuredProjects = projects.filter((p) => p.featured);
