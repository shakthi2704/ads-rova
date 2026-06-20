"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── Animated counter ───────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let t0: number | null = null;
        const tick = (ts: number) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [target, duration, start]);
    return count;
}

const STATS = [
    { value: 50, suffix: "+", label: "Brands Grown" },
    { value: 98, suffix: "%", label: "Client Retention" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 120, suffix: "+", label: "Projects Delivered" },
];

function StatItem({ value, suffix, label, start }: {
    value: number; suffix: string; label: string; start: boolean;
}) {
    const n = useCounter(value, 2000, start);
    return (
        <div className="flex flex-col gap-2">
            <span
                className="text-3xl lg:text-4xl font-700 tabular-nums leading-none"
                style={{ color: "#F5C518" }}
            >
                {n}{suffix}
            </span>
            <span
                className="text-[11px] font-500 tracking-[0.14em] uppercase"
                style={{ color: "rgba(255,255,255,0.42)" }}
            >
                {label}
            </span>
        </div>
    );
}

// ── Analytics card data ────────────────────────────────────────────────────
const PLATFORMS = [
    { name: "Instagram", reach: "28.4K", pct: 74 },
    { name: "Facebook", reach: "19.2K", pct: 54 },
    { name: "Google Ads", reach: "41.8K", pct: 88 },
];

const METRICS = [
    { label: "ROAS", value: "4.8×", sub: "+0.6 ↑" },
    { label: "Bookings", value: "+312%", sub: "vs prev" },
    { label: "Traffic", value: "+247%", sub: "organic" },
];

const AVATARS = [
    { bg: "#F5C518", t: "LH" },
    { bg: "#FF1A1A", t: "SR" },
    { bg: "#C49A14", t: "MV" },
    { bg: "#CC1515", t: "NK" },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Hero(): React.ReactElement {
    const [mounted, setMounted] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const el = statsRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
            { threshold: 0.2 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const fadeUp = (delay: string): React.CSSProperties => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(24px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.8s",
        transitionTimingFunction: "ease",
        transitionDelay: delay,
    });

    return (
        <section
            className="relative flex flex-col overflow-hidden"
            style={{ background: "#000000" }}
        >
            {/* Top brand line */}
            <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, #FF1A1A 30%, #F5C518 60%, transparent)",
                }}
            />

            {/* Gold glow — top right — pops more on pure black */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: "-15%", right: "-8%",
                    width: "55vw", height: "55vw",
                    background:
                        "radial-gradient(ellipse at center, rgba(245,197,24,0.13) 0%, rgba(245,197,24,0.05) 40%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                }}
            />

            {/* Crimson glow — bottom left */}
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: "-8%", left: "-8%",
                    width: "40vw", height: "40vw",
                    background:
                        "radial-gradient(ellipse at center, rgba(255,26,26,0.10) 0%, transparent 65%)",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                }}
            />

            {/* Subtle grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                    maskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
                }}
            />

            {/* ── Main grid ─────────────────────────────────────────────── */}
            <div
                className="relative z-10 flex-1 max-w-7xl 2xl:max-w-[1440px] mx-auto w-full px-6 2xl:px-12"
                style={{
                    paddingTop: "clamp(120px, 13vh, 180px)",
                    paddingBottom: "clamp(60px, 8vh, 100px)",
                }}
            >
                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">

                    {/* ══ LEFT: Redesigned ══════════════════════════════════ */}
                    <div className="flex flex-col gap-6 max-w-2xl">

                        {/* Eyebrow */}
                        <div style={fadeUp("100ms")}>
                            <div className="inline-flex items-center gap-3">
                                <span
                                    className="block w-5 h-px flex-shrink-0"
                                    style={{ background: "#FF1A1A" }}
                                />
                                <span
                                    className="text-xs font-500 tracking-[0.2em] uppercase"
                                    style={{ color: "rgba(255,255,255,0.45)" }}
                                >
                                    Nuwara Eliya · Sri Lanka
                                </span>
                            </div>
                        </div>

                        {/* Headline */}
                        <div style={fadeUp("180ms")}>
                            <h1
                                className="leading-[1.02] tracking-tight"
                                style={{ fontSize: "clamp(3rem, 6.5vw, 5.8rem)" }}
                            >
                                <span
                                    className="block font-800"
                                    style={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
                                >
                                    Your Brand
                                </span>
                                <span className="block" style={{ letterSpacing: "-0.02em" }}>
                                    <em
                                        style={{
                                            fontStyle: "italic",
                                            fontWeight: 800,
                                            color: "#F5C518",
                                        }}
                                    >
                                        Deserves
                                    </em>{" "}
                                    <span className="font-800" style={{ color: "#FFFFFF" }}>
                                        to
                                    </span>
                                </span>
                                <span className="block" style={{ letterSpacing: "-0.03em" }}>
                                    <span className="font-800" style={{ color: "#FFFFFF" }}>
                                        Be{" "}
                                    </span>
                                    <span
                                        className="font-800"
                                        style={{
                                            color: "#F5C518",
                                            textShadow: "0 0 80px rgba(245,197,24,0.40)",
                                        }}
                                    >
                                        Seen
                                    </span>
                                    <span
                                        className="font-800"
                                        style={{
                                            color: "#FF1A1A",
                                            textShadow: "0 0 50px rgba(255,26,26,0.50)",
                                        }}
                                    >
                                        .
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Pull-quote subline with gold left border */}
                        <div
                            style={{
                                ...fadeUp("280ms"),
                                borderLeft: "3px solid rgba(245,197,24,0.55)",
                                paddingLeft: "18px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <p
                                className="text-lg leading-snug font-400"
                                style={{ color: "rgba(255,255,255,0.72)" }}
                            >
                                From boutique hotels to bold startups — we turn
                                digital presence into measurable growth.
                            </p>
                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.35)" }}
                            >
                                Campaigns that perform.&nbsp; Websites that convert.&nbsp; Brands that last.
                            </p>
                        </div>

                        {/* Gradient HR separator */}
                        <div
                            style={{
                                ...fadeUp("330ms"),
                                height: "1px",
                                background:
                                    "linear-gradient(90deg, rgba(245,197,24,0.25), rgba(255,255,255,0.07) 55%, transparent)",
                            }}
                        />

                        {/* CTAs + inline stat ─────────────────────────────── */}
                        <div
                            className="flex flex-wrap items-center gap-3"
                            style={fadeUp("400ms")}
                        >
                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-700"
                                style={{
                                    background: "#F5C518",
                                    color: "#000000",
                                    borderRadius: "6px",
                                    boxShadow: "0 6px 32px rgba(245,197,24,0.35)",
                                    letterSpacing: "0.01em",
                                    transitionProperty: "background, box-shadow, transform",
                                    transitionDuration: "0.25s",
                                    transitionTimingFunction: "ease",
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "#FFD740";
                                    el.style.boxShadow = "0 10px 48px rgba(245,197,24,0.55)";
                                    el.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = "#F5C518";
                                    el.style.boxShadow = "0 6px 32px rgba(245,197,24,0.35)";
                                    el.style.transform = "translateY(0)";
                                }}
                            >
                                Start a Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                        d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>

                            {/* Secondary CTA — WhatsApp */}
                            <a
                                href="https://wa.me/94XXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-500"
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    color: "rgba(255,255,255,0.72)",
                                    borderRadius: "6px",
                                    letterSpacing: "0.01em",
                                    transitionProperty: "border-color, color, background, transform",
                                    transitionDuration: "0.25s",
                                    transitionTimingFunction: "ease",
                                }}
                                onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = "rgba(245,197,24,0.45)";
                                    el.style.color = "#F5C518";
                                    el.style.background = "rgba(245,197,24,0.06)";
                                    el.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.borderColor = "rgba(255,255,255,0.12)";
                                    el.style.color = "rgba(255,255,255,0.72)";
                                    el.style.background = "rgba(255,255,255,0.05)";
                                    el.style.transform = "translateY(0)";
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>

                            {/* Thin vertical divider */}
                            <div
                                style={{
                                    width: "1px",
                                    height: "38px",
                                    background: "rgba(255,255,255,0.10)",
                                    flexShrink: 0,
                                }}
                            />

                            {/* Inline ROAS stat */}
                            <div className="flex flex-col gap-0.5">
                                <span
                                    className="font-700 tabular-nums leading-none"
                                    style={{
                                        fontSize: "20px",
                                        color: "#F5C518",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    ↑ 4.8×
                                </span>
                                <span
                                    style={{
                                        fontSize: "10px",
                                        color: "rgba(255,255,255,0.35)",
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    avg ROAS for clients
                                </span>
                            </div>
                        </div>

                        {/* Trust avatars row */}
                        <div
                            className="flex items-center gap-3"
                            style={fadeUp("480ms")}
                        >
                            <div className="flex -space-x-2">
                                {AVATARS.map(({ bg, t }) => (
                                    <div
                                        key={t}
                                        className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-700 border-2"
                                        style={{
                                            background: bg,
                                            color: "#000000",
                                            borderColor: "#000000",
                                        }}
                                    >
                                        {t}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>
                                Trusted by{" "}
                                <span style={{ color: "rgba(255,255,255,0.80)", fontWeight: 600 }}>
                                    50+ brands
                                </span>{" "}
                                across Sri Lanka
                            </p>
                        </div>
                    </div>

                    {/* ══ RIGHT: Stacked Analytics Cards (unchanged) ════════ */}
                    <div
                        className="relative hidden lg:block w-full"
                        style={{
                            height: "clamp(440px, 38vw, 520px)",
                            maxWidth: "440px",
                            marginLeft: "auto",
                            opacity: mounted ? 1 : 0,
                            transitionProperty: "opacity",
                            transitionDuration: "1s",
                            transitionTimingFunction: "ease",
                            transitionDelay: "500ms",
                        }}
                    >
                        {/* Soft radial glow */}
                        <div
                            className="absolute pointer-events-none"
                            style={{
                                top: "50%", left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "340px", height: "340px",
                                background:
                                    "radial-gradient(circle, rgba(245,197,24,0.09) 0%, transparent 70%)",
                                borderRadius: "50%",
                                filter: "blur(32px)",
                            }}
                        />

                        {/* Back card: Campaign Overview */}
                        <div
                            className="absolute"
                            style={{
                                top: "6%",
                                right: "0",
                                width: "78%",
                                maxWidth: "300px",
                                zIndex: 1,
                                background: "#1A1A1F",
                                border: "1px solid rgba(245,197,24,0.12)",
                                borderRadius: "12px",
                                padding: "18px 20px",
                                transform: "rotate(-4.5deg)",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.70)",
                                opacity: 0.90,
                            }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span
                                    style={{
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        color: "rgba(255,255,255,0.38)",
                                        letterSpacing: "0.10em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Campaign Overview
                                </span>
                                <div className="flex items-center gap-1.5">
                                    <span
                                        style={{
                                            width: "5px",
                                            height: "5px",
                                            borderRadius: "50%",
                                            background: "#22c55e",
                                            display: "block",
                                            boxShadow: "0 0 6px rgba(34,197,94,0.90)",
                                            animation: "pulseDot 2.2s ease-in-out infinite",
                                        }}
                                    />
                                    <span style={{ fontSize: "10px", color: "#22c55e", fontWeight: 500 }}>
                                        Live
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                {PLATFORMS.map((p) => (
                                    <div key={p.name} className="flex items-center gap-3">
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                color: "rgba(255,255,255,0.38)",
                                                width: "70px",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {p.name}
                                        </span>
                                        <div
                                            style={{
                                                flex: 1,
                                                height: "3px",
                                                background: "rgba(255,255,255,0.07)",
                                                borderRadius: "2px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${p.pct}%`,
                                                    height: "100%",
                                                    background: "linear-gradient(90deg, rgba(245,197,24,0.50), #F5C518)",
                                                    borderRadius: "2px",
                                                }}
                                            />
                                        </div>
                                        <span
                                            style={{
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                color: "rgba(255,255,255,0.55)",
                                                width: "38px",
                                                textAlign: "right",
                                                flexShrink: 0,
                                            }}
                                        >
                                            {p.reach}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Front card: Performance Dashboard */}
                        <div
                            className="absolute"
                            style={{
                                bottom: "6%",
                                left: "0",
                                width: "84%",
                                maxWidth: "320px",
                                zIndex: 5,
                                background: "#1A1A1F",
                                border: "1px solid rgba(245,197,24,0.20)",
                                borderRadius: "12px",
                                padding: "20px",
                                transform: "rotate(2.5deg)",
                                boxShadow:
                                    "0 28px 80px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.04)",
                            }}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span
                                    style={{
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        color: "rgba(255,255,255,0.38)",
                                        letterSpacing: "0.10em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Performance
                                </span>
                                <span
                                    style={{
                                        fontSize: "10px",
                                        color: "rgba(255,255,255,0.22)",
                                        background: "rgba(255,255,255,0.05)",
                                        padding: "3px 8px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    Last 30 days
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: "8px",
                                    marginBottom: "14px",
                                }}
                            >
                                {METRICS.map((m) => (
                                    <div
                                        key={m.label}
                                        style={{
                                            background: "rgba(245,197,24,0.06)",
                                            border: "1px solid rgba(245,197,24,0.08)",
                                            borderRadius: "8px",
                                            padding: "10px 6px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: 700,
                                                color: "#F5C518",
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {m.value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "9px",
                                                color: "rgba(255,255,255,0.28)",
                                                marginTop: "3px",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.06em",
                                            }}
                                        >
                                            {m.label}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "9px",
                                                color: "#22c55e",
                                                marginTop: "2px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {m.sub}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    borderRadius: "8px",
                                    padding: "12px 10px 8px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "8px",
                                    }}
                                >
                                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.26)" }}>
                                        Revenue trend
                                    </span>
                                    <span style={{ fontSize: "10px", color: "#22c55e", fontWeight: 600 }}>
                                        ↑ 23% MoM
                                    </span>
                                </div>
                                <svg width="100%" height="44" viewBox="0 0 250 44" fill="none">
                                    <defs>
                                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#F5C518" stopOpacity="0.28" />
                                            <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0 36 C22 34 32 30 52 26 C72 22 82 28 102 20 C122 12 135 19 155 11 C172 5 186 15 206 9 C222 4 236 2 250 0 L250 44 L0 44 Z"
                                        fill="url(#heroChartGrad)"
                                    />
                                    <path
                                        d="M0 36 C22 34 32 30 52 26 C72 22 82 28 102 20 C122 12 135 19 155 11 C172 5 186 15 206 9 C222 4 236 2 250 0"
                                        stroke="#F5C518"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                    <circle cx="250" cy="0" r="3" fill="#F5C518" />
                                    <circle cx="250" cy="0" r="5.5" fill="#F5C518" fillOpacity="0.20" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating chip: Campaign Active */}
                        <div
                            className="absolute flex items-center gap-2"
                            style={{
                                top: "0",
                                left: "4%",
                                zIndex: 10,
                                background: "rgba(245,197,24,0.08)",
                                border: "1px solid rgba(245,197,24,0.22)",
                                borderRadius: "6px",
                                padding: "6px 11px",
                                animation: "floatChip 5s ease-in-out infinite alternate",
                            }}
                        >
                            <span
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    background: "#F5C518",
                                    display: "block",
                                    boxShadow: "0 0 8px rgba(245,197,24,0.80)",
                                    animation: "pulseDot 2s ease-in-out infinite",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    color: "#F5C518",
                                    letterSpacing: "0.07em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Campaign Active
                            </span>
                        </div>

                        {/* Floating chip: Bookings */}
                        <div
                            className="absolute flex items-center gap-2"
                            style={{
                                bottom: "0",
                                right: "4%",
                                zIndex: 10,
                                background: "rgba(34,197,94,0.07)",
                                border: "1px solid rgba(34,197,94,0.18)",
                                borderRadius: "6px",
                                padding: "6px 11px",
                                animation: "floatChip 6s ease-in-out 1.5s infinite alternate",
                            }}
                        >
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                <path
                                    d="M1.5 8L4 4.5L6.5 6.5L9.5 2"
                                    stroke="#22c55e"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span
                                style={{
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    color: "rgba(34,197,94,0.80)",
                                    letterSpacing: "0.03em",
                                }}
                            >
                                +312% bookings this month
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="relative z-10 h-px w-full"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, #FF1A1A 25%, #F5C518 50%, #FF1A1A 75%, transparent 100%)",
                }}
            />

            {/* ── Stats strip ─────────────────────────────────────────────── */}
            <div
                ref={statsRef}
                className="relative z-10 w-full"
                style={{
                    background: "#000000",
                    borderTop: "1px solid rgba(245,197,24,0.08)",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
                        {STATS.map((s, i) => (
                            <div
                                key={s.label}
                                className="lg:px-10 first:lg:pl-0 last:lg:pr-0"
                                style={{
                                    borderRight:
                                        i < STATS.length - 1
                                            ? "1px solid rgba(245,197,24,0.08)"
                                            : "none",
                                }}
                            >
                                <StatItem {...s} start={statsVisible} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes floatChip {
                    from { transform: translateY(0px);  }
                    to   { transform: translateY(-9px); }
                }
                @keyframes pulseDot {
                    0%, 100% { opacity: 1;    transform: scale(1);   }
                    50%      { opacity: 0.45; transform: scale(0.80);}
                }
            `}</style>
        </section>
    );
}