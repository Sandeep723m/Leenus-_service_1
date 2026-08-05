import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toTitleCase(str: string): string {
  if (!str) return "";
  const acronyms = new Set([
    "LLP",
    "LTD",
    "PVT",
    "SUDA",
    "ORR",
    "NTR",
    "HPR",
    "YBR",
    "NVR",
    "SVS",
    "EGK",
  ]);

  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      const upper = word.toUpperCase();
      if (acronyms.has(upper)) return upper;
      if (word.length === 0) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
