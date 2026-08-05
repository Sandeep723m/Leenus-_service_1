import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  STATES,
  districtCounts,
  districtLabel,
  projectsInDistrict,
  servicesIn,
  topDistrict,
  type Project,
  type StateSlug,
} from "@/data/projects";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { DistrictMap } from "./DistrictMap";
import { ProjectDrawer } from "./ProjectDrawer";
import { StatusBadge } from "./StatusBadge";

type StatusFilter = "All" | "Completed" | "Ongoing" | "Temporarily Paused";

export function ProjectExplorer() {
  const [state, setState] = useState<StateSlug>("telangana");
  const [selected, setSelected] = useState<string | null>(topDistrict("telangana"));
  const [status, setStatus] = useState<StatusFilter>("All");
  const [open, setOpen] = useState<Project | null>(null);
  const [fading, setFading] = useState(false);

  const active = STATES.find((s) => s.slug === state)!;
  const counts = useMemo(() => districtCounts(state), [state]);
  const label = (d: string) => districtLabel(state, d);

  const districtProjects = useMemo(
    () => (selected ? projectsInDistrict(state, selected) : []),
    [state, selected],
  );

  const visible = useMemo(() => {
    return districtProjects.filter((p) => {
      if (status !== "All" && p.status !== status) return false;
      return true;
    });
  }, [districtProjects, status]);

  useEffect(() => {
    track("projects_page_view");
  }, []);

  const switchState = (slug: StateSlug) => {
    if (slug === state) return;
    track("state_selected", { state: slug });
    setFading(true);
    window.setTimeout(() => {
      setState(slug);
      setSelected(topDistrict(slug));
      setStatus("All");
      setFading(false);
    }, 220);
  };

  const selectDistrict = (district: string) => {
    setSelected(district);
    track("district_selected", { state, district });
  };

  return (
    <div id="map" className="scroll-mt-24">
      {/* Segmented state control */}
      <div className="mx-auto mb-10 inline-flex rounded-full bg-surface p-1.5 shadow-sm border border-line">
        {STATES.map((s) => (
          <button
            key={s.slug}
            onClick={() => switchState(s.slug)}
            aria-pressed={state === s.slug}
            className={cn(
              "rounded-full px-7 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-200",
              state === s.slug
                ? "bg-brand text-primary-foreground shadow-md"
                : "text-foreground hover:bg-background/80",
            )}
          >
            {s.name}
          </button>
        ))}
      </div>

      <div className="grid gap-8 text-left lg:grid-cols-[55fr_45fr] lg:gap-10 items-stretch">
        <div
          className={cn(
            "transition-all duration-300 ease-out bg-surface/50 rounded-2xl p-3 sm:p-4 border border-line/70 shadow-sm flex flex-col justify-between h-[620px] sm:h-[680px] lg:h-[720px]",
            fading ? "scale-[0.97] opacity-0" : "scale-100 opacity-100",
          )}
        >
          <div className="flex-1 w-full h-full min-h-0 overflow-hidden rounded-xl">
            <DistrictMap
              geo={active.geo}
              counts={counts}
              labelFor={label}
              selected={selected}
              onSelect={selectDistrict}
              onHover={(d) => d && track("district_hovered", { state, district: d })}
              stateName={active.name}
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium text-muted-foreground shrink-0">
            Click or tap a district on the map to view list of projects
          </p>
        </div>

        <div className="h-[620px] sm:h-[680px] lg:h-[720px] flex flex-col">
          {!selected ? (
            <div className="rounded-2xl border border-line p-8 bg-background shadow-sm h-full flex flex-col justify-center items-center text-center">
              <p className="eyebrow">{active.name}</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Select a district to explore Leenus India projects.
              </h3>
              <p className="mt-3 text-[15px] text-body max-w-sm">
                {Object.keys(counts).length} districts in {active.name} currently carry listed
                projects.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-line bg-background p-5 sm:p-6 shadow-sm h-full flex flex-col overflow-hidden">
              <div className="shrink-0">
                <p className="eyebrow">{label(selected)} District</p>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl leading-none font-bold text-foreground">
                    {districtProjects.length}
                  </span>
                  <span className="text-base sm:text-lg font-medium text-body">
                    {districtProjects.length === 1 ? "Project" : "Projects"} in {label(selected)}
                  </span>
                </div>

                {districtProjects.length > 0 ? (
                  <>
                    <div className="mt-4 border-t border-line/60 pt-3">
                      <p className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                        Services Delivered
                      </p>
                      <p className="mt-0.5 text-xs sm:text-sm font-medium text-foreground">
                        {servicesIn(districtProjects).join(" · ")}
                      </p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {(["All", "Completed", "Ongoing"] as StatusFilter[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => setStatus(s)}
                          aria-pressed={status === s}
                          className={cn(
                            "rounded-full px-3.5 py-1 text-xs font-semibold transition-colors",
                            status === s
                              ? "bg-brand text-primary-foreground shadow-xs"
                              : "bg-surface text-body hover:text-brand border border-line/50",
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>

              {districtProjects.length > 0 ? (
                <ul className="mt-4 flex-1 overflow-y-auto divide-y divide-line border-t border-line pr-1.5 scrollbar-thin">
                  {visible.map((p) => (
                    <li
                      key={p.id}
                      className="-mx-1 rounded-lg px-2 py-3.5 transition-colors hover:bg-surface/50"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-bold leading-snug text-foreground">
                          {p.projectName}
                        </h4>
                      </div>
                      <p className="mt-1 text-xs text-body">
                        <span className="font-medium text-foreground/90">{p.client}</span> ·{" "}
                        {p.locality}
                      </p>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        Services: {p.services.join(", ")}
                      </p>
                      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <StatusBadge status={p.status} />
                          <span className="text-[11px] text-muted-foreground font-medium">
                            {p.completionDate}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            setOpen(p);
                            track("project_opened", { project: p.projectName });
                          }}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:underline"
                        >
                          View Details <ArrowRight className="size-3.5" />
                        </button>
                      </div>
                    </li>
                  ))}
                  {visible.length === 0 ? (
                    <li className="py-6 text-sm text-muted-foreground text-center">
                      No projects match the selected filter.
                    </li>
                  ) : null}
                </ul>
              ) : (
                <div className="mt-6 flex-1 rounded-lg bg-surface/60 p-6 text-center border border-dashed border-line flex flex-col items-center justify-center">
                  <p className="text-sm text-body font-medium">
                    No active projects currently listed in {label(selected)}.
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Contact our team to discuss upcoming infrastructure works in this district.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ProjectDrawer
        project={open}
        districtLabel={open ? districtLabel(open.state, open.district) : ""}
        onClose={() => setOpen(null)}
      />
    </div>
  );
}
