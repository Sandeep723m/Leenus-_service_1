import type { ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

const map: Record<ProjectStatus, string> = {
  Completed: "status-completed",
  Ongoing: "status-ongoing",
  "Temporarily Paused": "status-paused",
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return <span className={cn("status-badge", map[status], className)}>{status}</span>;
}
