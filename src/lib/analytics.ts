type EventName =
  | "projects_page_view"
  | "state_selected"
  | "district_hovered"
  | "district_selected"
  | "project_opened"
  | "project_location_clicked"
  | "explore_projects_clicked"
  | "request_pricing_clicked"
  | "contact_team_clicked";

type Payload = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: EventName, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
}
