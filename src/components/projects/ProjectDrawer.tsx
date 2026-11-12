import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projects";
import { track } from "@/lib/analytics";
import { toTitleCase } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";

type Props = {
  project: Project | null;
  districtLabel: string;
  onClose: () => void;
};

export function ProjectDrawer({ project, districtLabel, onClose }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }

      if (e.key !== "Tab") return;
      const dialog = closeButtonRef.current?.closest("[role='dialog']");
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/35"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={project.projectName}
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto bg-background shadow-[0_0_60px_-15px_rgba(23,35,60,0.35)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div>
            <p className="eyebrow">{districtLabel}</p>
            <h3 className="mt-2 text-xl leading-snug font-semibold text-foreground">
              {toTitleCase(project.projectName)}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex-1 space-y-6 px-6 py-6">
          <StatusBadge status={project.status} />

          <dl className="space-y-5">
            <Row label="Client" value={toTitleCase(project.client)} />
            <Row label="District" value={districtLabel} />
            <Row label="City / Village" value={toTitleCase(project.locality)} />
            <Row label="Services" value={project.services.join(" · ")} />
            {project.scope ? <Row label="Product / Scope" value={project.scope} /> : null}
            <Row
              label={project.status === "Completed" ? "Completion" : "Target completion"}
              value={project.completionDate}
            />
          </dl>

          <div>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              Project description
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{project.description}</p>
          </div>

          {project.mapsUrl ? (
            <a
              href={project.mapsUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => track("project_location_clicked", { project: project.projectName })}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline"
            >
              View Project Location <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>

        <div className="border-t border-line px-6 py-5">
          <a
            href="#contact"
            onClick={() => {
              track("request_pricing_clicked", { source: "project_drawer" });
              onClose();
            }}
            className="pill-cta w-full bg-brand-red px-8 py-3 text-base text-primary-foreground hover:bg-brand-red/90"
          >
            Discuss a Project
          </a>
        </div>
      </aside>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-[15px] text-foreground">{value}</dd>
    </div>
  );
}
