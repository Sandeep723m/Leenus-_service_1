import { Plus, Minus, RotateCcw, MapPin, Hand } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { GeoState } from "@/data/geo";
import { cn } from "@/lib/utils";

type Props = {
  geo: GeoState;
  counts: Record<string, number>;
  labelFor: (district: string) => string;
  selected: string | null;
  onSelect: (district: string) => void;
  onHover?: (district: string | null) => void;
  stateName: string;
};

export function DistrictMap({
  geo,
  counts,
  labelFor,
  selected,
  onSelect,
  onHover,
  stateName,
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const hoveredDistrict = geo.districts.find((d) => d.name === hovered);
  const hoveredCount = hovered ? (counts[hovered] ?? 0) : 0;

  const setHover = (name: string | null) => {
    setHovered(name);
    onHover?.(name);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.35, 3.5));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Dragging / Panning handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Wheel Zooming
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey || zoom > 1) {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.2 : -0.2;
      setZoom((prev) => {
        const next = Math.min(Math.max(prev + delta, 1), 3.5);
        if (next === 1) setPan({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Touch handlers for mobile pan/zoom
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setTouchStart({ x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && touchStart && zoom > 1) {
      setPan({
        x: e.touches[0].clientX - touchStart.x,
        y: e.touches[0].clientY - touchStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  // Auto-reset zoom when state changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [geo]);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={cn(
        "relative w-full h-full min-h-[580px] sm:min-h-[660px] lg:min-h-[700px] overflow-hidden select-none flex items-center justify-center",
        zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default",
      )}
    >
      {/* Floating Map Zoom / Pan Controls */}
      <div className="absolute top-4 right-4 z-30 flex flex-col gap-1.5 rounded-xl border border-line/80 bg-background/95 p-1.5 shadow-md backdrop-blur-md">
        <button
          onClick={handleZoomIn}
          title="Zoom In (+)"
          disabled={zoom >= 3.5}
          className="flex size-8 items-center justify-center rounded-lg text-foreground hover:bg-surface hover:text-brand-red disabled:opacity-40 transition-colors"
        >
          <Plus className="size-4" />
        </button>
        <button
          onClick={handleZoomOut}
          title="Zoom Out (-)"
          disabled={zoom <= 1}
          className="flex size-8 items-center justify-center rounded-lg text-foreground hover:bg-surface hover:text-brand-red disabled:opacity-40 transition-colors"
        >
          <Minus className="size-4" />
        </button>
        <button
          onClick={handleResetZoom}
          title="Reset View"
          disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
          className="flex size-8 items-center justify-center rounded-lg text-foreground hover:bg-surface hover:text-brand-red disabled:opacity-40 transition-colors"
        >
          <RotateCcw className="size-3.5" />
        </button>
      </div>

      {/* Zoom Level Indicator / Gesture Hint */}
      <div className="absolute bottom-3 left-4 z-30 flex items-center gap-2 rounded-lg bg-background/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-xs border border-line/40">
        <Hand className="size-3 text-brand-red" />
        <span>
          {zoom > 1
            ? `Zoomed ${(zoom * 100).toFixed(0)}% · Drag to pan`
            : "Click district to filter"}
        </span>
      </div>

      <div
        className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: "center center",
        }}
      >
        <svg
          viewBox={`0 0 ${geo.width} ${geo.height}`}
          role="group"
          aria-label={`Map of districts in ${stateName}`}
          className="h-full w-full max-h-[660px] lg:max-h-[700px] drop-shadow-xs"
        >
          <defs>
            <filter id="map-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow
                dx="0"
                dy="3"
                stdDeviation="4"
                floodOpacity="0.08"
                floodColor="#1e293b"
              />
            </filter>
          </defs>

          {/* District Outer Boundaries / Fills matching reference image */}
          {geo.districts.map((d) => {
            const count = counts[d.name] ?? 0;
            const isSelected = selected === d.name;
            const isHovered = hovered === d.name;
            const hasProjects = count > 0;

            return (
              <path
                key={d.name}
                d={d.d}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={
                  hasProjects
                    ? `${labelFor(d.name)} district, ${count} project${count === 1 ? "" : "s"}. Click to view projects.`
                    : `${labelFor(d.name)} district, no projects currently listed.`
                }
                onMouseEnter={() => setHover(d.name)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(d.name)}
                onBlur={() => setHover(null)}
                onClick={() => onSelect(d.name)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelect(d.name);
                  }
                }}
                className={cn(
                  "cursor-pointer outline-none transition-all duration-200 ease-out",
                  isSelected
                    ? "fill-[#dc2626] stroke-[#b91c1c] stroke-[2.5]"
                    : isHovered
                      ? "fill-[#fecdd3] stroke-[#e11d48] stroke-[2]"
                      : hasProjects
                        ? "fill-[#dbeafe] stroke-[#3b82f6] stroke-[1.6] hover:fill-[#bfdbfe]"
                        : "fill-[#f8fafc] stroke-[#cbd5e1] stroke-[1] hover:fill-[#e2e8f0]",
                )}
              />
            );
          })}

          {/* Map Pin Marker for Selected District (like Hyderabad in image) */}
          {geo.districts.map((d) => {
            if (selected !== d.name) return null;
            return (
              <g
                key={`pin-${d.name}`}
                className="pointer-events-none transition-all duration-200 animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                {/* Red Map Pin with White Border and Dot matching image */}
                <g transform={`translate(${d.cx - 12}, ${d.cy - 24})`}>
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="#ffffff"
                    stroke="#dc2626"
                    strokeWidth="1.5"
                  />
                </g>
              </g>
            );
          })}

          {/* District Text Labels */}
          {geo.districts.map((d) => {
            const isSelected = selected === d.name;
            const isHovered = hovered === d.name;
            const labelText = labelFor(d.name);

            // Show label if district is selected, hovered, or fits comfortably
            const shouldShowLabel = isSelected || isHovered || d.w > 45;

            if (!shouldShowLabel) return null;

            return (
              <g key={`label-${d.name}`} className="pointer-events-none select-none">
                <text
                  x={d.cx}
                  y={isSelected ? d.cy + 10 : d.cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  paintOrder="stroke fill"
                  stroke={isSelected ? "#821111" : "#ffffff"}
                  strokeWidth={isSelected ? "2.5" : "3.5"}
                  strokeLinejoin="round"
                  className={cn(
                    "text-[11px] font-bold tracking-tight transition-all duration-150",
                    isSelected
                      ? "fill-[#ffffff] text-[12px]"
                      : isHovered
                        ? "fill-[#0369a1] text-[12px]"
                        : "fill-[#1e293b]",
                  )}
                >
                  {labelText}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Floating Hover Card Badge */}
      {hoveredDistrict ? (
        <div
          className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-full rounded-xl border border-line bg-background/95 px-3.5 py-2 shadow-xl backdrop-blur-md transition-all duration-150"
          style={{
            left: `${Math.min(Math.max((hoveredDistrict.cx / geo.width) * 100, 15), 85)}%`,
            top: `${Math.max((hoveredDistrict.cy / geo.height) * 100 - 2, 8)}%`,
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className={cn(
                "size-2.5 rounded-full shrink-0",
                counts[hoveredDistrict.name]
                  ? "bg-brand-red animate-pulse"
                  : "bg-muted-foreground/40",
              )}
            />
            <p className="text-xs font-bold text-foreground">{labelFor(hoveredDistrict.name)}</p>
          </div>
          <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
            {hoveredCount > 0
              ? `${hoveredCount} Project${hoveredCount === 1 ? "" : "s"}`
              : "No projects listed"}
          </p>
        </div>
      ) : null}
    </div>
  );
}
