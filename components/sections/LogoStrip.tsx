"use client";

// ── Placeholder brands — replace with real client logos when ready ──────────
// Row 1 scrolls left → Row 2 scrolls right (opposite direction)

const ROW_ONE = [
    { initials: "HG", name: "Heritance Group", sector: "Luxury Hotels", color: "#D4960A" },
    { initials: "SR", name: "Summit Resorts", sector: "Hospitality", color: "#C4881A" },
    { initials: "TS", name: "The Spice Room", sector: "Restaurant", color: "#D4960A" },
    { initials: "CR", name: "Ceylon Retail Co.", sector: "Fashion & Retail", color: "#A07820" },
    { initials: "MF", name: "MedFirst Lanka", sector: "Healthcare", color: "#D4960A" },
    { initials: "TL", name: "Tourista Lanka", sector: "Travel & Tourism", color: "#B88C10" },
    { initials: "UB", name: "Urban Brew", sector: "Cafés & Bars", color: "#D4960A" },
    { initials: "NV", name: "Nova Spaces", sector: "Real Estate", color: "#C4881A" },
];

const ROW_TWO = [
    { initials: "VC", name: "Villa Cerise", sector: "Boutique Hotel", color: "#D4960A" },
    { initials: "GV", name: "Green Valley", sector: "Eco Tourism", color: "#C4881A" },
    { initials: "B1", name: "Boutique Twelve", sector: "Fashion Retail", color: "#D4960A" },
    { initials: "AT", name: "Apex Technologies", sector: "Technology", color: "#A07820" },
    { initials: "CC", name: "CeylonCraft", sector: "Artisan Brands", color: "#D4960A" },
    { initials: "TV", name: "The Veda", sector: "Wellness & Spa", color: "#B88C10" },
    { initials: "NE", name: "Nuwara Eats", sector: "F&B", color: "#D4960A" },
    { initials: "PS", name: "Peak Studios", sector: "Creative", color: "#C4881A" },
];

const TRACK_ONE = [...ROW_ONE, ...ROW_ONE];
const TRACK_TWO = [...ROW_TWO, ...ROW_TWO];

function BrandCard({
    initials,
    name,
    sector,
    color,
}: {
    initials: string;
    name: string;
    sector: string;
    color: string;
}): React.ReactElement {
    return (
        <div
            className="rova-brand-card flex-shrink-0 inline-flex items-center gap-3 px-5 py-3.5 cursor-default"
            style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "6px",
                minWidth: "200px",
                transitionProperty: "border-color, background",
                transitionDuration: "0.22s",
                transitionTimingFunction: "ease",
            }}
            onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transitionDelay = "0ms";
                el.style.borderColor = "rgba(245,197,24,0.25)";
                el.style.background = "rgba(245,197,24,0.04)";
            }}
            onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transitionDelay = "0ms";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.03)";
            }}
        >
            {/* Logo mark — styled initial */}
            <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "6px",
                    background: `rgba(${hexToRgb(color)}, 0.12)`,
                    border: `1px solid rgba(${hexToRgb(color)}, 0.22)`,
                }}
            >
                <span
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        color: color,
                    }}
                >
                    {initials}
                </span>
            </div>

            {/* Brand info */}
            <div className="flex flex-col gap-[3px] min-w-0">
                <span
                    className="whitespace-nowrap leading-none"
                    style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.72)",
                        letterSpacing: "0.01em",
                    }}
                >
                    {name}
                </span>
                <span
                    className="whitespace-nowrap leading-none"
                    style={{
                        fontSize: "10px",
                        fontWeight: 400,
                        color: "rgba(255,255,255,0.28)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                    }}
                >
                    {sector}
                </span>
            </div>
        </div>
    );
}

// Simple hex → rgb helper for inline rgba
function hexToRgb(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
}

export default function LogoStrip(): React.ReactElement {
    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: "#111111",
                borderTop: "1px solid rgba(245,197,24,0.06)",
                borderBottom: "1px solid rgba(245,197,24,0.06)",
                paddingTop: "48px",
                paddingBottom: "48px",
            }}
        >
            {/* ── Section label ── */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="flex items-center gap-4">
                    <span
                        className="block flex-shrink-0"
                        style={{
                            width: "16px",
                            height: "1px",
                            background: "#CC1A00",
                        }}
                    />
                    <p
                        className="text-[10px] font-500 tracking-[0.24em] uppercase whitespace-nowrap"
                        style={{ color: "rgba(255,255,255,0.30)" }}
                    >
                        Trusted by brands across Sri Lanka
                    </p>
                    <span
                        className="flex-1"
                        style={{
                            height: "1px",
                            background: "rgba(255,255,255,0.05)",
                        }}
                    />
                </div>
            </div>

            {/* ── Left fade mask ── */}
            <div
                className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, #111111 0%, transparent 100%)",
                }}
            />

            {/* ── Right fade mask ── */}
            <div
                className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
                style={{
                    background: "linear-gradient(270deg, #111111 0%, transparent 100%)",
                }}
            />

            {/* ── Row 1 — scrolls left ── */}
            <div className="flex gap-3 mb-3" style={{ animation: "stripLeft 35s linear infinite" }}>
                {TRACK_ONE.map((brand, i) => (
                    <BrandCard key={`r1-${brand.initials}-${i}`} {...brand} />
                ))}
            </div>

            {/* ── Row 2 — scrolls right ── */}
            <div
                className="flex gap-3"
                style={{ animation: "stripRight 38s linear infinite" }}
            >
                {TRACK_TWO.map((brand, i) => (
                    <BrandCard key={`r2-${brand.initials}-${i}`} {...brand} />
                ))}
            </div>

            <style>{`
                @keyframes stripLeft {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
                @keyframes stripRight {
                    from { transform: translateX(-50%); }
                    to   { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
}