# Project Explorer AP & TS

Yes. Based on the reference screens, Leenus brand rules, and the uploaded Telangana + Andhra Pradesh project Excel data, I would make this a dedicated interactive “Projects Across AP & Telangana” experience, rather than a conventional projects listing page.

The spreadsheet currently contains 36 populated project records: 19 Telangana and 17 Andhra Pradesh. Telangana records are concentrated in Hyderabad, Khammam, Rangareddy, Hanumakonda and Warangal, while the AP sheet currently mixes actual district names with locality/village names in the District field. That data-cleanup point is important for accurately mapping every project to an official district.

Leenus India — Interactive Projects Map Page PRD

1. Product overview

Page name: Projects Across Andhra Pradesh & Telangana
Page type: Interactive geographic project showcase / lead-generation page
Primary audience: Property owners, developers, builders, infrastructure companies, consultants, government/private organizations and prospective clients.

Primary business objective

The page should quickly communicate:

“Leenus India has executed real infrastructure projects across Andhra Pradesh and Telangana.”

Instead of asking visitors to read a long portfolio, the map allows them to see geographic coverage → select their state → select a district → inspect actual projects → contact Leenus.

This combines three purposes:

Credibility + project discovery + lead generation.

2. Core user journey

The ideal journey should be extremely simple:

Landing on Projects page
↓
Understand Leenus' regional presence
↓
Choose Telangana / Andhra Pradesh
↓
Explore interactive map
↓
Hover district
↓
See project count
↓
Click district
↓
District becomes RED
↓
Right panel updates
↓
Browse actual projects
↓
Open project details
↓
Request Pricing / Discuss a Project

Don't require users to navigate to another page just to understand a district.

3. Page architecture

I recommend this page structure:

01 Header / Navigation

02 Hero
├── Breadcrumb
├── H1
├── Supporting copy
├── Explore Projects CTA
└── Request Pricing CTA

03 Regional Overview
├── Telangana / AP switch
├── Interactive Map
└── District Project Panel

04 Project Coverage Statistics

05 Services Delivered Across Projects

06 Selected / Featured Projects

07 Why Leenus India

08 Conversion CTA

09 Footer

The map is the hero functionality of the page, so don't bury it halfway down the page.

4. Hero section

Use the visual language of the existing attached Leenus Blog hero, but improve its information hierarchy and conversion intent.

Background

Use a high-quality Leenus infrastructure/project photograph.

Apply the existing deep blue overlay.

Image +
#0D4479 / dark blue overlay
approximately 70–80%

Height:

Desktop: 420–480px
Tablet: 380–420px
Mobile: 440–500px

Avoid making it excessively tall.

Breadcrumb

Home / Projects

Small, understated.

H1

Projects Across Andhra Pradesh & Telangana

White.

Montserrat.

Desktop around 48–56px.

Mobile around 34–40px.

Supporting copy

Explore infrastructure projects delivered by Leenus India across districts in Andhra Pradesh and Telangana.

Keep it to approximately two lines.

5. Hero CTAs

This is one of the biggest changes I would make compared with the current Blog-style hero.

Place two prominent CTAs directly under the supporting text.

Primary

Explore Projects

Background: Leenus Red
Text: #FFFFFF
Horizontal padding: 24px
Vertical padding: 12px
Border radius: 999px
Font: Montserrat

Click:

Smooth-scroll directly to the map.

Secondary

Request Pricing

White/transparent treatment depending on image contrast.

For example:

background: rgba(255,255,255,.10)
border: 1px solid rgba(255,255,255,.7)
text: white
padding: 12px 24px
border-radius: 999px

Hover → white background / dark-blue text.

This creates two distinct intents:

Research intent → Explore Projects

Commercial intent → Request Pricing

6. Main interactive map section

This is the centerpiece.

Section heading

Explore Our Projects by District

Supporting copy:

Select a state and explore completed and ongoing Leenus India projects across each district.

Then state tabs:

┌────────────────────────────────────┐
│ Telangana │ Andhra Pradesh │
└────────────────────────────────────┘

I'd use a segmented-control style rather than two large buttons.

Selected:

Background #336699
Text #FFFFFF

Inactive:

Background #F3F5F7
Text #336699

7. Desktop map layout

Use approximately:

Map: 55%
Information panel: 45%

┌───────────────────────────────────────────────────────────────┐
│ │
│ Telangana Andhra Pradesh │
│ │
│ ┌───────────────────────┐ ┌───────────────────────────────┐ │
│ │ │ │ │ │
│ │ │ │ Hyderabad District │ │
│ │ TELANGANA MAP │ │ │ │
│ │ │ │ 7 Projects │ │
│ │ ███ │ │ │ │
│ │ ███████ │ │ Water · Sewer │ │
│ │ ██████████ │ │ │ │
│ │ RED │ │ PROJECTS │ │
│ │ HYDERABAD │ │ │ │
│ │ │ │ Aadhar Builders... │ │
│ │ │ │ Water & Sewer │ │
│ │ │ │ Completed · 2023 │ │
│ │ │ │ ─────────────────────────── │ │
│ │ │ │ │ │
│ │ │ │ HPR Infra LLP │ │
│ │ │ │ Water & Sewer │ │
│ │ │ │ Completed · 2023 │ │
│ │ │ │ │ │
│ └───────────────────────┘ │ View All Projects → │ │
│ └───────────────────────────────┘ │
│ │
└───────────────────────────────────────────────────────────────┘

Don't place the map inside a visually heavy dashboard card. Keep the background predominantly white.

8. District map design system

The map should feel like part of the Leenus website rather than a third-party GIS application.

Default district

Fill: #F3F6F9
Stroke: #B8CADC
Stroke width: 1px

Hover

This is where the Leenus red becomes useful.

Fill: very light red
Border: Leenus red
Cursor: pointer

Animation:

150–200ms ease

Selected district

Fill: Leenus red
Stroke: Leenus red
Text: white

The selected district remains red even when the mouse leaves.

Districts without projects

Don't make them appear disabled.

Use:

#F5F6F7

Hover can still identify them, but the tooltip should say:

No projects currently listed

rather than presenting an empty details panel.

9. Map tooltip

Hover should not update the entire right-hand panel.

Instead:

          ┌──────────────────┐
          │ Hyderabad        │
          │ 7 Projects       │
          └──────────────────┘
                 ↓
               ███
            ███████

Tooltip:

Hyderabad
7 Projects

Then clicking Hyderabad updates the persistent right panel.

This is significantly better UX than having the panel change every time the mouse passes over a district.

10. Right-side district panel

The reference you've provided is conceptually correct, but I would simplify it considerably.

Header

HYDERABAD

Hyderabad District

7
Projects

Don't show unnecessary geographic descriptions unless they're meaningful.

Below:

Services Delivered

Water
Sewer

Then:

Projects in Hyderabad

11. Project card/list

Instead of long bullet paragraphs, turn each record into a compact structured project row.

Example using your Excel data:

AADHAAR BUILDERS AND
INFRASTRUCTURE LLP

Water · Sewer

Completed 2023

View Project →
────────────────────────────────

Another:

HPR INFRA LLP

Water · Sewer

Completed 2023

View Project →
────────────────────────────────

This is much easier to scan.

12. Data pulled from the Excel

Your dataset already provides most of what this interface needs:

Excel fieldWebsite usageProject NameProject titleDistrictGeographic mappingLocationProject locationClient NameClientService offeredService tagsStatusStatus badgeCompletion yearDate/yearShort DescriptionProject description

For example, Telangana currently has 19 populated project records, all marked completed in the supplied sheet. Services are currently consistently recorded as water/sewer.

The district counts currently represented are:

Hyderabad 7
Khammam 4
Rangareddy 4
Hanumakonda 2
Warangal 2

These numbers should be generated dynamically from the project dataset rather than typed manually into the website.

13. Important AP data issue

Before development, clean the Andhra Pradesh district column.

Some entries currently appear as:

Visakhapatnam
Kurnool
East Godavari

which are usable district-level values.

But others are:

Surampalli
Reddypalem
Byreddypalem
Dabbanda
Kancheru
Bommuru
Nunna2
Muddadapeta Village

Those appear to be locality/village-level values rather than official district names.

The development dataset should therefore become:

State
Official District
City / Village
Project
Client
Service
Status
Completion Date
Coordinates / Map URL
Description

The Official District field must match the corresponding GeoJSON district name.

14. Project status system

AP has multiple statuses in the uploaded sheet.

Currently represented:

Completed
On Going
Intermittently Stopped

Normalize them before sending data to the UI:

COMPLETED
→ Completed

ON GOING
→ Ongoing

INTERMETENTLY STOPPED
→ Temporarily Paused

Avoid exposing inconsistent capitalization/spelling from Excel.

15. Status badges

Use subtle badges rather than large colored labels.

Completed
light neutral/green treatment

Ongoing
light blue treatment

Paused
light amber treatment

Don't use Leenus red for status.

Reserve red primarily for:

CTA + active district + important interactive highlights.

That makes the brand color more meaningful.

16. Project count visualization

You don't actually need the four-blue-color legend shown in the reference unless project density is an important story.

If retained, simplify it:

Project Coverage

■ 1–2
■ 3–5
■ 6–10
■ 10+

But I'd prefer a simple map where all districts remain neutral and only hover/selected districts become red.

It will feel cleaner and more premium.

17. Search

Above the project list on the right panel, add a small search only if districts can contain many projects.

Search projects...

Search:

Project name
Client
Location
Service

Do not search the entire website from this input.

18. Filters

Keep filtering lightweight.

All
Completed
Ongoing

Optional service filter:

All Services
Water
Sewer
Stormwater
Electrical

Don't place 6–8 filters above the map. It will turn the experience into an admin dashboard.

19. State switching interaction

When the user selects:

Andhra Pradesh

Animate:

Telangana SVG
↓
fade + slight scale
↓
Andhra Pradesh SVG

Approximately:

250–350ms

The right panel resets to:

Andhra Pradesh

Select a district to explore
Leenus India projects.

20. Default map state

Don't leave the interface blank on first load.

For Telangana, automatically select the district with the most projects.

Based on the supplied dataset, that is currently:

Hyderabad — 7 projects

For AP, once district normalization is complete, select the district with the largest project count.

This gives visitors content immediately.

21. Project detail drawer

Clicking View Project doesn't necessarily need to navigate away.

A right drawer/modal can work beautifully.

                              ┌──────────────────────────┐
                              │ ×                        │
                              │                          │
                              │ Project Name             │
                              │                          │
                              │ Completed                │
                              │                          │
                              │ Client                   │
                              │ ABC Developers           │
                              │                          │
                              │ District                 │
                              │ Hyderabad                │
                              │                          │
                              │ Services                 │
                              │ Water · Sewer            │
                              │                          │
                              │ Completion               │
                              │ 2023                     │
                              │                          │
                              │ Project Description      │
                              │ ...                      │
                              │                          │
                              │ View Location ↗          │
                              │                          │
                              │ [ Discuss a Project ]    │
                              └──────────────────────────┘

This prevents breaking the map exploration flow.

22. Map location link

Many Excel entries already contain Google Maps links.

Where available, show:

View Project Location ↗

Don't expose the raw URL.

Where coordinates/location aren't available, simply hide the action.

23. Statistics section

After the map, show an executive summary.

Avoid the visually dated five-circle-icon design from the concept.

Use clean typography-driven metrics.

PROJECT FOOTPRINT

36 2
Projects* States

Multiple 2022–2025+
Districts Project history

Water · Sewer · Stormwater · Electrical
Infrastructure services represented

*Based on the currently supplied populated records; this should ultimately be calculated from production data.

Use dynamic data whenever possible.

24. Services across projects

Follow with:

Infrastructure Expertise Across Every Project

Four simple cards:

Water Infrastructure

Sewer Networks

Stormwater Systems

Electrical Infrastructure

Use simple line icons.

No heavy shadows.

No gradients.

Hover:

border → Leenus red
icon → Leenus red

25. Featured projects

Show 3–6 strong projects after the geographic explorer.

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ IMAGE │ │ IMAGE │ │ IMAGE │
│ │ │ │ │ │
│ Hyderabad │ │ Visakhapatnam │ │ Khammam │
│ │ │ │ │ │
│ Project Name │ │ Project Name │ │ Project Name │
│ │ │ │ │ │
│ Water · Sewer │ │ Sewer · Storm │ │ Water · Sewer │
│ │ │ │ │ │
│ View Project → │ │ View Project → │ │ View Project → │
└─────────────────┘ └─────────────────┘ └─────────────────┘

This gives SEO/search visitors useful content even if they don't interact with the map.

26. Bottom conversion section

After users see the work, immediately convert the interest.

Planning an Infrastructure Project?

Speak with the Leenus India team about water, sewer, stormwater and infrastructure requirements for your upcoming development.

Two actions:

Request Pricing

Contact Our Team

Primary CTA follows your exact requirement:

Background Leenus red
Text white
Padding 12px 24px
Border radius 999px
Font Montserrat

27. Typography system

Use Montserrat throughout as requested.

Recommended hierarchy:

Hero H1
48–56px desktop
36–40px tablet
32–36px mobile

Section H2
36–42px desktop
30–34px tablet
28–30px mobile

H3
22–26px

Body
15–16px

Secondary
14px

CTA
14–16px

Map label
11–13px

Metadata
12–13px

Don't make everything bold.

Use hierarchy through size, whitespace and color, rather than excessive font weight.

28. Core color system

Based on the supplied direction:

Primary blue

#336699

Use for:

navigation accents, headings, selected state tabs, icons, secondary actions.

Secondary green

#EBB338

Your screenshot appears to show #ebb338; despite being visually closer to a gold/amber tone, treat the supplied hex as the authoritative token unless the brand team confirms otherwise.

Use sparingly.

CTA red

Take the exact red from the existing Leenus brand/site assets as the production token.

Use for:

Primary CTA
Map selected district
Map hover accent
Important links
Small visual accents

Neutral palette

Background #FFFFFF
Alt background #F7F8FA
Border #E6E8EB
Heading #17233C
Body #4E5969
Muted #7A8493

29. Spacing system

Use an 8px-based system.

4
8
12
16
24
32
40
48
64
80
96
120

Your CTA requirement remains exactly:

12px vertical / 24px horizontal.

Section spacing:

Desktop 96–120px
Tablet 72–88px
Mobile 56–72px

Keep the map section spacious.

30. Responsive behavior

Desktop — 1440+

Map 55%
Details 45%

Maximum content width:
1280–1360px

Laptop — 1024–1439

Map ~52%
Details ~48%

Reduce map labels if necessary.

Tablet — 768–1023

Do not squeeze both columns too tightly.

Use:

MAP
────────────────

DISTRICT DETAILS

Map becomes full width.

Panel sits below.

Mobile — <768

The experience changes significantly.

TELANGANA | ANDHRA PRADESH

        MAP
     ███████

███████████
█████

Tap a district

HYDERABAD
7 Projects

Water · Sewer

Project 01
Project 02
Project 03

View All Projects

No hover dependency.

Tap = selection.

31. Mobile district details

For a more app-like experience, clicking a district can open a bottom sheet:

┌─────────────────────────────┐
│ │
│ MAP │
│ │
│ HYDERABAD │
│ │
├─────────────────────────────┤
│ ━━━━━ │
│ │
│ Hyderabad │
│ 7 Projects │
│ │
│ Water · Sewer │
│ │
│ PROJECTS │
│ │
│ Aadhar Builders... │
│ Completed · 2023 │
│ │
│ HPR Infra LLP │
│ Completed · 2023 │
│ │
└─────────────────────────────┘

This is considerably better than trying to replicate the desktop sidebar.

32. Accessibility

The map must not be mouse-only.

Each SVG district should behave like an interactive control.

Support:

Tab
Enter
Space
Arrow/navigation where practical

Selected district:

aria-pressed="true"

Screen reader label:

Hyderabad district, 7 projects.
Press Enter to view projects.

Do not communicate project availability using color alone.

33. Front-end architecture

For this specific site, I'd recommend:

React/Next.js implementation

or, if the current site is built in Framer:

Framer + custom React component.

Map:

React Simple Maps

Geography:

Telangana GeoJSON
Andhra Pradesh GeoJSON

Application:

<ProjectExplorer>

   <StateSelector />

   <Map>
      <District />
      <Tooltip />
   </Map>

   <DistrictPanel>
      <DistrictSummary />
      <ProjectFilters />
      <ProjectList />
   </DistrictPanel>

</ProjectExplorer>

34. Data architecture

Don't make the Excel spreadsheet itself the permanent front-end database.

Convert it into structured data/API/CMS records.

For example:

Project
│
├── id
├── projectName
├── state
├── district
├── locality
├── client
├── services[]
├── status
├── completionDate
├── description
├── latitude
├── longitude
├── mapsUrl
├── image
└── featured

District:

District
│
├── id
├── state
├── districtName
├── geoJsonId
├── projectCount
└── projects[]

Then:

GeoJSON district
↓
geoJsonId
↓
District
↓
Projects[]

35. Data should drive the map automatically

This is critical.

Do not manually type:

Hyderabad — 7 projects

Instead:

Project Database
↓
Filter:
district === Hyderabad
↓
Count
↓
7

When another Hyderabad project is added:

7 → 8

automatically.

The map, district panel and statistics should all update from the same source.

36. Recommended technical stack

For a custom site:

Next.js
React
TypeScript
React Simple Maps
GeoJSON
Framer Motion
CMS / API

For Framer:

Framer +
React Code Component +
React Simple Maps +
GeoJSON +
CMS/API

Avoid Leaflet unless Leenus needs true GIS behavior such as road maps, actual markers, pan/zoom and project coordinates.

For this UX, an SVG geographic map is cleaner.

37. SEO strategy

This page has strong organic-search potential.

Page title:

Infrastructure Projects in Andhra Pradesh & Telangana | Leenus India

Meta description:

Explore Leenus India infrastructure projects across Andhra Pradesh and Telangana, including water, sewer, stormwater and electrical infrastructure works.

Make district/project information available in HTML—not only hidden inside SVG interactions—so search engines can understand the portfolio.

38. Marketing strategy

The page shouldn't communicate only:

“Here are our projects.”

It should communicate:

“We've already delivered infrastructure projects in regions like yours.”

That's a stronger sales message.

The geographic interface creates local proof:

Visitor from Hyderabad
↓
Clicks Hyderabad
↓
Sees 7 real projects
↓
Recognizes developers/areas
↓
Higher credibility
↓
Request Pricing

This is why the CTA should remain close to project information.

39. Analytics events

Track the interaction.

projects_page_view

state_selected
Telangana
Andhra Pradesh

district_hovered

district_selected
Hyderabad

project_opened

project_location_clicked

explore_projects_clicked

request_pricing_clicked

contact_team_clicked

You can later discover:

Which districts generate the most commercial interest?

That becomes useful marketing data.

40. Final desktop experience

The strongest overall composition would be:

┌─────────────────────────────────────────────────────────────┐
│ HEADER │
├─────────────────────────────────────────────────────────────┤
│ │
│ PROJECTS ACROSS AP & TELANGANA │
│ │
│ Explore infrastructure projects delivered across │
│ Andhra Pradesh and Telangana. │
│ │
│ [ Explore Projects ] [ Request Pricing ] │
│ │
├─────────────────────────────────────────────────────────────┤
│ │
│ Explore Projects by District │
│ │
│ [ Telangana | Andhra Pradesh ] │
│ │
│ ┌────────────────────────┐ ┌──────────────────────────────┐ │
│ │ │ │ HYDERABAD │ │
│ │ │ │ │ │
│ │ INTERACTIVE │ │ 7 Projects │ │
│ │ MAP │ │ Water · Sewer │ │
│ │ │ │ │ │
│ │ ███ │ │ PROJECTS │ │
│ │ ██████ │ │ │ │
│ │ RED │ │ Aadhar Builders... │ │
│ │ │ │ Completed · 2023 │ │
│ │ │ │ ───────────────────────── │ │
│ │ │ │ HPR Infra LLP │ │
│ │ │ │ Completed · 2023 │ │
│ │ │ │ │ │
│ └────────────────────────┘ └──────────────────────────────┘ │
│ │
├─────────────────────────────────────────────────────────────┤
│ PROJECT FOOTPRINT │
│ │
│ 36 Projects 2 States Multiple Districts │
├─────────────────────────────────────────────────────────────┤
│ │
│ INFRASTRUCTURE EXPERTISE │
│ │
│ Water Sewer Stormwater Electrical │
│ │
├─────────────────────────────────────────────────────────────┤
│ │
│ FEATURED PROJECTS │
│ │
│ [ Project ] [ Project ] [ Project ] │
│ │
├─────────────────────────────────────────────────────────────┤
│ │
│ Planning an Infrastructure Project? │
│ │
│ [ Request Pricing ] [ Contact Our Team ] │
│ │
├─────────────────────────────────────────────────────────────┤
│ FOOTER │
└─────────────────────────────────────────────────────────────┘

Final UX direction

The reference map you've attached is a good functional starting point, but I would not copy its dashboard-heavy visual treatment. For Leenus, keep the page more architectural, white, spacious and brand-led: Montserrat typography, #336699 blue, Leenus red for CTAs/active districts, rounded 12px × 24px CTAs, restrained borders, very light shadows, and no unnecessary decoration.

Most importantly, the experience should follow State → District → Real Projects → Project Details → Request Pricing. That makes the map more than a visual element—it becomes a trust-building and lead-generation tool.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://leenus-state-projects.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b67e76a3-6fba-48ae-896c-07a7fc57e06b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
