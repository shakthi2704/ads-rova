// "use client";

// const INDUSTRIES = [
//     {
//         key: "hotel", label: "Luxury Hotels", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 19V8l8-5 8 5v11" /><path d="M8 19v-5h6v5" /><path d="M11 3v2" />
//             </svg>
//         )
//     },
//     {
//         key: "resort", label: "Resorts & Spas", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="11" cy="9" r="3" /><path d="M11 2v2M11 16v4M4.2 4.2l1.4 1.4M16.4 4.2l-1.4 1.4" />
//                 <path d="M2 9h3M17 9h3" /><path d="M6 17c0-2.8 2.2-5 5-5s5 2.2 5 5" />
//             </svg>
//         )
//     },
//     {
//         key: "villa", label: "Villas & Boutique", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M2 19h18" /><path d="M4 19V10l7-7 7 7v9" /><path d="M9 19v-5h4v5" /><path d="M4 10h14" />
//             </svg>
//         )
//     },
//     {
//         key: "restaurant", label: "Restaurants", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M8 2v6a3 3 0 01-6 0V2" /><path d="M5 8v12" />
//                 <path d="M15 2c0 0 3 2.5 3 7s-3 7-3 7v4" /><path d="M15 9h3" />
//             </svg>
//         )
//     },
//     {
//         key: "cafe", label: "Cafés & Bars", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M6 2v4M10 2v4M14 2v4" />
//                 <path d="M4 6h12l-1.5 10H5.5L4 6z" />
//                 <path d="M16 10h2a2 2 0 010 4h-2" /><path d="M3 20h16" />
//             </svg>
//         )
//     },
//     {
//         key: "retail", label: "Retail Brands", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 3h2l1.5 8h10l1.5-6H6" />
//                 <circle cx="9" cy="18" r="1.2" /><circle cx="15" cy="18" r="1.2" /><path d="M9 15h6" />
//             </svg>
//         )
//     },
//     {
//         key: "startup", label: "Startups", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M11 2c-1 3-3.5 5-6 6 0 4 2 7 6 9 4-2 6-5 6-9-2.5-1-5-3-6-6z" />
//                 <path d="M11 8v4" /><path d="M9 10h4" />
//             </svg>
//         )
//     },
//     {
//         key: "tourism", label: "Tour Operators", Icon: () => (
//             <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="11" cy="11" r="8" />
//                 <path d="M11 3c0 0-4 3-4 8s4 8 4 8" /><path d="M11 3c0 0 4 3 4 8s-4 8-4 8" />
//                 <path d="M3 11h16" />
//             </svg>
//         )
//     },
// ];

// const TRACK = [...INDUSTRIES, ...INDUSTRIES];

// export default function LogoStrip() {
//     return (
//         <section
//             className="relative overflow-hidden py-12"
//             style={{
//                 background: "#111114",
//                 borderTop: "1px solid rgba(245,197,24,0.08)",
//                 borderBottom: "1px solid rgba(245,197,24,0.08)",
//             }}
//         >
//             {/* Label */}
//             <div className="max-w-7xl mx-auto px-6 mb-8">
//                 <div className="flex items-center gap-4">
//                     <span className="block w-5 h-px flex-shrink-0" style={{ background: "#FF1A1A" }} />
//                     <p className="text-xs font-500 tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.40)" }}>
//                         Industries we serve
//                     </p>
//                     <span className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
//                 </div>
//             </div>

//             {/* Left fade */}
//             <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
//                 style={{ background: "linear-gradient(90deg, #111114 0%, transparent 100%)" }} />

//             {/* Right fade */}
//             <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
//                 style={{ background: "linear-gradient(270deg, #111114 0%, transparent 100%)" }} />

//             {/* Scrolling track */}
//             <div className="flex gap-4" style={{ animation: "marquee 32s linear infinite" }}>
//                 {TRACK.map((item, i) => (
//                     <LogoCard key={`${item.key}-${i}`} label={item.label} Icon={item.Icon} />
//                 ))}
//             </div>

//             <style>{`
//         @keyframes marquee {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//       `}</style>
//         </section>
//     );
// }

// function LogoCard({ label, Icon }: { label: string; Icon: () => React.ReactElement }) {
//     return (
//         <div
//             className="flex-shrink-0 flex items-center gap-3 px-6 py-3.5 cursor-default"
//             style={{
//                 border: "1px solid rgba(245,197,24,0.14)",
//                 borderRadius: "6px",
//                 background: "#1A1A1F",
//                 minWidth: "185px",
//                 transitionProperty: "border-color, background",
//                 transitionDuration: "0.2s",
//                 transitionTimingFunction: "ease",
//             }}
//             onMouseEnter={e => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(245,197,24,0.40)";
//                 el.style.background = "#21211A";
//             }}
//             onMouseLeave={e => {
//                 const el = e.currentTarget as HTMLElement;
//                 el.style.borderColor = "rgba(245,197,24,0.14)";
//                 el.style.background = "#1A1A1F";
//             }}
//         >
//             <span style={{ color: "#F5C518", opacity: 0.7, flexShrink: 0 }}><Icon /></span>
//             <span className="text-sm font-500 whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)" }}>
//                 {label}
//             </span>
//         </div>
//     );
// }


"use client";

const INDUSTRIES = [
    {
        key: "hotel", label: "Luxury Hotels", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 19V8l8-5 8 5v11" /><path d="M8 19v-5h6v5" /><path d="M11 3v2" />
            </svg>
        )
    },
    {
        key: "resort", label: "Resorts & Spas", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="9" r="3" />
                <path d="M11 2v2M11 16v4M4.2 4.2l1.4 1.4M16.4 4.2l-1.4 1.4M2 9h3M17 9h3" />
                <path d="M6 17c0-2.8 2.2-5 5-5s5 2.2 5 5" />
            </svg>
        )
    },
    {
        key: "villa", label: "Villas & Boutique", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 19h18M4 19V10l7-7 7 7v9M9 19v-5h4v5M4 10h14" />
            </svg>
        )
    },
    {
        key: "restaurant", label: "Restaurants", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v6a3 3 0 01-6 0V2M5 8v12" />
                <path d="M15 2c0 0 3 2.5 3 7s-3 7-3 7v4M15 9h3" />
            </svg>
        )
    },
    {
        key: "cafe", label: "Cafés & Bars", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2v4M10 2v4M14 2v4M4 6h12l-1.5 10H5.5L4 6z" />
                <path d="M16 10h2a2 2 0 010 4h-2M3 20h16" />
            </svg>
        )
    },
    {
        key: "retail", label: "Retail Brands", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h2l1.5 8h10l1.5-6H6" />
                <circle cx="9" cy="18" r="1.2" /><circle cx="15" cy="18" r="1.2" />
            </svg>
        )
    },
    {
        key: "startup", label: "Startups", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 2c-1 3-3.5 5-6 6 0 4 2 7 6 9 4-2 6-5 6-9-2.5-1-5-3-6-6z" />
                <path d="M11 8v4M9 10h4" />
            </svg>
        )
    },
    {
        key: "tourism", label: "Tour Operators", Icon: () => (
            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="M11 3c0 0-4 3-4 8s4 8 4 8M11 3c0 0 4 3 4 8s-4 8-4 8M3 11h16" />
            </svg>
        )
    },
];

const TRACK = [...INDUSTRIES, ...INDUSTRIES];

export default function LogoStrip() {
    return (
        <section
            className="relative overflow-hidden"
            style={{
                background: "#111114",
                borderBottom: "1px solid rgba(245,197,24,0.08)",
                paddingBottom: "40px",
            }}
        >
            {/* Label row */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex items-center gap-4">
                    <span
                        className="block w-5 h-px flex-shrink-0"
                        style={{ background: "#FF1A1A" }}
                    />
                    <p
                        className="text-xs font-500 tracking-[0.2em] uppercase whitespace-nowrap"
                        style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                        Industries we serve
                    </p>
                    <span
                        className="flex-1 h-px"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                    />
                </div>
            </div>

            {/* Left fade */}
            <div
                className="absolute left-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{
                    top: "72px",
                    background: "linear-gradient(90deg, #111114 0%, transparent 100%)",
                }}
            />

            {/* Right fade */}
            <div
                className="absolute right-0 bottom-0 w-32 z-10 pointer-events-none"
                style={{
                    top: "72px",
                    background: "linear-gradient(270deg, #111114 0%, transparent 100%)",
                }}
            />

            {/* Scrolling track */}
            <div
                className="flex gap-3 px-6"
                style={{ animation: "marquee 30s linear infinite" }}
            >
                {TRACK.map((item, i) => (
                    <LogoCard key={`${item.key}-${i}`} label={item.label} Icon={item.Icon} />
                ))}
            </div>

            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}

function LogoCard({
    label,
    Icon,
}: {
    label: string;
    Icon: () => React.ReactElement;
}) {
    return (
        <div
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 cursor-default"
            style={{
                border: "1px solid rgba(245,197,24,0.15)",
                borderRadius: "6px",
                background: "#1A1A1F",
                /* Fixed min-width so cards are uniform */
                minWidth: "175px",
                transitionProperty: "border-color, background",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease",
            }}
            onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(245,197,24,0.42)";
                el.style.background = "#21211A";
            }}
            onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(245,197,24,0.15)";
                el.style.background = "#1A1A1F";
            }}
        >
            <span style={{ color: "#F5C518", opacity: 0.75, flexShrink: 0 }}>
                <Icon />
            </span>
            {/* Force normal font-weight to prevent browser rendering artifacts */}
            <span
                className="whitespace-nowrap"
                style={{
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "0.01em",
                }}
            >
                {label}
            </span>
        </div>
    );
}