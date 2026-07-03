"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ── Metric chips ───────────────────────────────────────────────────────────
const METRIC_CHIPS = [
    {
        value: "4.8×",
        label: "Average ROAS",
        color: "#F5C518",
        bg: "rgba(245,197,24,0.07)",
        border: "rgba(245,197,24,0.16)",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 10L4.5 6L7 8.5L10.5 4.5L13 2" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 2h3v3" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        value: "+312%",
        label: "Avg Revenue Growth",
        color: "#22c55e",
        bg: "rgba(34,197,94,0.06)",
        border: "rgba(34,197,94,0.15)",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 9.5L5 6L7.5 8L11 4" stroke="#22c55e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="4" r="1.5" fill="#22c55e" />
            </svg>
        ),
    },
    {
        value: "50+",
        label: "Brands Served",
        color: "rgba(255,255,255,0.65)",
        bg: "rgba(255,255,255,0.03)",
        border: "rgba(255,255,255,0.08)",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="5" cy="4.5" r="1.8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" />
                <circle cx="9.5" cy="4.5" r="1.8" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" />
                <path d="M1 11.5c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" strokeLinecap="round" />
                <path d="M9.5 8.2c1.8 0.3 3.2 1.5 3.2 3.3" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        value: "98%",
        label: "Client Retention",
        color: "rgba(255,255,255,0.65)",
        bg: "rgba(255,255,255,0.03)",
        border: "rgba(255,255,255,0.08)",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5L8.8 5.2L13 5.8L10 8.7L10.6 13L7 11.1L3.4 13L4 8.7L1 5.8L5.2 5.2L7 1.5Z" stroke="rgba(255,255,255,0.45)" strokeWidth="1.1" strokeLinejoin="round" />
            </svg>
        ),
    },
];

// ── Industry pills ─────────────────────────────────────────────────────────
const INDUSTRIES = [
    {
        label: "Hotels",
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="3" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
                <path d="M4 11V8h4v3" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                <path d="M6 3V1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <rect x="3.5" y="5" width="1.5" height="1.5" rx="0.2" fill="currentColor" opacity="0.5" />
                <rect x="7" y="5" width="1.5" height="1.5" rx="0.2" fill="currentColor" opacity="0.5" />
            </svg>
        ),
    },
    {
        label: "Restaurants",
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M4 1v4c0 1 .8 1.8 1.8 1.8v3.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M5.5 1v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M2.5 1v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M9 1c0 0 1.5 1.2 1.5 3S9 7 9 7v3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Retail",
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1.5 3.5h9L9.5 10H2.5L1.5 3.5Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
                <path d="M4 3.5C4 2.1 4.9 1 6 1s2 1.1 2 2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: "Startups",
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1C6 1 10 3 10 6.5c0 1.6-.8 2.7-2 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M6 1C6 1 2 3 2 6.5c0 1.6.8 2.7 2 3.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <circle cx="6" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1" />
            </svg>
        ),
    },
    {
        label: "Healthcare",
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="1" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1" />
                <path d="M6 3.5v5M3.5 6h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: "Professional",
        icon: (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="4" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1" />
                <path d="M4 4V3a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <path d="M1 7h10" stroke="currentColor" strokeWidth="1" />
                <circle cx="6" cy="7" r="1" fill="currentColor" opacity="0.5" />
            </svg>
        ),
    },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Hero(): React.ReactElement {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 120);
        return () => clearTimeout(t);
    }, []);

    const fadeUp = (delay: string): React.CSSProperties => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.85s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: delay,
    });

    return (
        <section className="relative overflow-hidden" style={{ background: "#000000" }}>

            {/* ── Background atmosphere ────────────────────────────── */}
            {/* Centered gold glow — behind the headline */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(245,197,24,0.07) 0%, transparent 70%)",
                }}
            />
            {/* Crimson glow — bottom center */}
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: 0, left: "50%",
                    transform: "translateX(-50%)",
                    width: "55vw", height: "28vh",
                    background:
                        "radial-gradient(ellipse at center, rgba(204,26,0,0.07) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />

            {/* Top brand rule */}
            <div
                className="absolute top-0 left-0 right-0 h-px z-10"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, #CC1A00 25%, #F5C518 50%, #CC1A00 75%, transparent)",
                }}
            />

            {/* ── Main content ─────────────────────────────────────── */}
            <div
                className="relative z-10 max-w-7xl 2xl:max-w-[1440px] mx-auto w-full px-6 2xl:px-12"
                style={{
                    paddingTop: "clamp(140px, 16vh, 200px)",
                    paddingBottom: "clamp(70px, 9vh, 120px)",
                }}
            >

                {/* 1 ── Status badge */}
                <div className="flex justify-center mb-8" style={fadeUp("80ms")}>
                    <div
                        className="inline-flex items-center gap-2.5 px-4 py-[7px]"
                        style={{
                            background: "rgba(34,197,94,0.06)",
                            border: "1px solid rgba(34,197,94,0.16)",
                            borderRadius: "6px",
                        }}
                    >
                        <span
                            className="rova-hero-pulse"
                            style={{
                                display: "block",
                                width: "6px", height: "6px",
                                borderRadius: "50%",
                                background: "#22c55e",
                                boxShadow: "0 0 8px rgba(34,197,94,0.80)",
                                flexShrink: 0,
                            }}
                        />
                        <span
                            className="text-[11px] font-600 tracking-[0.10em] uppercase"
                            style={{ color: "rgba(34,197,94,0.85)" }}
                        >
                            Now Accepting New Clients
                        </span>
                    </div>
                </div>

                {/* 2 ── Headline */}
                <div className="text-center mb-6" style={fadeUp("200ms")}>
                    <h1
                        className="font-800 leading-[1.06]"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        <span style={{ color: "#FFFFFF" }}>We Make Brands</span>
                        <br />
                        <em
                            style={{
                                color: "#F5C518",
                                fontStyle: "italic",
                                textShadow: "0 0 80px rgba(245,197,24,0.32)",
                            }}
                        >
                            Impossible
                        </em>
                        <span style={{ color: "#FFFFFF" }}> to Ignore</span>
                        <span
                            style={{
                                color: "#CC1A00",
                                textShadow: "0 0 50px rgba(204,26,0,0.55)",
                            }}
                        >
                            .
                        </span>
                    </h1>
                </div>

                {/* 3 ── Subline */}
                <div className="text-center mb-10" style={fadeUp("310ms")}>
                    <p
                        className="mx-auto font-400 leading-relaxed"
                        style={{
                            fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                            color: "rgba(255,255,255,0.40)",
                            maxWidth: "460px",
                        }}
                    >
                        Digital marketing and web development for growing businesses
                        across Sri Lanka — built to convert, designed to last.
                    </p>
                </div>

                {/* 4 ── CTAs */}
                <div
                    className="flex items-center justify-center gap-3 mb-14 flex-wrap"
                    style={fadeUp("400ms")}
                >
                    <Link
                        href="/contact"
                        className="rova-hero-cta inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 relative overflow-hidden"
                        style={{
                            background: "#F5C518",
                            color: "#0D0D0B",
                            borderRadius: "6px",
                            letterSpacing: "0.01em",
                            boxShadow: "0 4px 30px rgba(245,197,24,0.22)",
                        }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start a Project
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path
                                    d="M2 7h10M8 3l4 4-4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span className="rova-shimmer" aria-hidden />
                    </Link>

                    <Link
                        href="/portfolio"
                        className="rova-hero-ghost inline-flex items-center gap-2 px-7 py-3.5 text-sm font-500"
                        style={{
                            border: "1px solid rgba(245,197,24,0.20)",
                            color: "rgba(255,255,255,0.58)",
                            borderRadius: "6px",
                            letterSpacing: "0.01em",
                        }}
                    >
                        View Our Work
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M2 7h10M8 3l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>

                {/* 5 ── Metric chips — 4 in a row */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10"
                    style={fadeUp("500ms")}
                >
                    {METRIC_CHIPS.map((chip, i) => (
                        <div
                            key={chip.label}
                            className="flex items-center gap-3 px-4 py-3"
                            style={{
                                background: chip.bg,
                                border: `1px solid ${chip.border}`,
                                borderRadius: "6px",
                                animation: `heroFloat 5s ease-in-out ${i * 0.7}s infinite alternate`,
                            }}
                        >
                            <div className="flex-shrink-0">{chip.icon}</div>
                            <div className="flex flex-col gap-[3px] min-w-0">
                                <span
                                    className="text-sm font-700 tabular-nums leading-none"
                                    style={{ color: chip.color }}
                                >
                                    {chip.value}
                                </span>
                                <span
                                    className="text-[9px] font-500 leading-none"
                                    style={{
                                        color: "rgba(255,255,255,0.28)",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {chip.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 6 ── Location + industry pills */}
                <div
                    className="flex flex-col items-center gap-4"
                    style={fadeUp("620ms")}
                >
                    {/* Location tag */}
                    <div className="flex items-center gap-2">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path
                                d="M5.5 1C3.6 1 2 2.6 2 4.5c0 2.6 3.5 5.5 3.5 5.5s3.5-2.9 3.5-5.5C9 2.6 7.4 1 5.5 1Z"
                                stroke="rgba(245,197,24,0.40)"
                                strokeWidth="1"
                            />
                            <circle cx="5.5" cy="4.5" r="1.2" fill="rgba(245,197,24,0.40)" />
                        </svg>
                        <span
                            className="text-[11px] font-500 tracking-[0.18em] uppercase"
                            style={{ color: "rgba(255,255,255,0.22)" }}
                        >
                            Nuwara Eliya, Sri Lanka
                        </span>
                    </div>

                    {/* Industry pills */}
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                        {INDUSTRIES.map((ind) => (
                            <div
                                key={ind.label}
                                className="inline-flex items-center gap-1.5 px-3 py-[6px]"
                                style={{
                                    background: "rgba(255,255,255,0.025)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    borderRadius: "6px",
                                    color: "rgba(255,255,255,0.25)",
                                }}
                            >
                                {ind.icon}
                                <span className="text-[10px] font-500 tracking-wide">
                                    {ind.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Bottom gradient rule ─────────────────────────────── */}
            <div
                className="w-full h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, #CC1A00 25%, #F5C518 50%, #CC1A00 75%, transparent)",
                }}
            />

            <style>{`
                @keyframes heroFloat {
                    from { transform: translateY(0px); }
                    to   { transform: translateY(-8px); }
                }
                .rova-hero-pulse {
                    animation: heroPulse 2.2s ease-in-out infinite;
                }
                @keyframes heroPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50%      { opacity: 0.4; transform: scale(0.72); }
                }
                .rova-hero-cta {
                    transition-property: box-shadow, transform;
                    transition-duration: 0.25s;
                    transition-timing-function: ease;
                }
                .rova-hero-cta:hover {
                    box-shadow: 0 6px 40px rgba(245,197,24,0.42) !important;
                    transform: translateY(-1px);
                }
                .rova-shimmer {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%);
                    transform: translateX(-100%);
                    transition-property: transform;
                    transition-duration: 0.5s;
                    transition-timing-function: ease;
                }
                .rova-hero-cta:hover .rova-shimmer {
                    transform: translateX(100%);
                }
                .rova-hero-ghost {
                    transition-property: border-color, color;
                    transition-duration: 0.22s;
                    transition-timing-function: ease;
                }
                .rova-hero-ghost:hover {
                    border-color: rgba(245,197,24,0.42) !important;
                    color: #F5C518 !important;
                }
            `}</style>
        </section>
    );
}