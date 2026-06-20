"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── Services ───────────────────────────────────────────────────────────────
const SERVICES = [
    {
        key: "digital-marketing",
        label: "Digital Marketing",
        description: "Full-funnel campaigns that turn attention into conversion.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l4-5.5 3.5 2.5 4-7 4 4.5" />
                <path d="M18 7h3v3M3 20h18" />
            </svg>
        ),
    },
    {
        key: "social-media",
        label: "Social Media",
        description: "Consistent presence and real growth across every platform.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="2.5" />
                <circle cx="18" cy="19" r="2.5" />
                <circle cx="6" cy="12" r="2.5" />
                <path d="M8.4 10.9l7.2-4.2M8.4 13.1l7.2 4.2" />
            </svg>
        ),
    },
    {
        key: "seo",
        label: "SEO & Performance",
        description: "Rank higher, load faster, convert better — organically.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M16.5 16.5l4 4M8 11h6M11 8v6" />
            </svg>
        ),
    },
    {
        key: "web-dev",
        label: "Web Development",
        description: "Fast, conversion-optimised websites built for your brand.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="15" rx="2" />
                <path d="M2 7h20M8 12l-3 2.5L8 17M16 12l3 2.5L16 17" />
            </svg>
        ),
    },
    {
        key: "branding",
        label: "Branding & Creative",
        description: "Identity systems that make your brand unforgettable.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.6 5.2 5.7.8-4.1 4 1 5.7L12 15l-5.2 2.7 1-5.7-4.1-4 5.7-.8z" />
            </svg>
        ),
    },
    {
        key: "performance",
        label: "Performance Marketing",
        description: "Paid campaigns on Google & Meta — every rupee tracked.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        key: "content",
        label: "Content Creation",
        description: "Photo, video & copy that stops the scroll.",
        Icon: () => (
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20l3-.6L19.5 7.9a2 2 0 00-2.8-2.8L4.6 17.5 4 20z" />
                <path d="M16 6l2.8 2.8M9 15l1.5-1.5" />
            </svg>
        ),
    },
];

// ── Shared card base ────────────────────────────────────────────────────────
const CARD_BASE: React.CSSProperties = {
    background: "#0D0D0B",
    border: "1px solid rgba(245,197,24,0.14)",
    borderRadius: "6px",
};

// ── Component ──────────────────────────────────────────────────────────────
export default function Services(): React.ReactElement {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const fadeUp = (delay: number): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
    });

    function onEnter(e: React.MouseEvent<HTMLElement>) {
        const el = e.currentTarget as HTMLElement;
        el.style.transitionDelay = "0ms";
        el.style.transitionDuration = "0.22s";
        el.style.transitionTimingFunction = "ease";
        el.style.borderColor = "rgba(245,197,24,0.35)";
        el.style.background = "linear-gradient(145deg, rgba(255,26,26,0.05) 0%, rgba(245,197,24,0.07) 100%)";
        el.style.boxShadow = "0 12px 48px rgba(245,197,24,0.10)";
        el.style.transform = "translateY(-4px)";
    }

    function onLeave(e: React.MouseEvent<HTMLElement>) {
        const el = e.currentTarget as HTMLElement;
        el.style.transitionDelay = "0ms";
        el.style.transitionDuration = "0.30s";
        el.style.transitionTimingFunction = "ease";
        el.style.borderColor = "rgba(245,197,24,0.14)";
        el.style.background = "#0D0D0B";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
    }

    return (
        <section
            ref={sectionRef}
            style={{
                background: "#000000",
                paddingTop: "clamp(80px, 10vh, 130px)",
                paddingBottom: "clamp(80px, 10vh, 130px)",
            }}
        >
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 2xl:px-12">

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 mb-5" style={fadeUp(0)}>
                    <span className="block w-5 h-px flex-shrink-0" style={{ background: "#FF1A1A" }} />
                    <span className="text-xs font-500 tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                        What We Do
                    </span>
                </div>

                {/* Headline */}
                <h2
                    className="font-800 leading-tight mb-3"
                    style={{
                        ...fadeUp(70),
                        fontSize: "clamp(2rem, 4vw, 3.4rem)",
                        letterSpacing: "-0.02em",
                        color: "#FFFFFF",
                    }}
                >
                    Services That{" "}
                    <span style={{ color: "#F5C518", textShadow: "0 0 60px rgba(245,197,24,0.35)" }}>
                        Move
                    </span>{" "}
                    the Needle
                </h2>

                {/* Subline */}
                <p
                    className="mb-12"
                    style={{
                        ...fadeUp(130),
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.42)",
                        lineHeight: 1.7,
                        maxWidth: "460px",
                    }}
                >
                    Everything your brand needs to grow digitally — strategy,
                    creative, and execution — under one roof.
                </p>

                {/* ── 4-column grid ── */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    style={fadeUp(100)}
                >
                    {/* Service cards */}
                    {SERVICES.map((service, i) => (
                        <div
                            key={service.key}
                            className="rova-svc-card relative flex flex-col p-7"
                            style={{
                                ...CARD_BASE,
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(22px)",
                                transitionProperty: "opacity, transform, border-color, background, box-shadow",
                                transitionDuration: "0.65s",
                                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                                transitionDelay: `${200 + i * 60}ms`,
                                minHeight: "220px",
                                cursor: "default",
                            }}
                            onMouseEnter={onEnter}
                            onMouseLeave={onLeave}
                        >
                            {/* Gold-red top edge glow on hover */}
                            <div
                                className="rova-card-topline absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
                                style={{
                                    background: "linear-gradient(90deg, transparent, #FF1A1A 25%, #F5C518 50%, #FF1A1A 75%, transparent)",
                                    borderRadius: "6px 6px 0 0",
                                }}
                            />

                            {/* Number */}
                            <span style={{
                                fontSize: "10px",
                                fontWeight: 600,
                                color: "rgba(255,26,26,0.55)",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                            }}>
                                {String(i + 1).padStart(2, "0")}
                            </span>

                            {/* Title — uppercase bold */}
                            <h3
                                className="font-800 leading-tight mt-2"
                                style={{
                                    fontSize: "15px",
                                    color: "#FFFFFF",
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {service.label}
                            </h3>

                            {/* Large central icon */}
                            <div
                                className="rova-svc-icon flex-1 flex items-center justify-center"
                                style={{
                                    color: "rgba(245,197,24,0.85)",
                                    paddingTop: "12px",
                                    paddingBottom: "12px",
                                    transitionProperty: "transform, color",
                                    transitionDuration: "0.3s",
                                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                                }}
                            >
                                <service.Icon />
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.45)",
                                lineHeight: 1.65,
                            }}>
                                {service.description}
                            </p>
                        </div>
                    ))}

                    {/* CTA card — same dimensions as service cards, 8th slot */}
                    <Link
                        href="/services"
                        className="rova-cta-card relative flex flex-col items-center justify-center gap-4 p-7 text-center"
                        style={{
                            ...CARD_BASE,
                            border: "1px dashed rgba(245,197,24,0.22)",
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(22px)",
                            transitionProperty: "opacity, transform, border-color, background, box-shadow",
                            transitionDuration: "0.65s",
                            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                            transitionDelay: `${200 + SERVICES.length * 60}ms`,
                            minHeight: "220px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.transitionDelay = "0ms";
                            el.style.transitionDuration = "0.22s";
                            el.style.borderColor = "rgba(245,197,24,0.40)";
                            el.style.background = "linear-gradient(145deg, rgba(255,26,26,0.05) 0%, rgba(245,197,24,0.07) 100%)";
                            el.style.boxShadow = "0 12px 48px rgba(245,197,24,0.10)";
                            el.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.transitionDelay = "0ms";
                            el.style.transitionDuration = "0.30s";
                            el.style.borderColor = "rgba(245,197,24,0.22)";
                            el.style.background = "#0D0D0B";
                            el.style.boxShadow = "none";
                            el.style.transform = "translateY(0)";
                        }}
                    >
                        <div
                            className="rova-cta-circle flex items-center justify-center"
                            style={{
                                width: "52px",
                                height: "52px",
                                border: "1px solid rgba(245,197,24,0.25)",
                                borderRadius: "50%",
                                color: "rgba(245,197,24,0.70)",
                                transitionProperty: "border-color, color, background",
                                transitionDuration: "0.22s",
                                transitionTimingFunction: "ease",
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M4 9h10M9.5 5L14 9l-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <p style={{
                                fontSize: "15px",
                                fontWeight: 800,
                                color: "#FFFFFF",
                                letterSpacing: "0.02em",
                                textTransform: "uppercase",
                            }}>
                                Explore All Services
                            </p>
                            <p style={{
                                fontSize: "13px",
                                color: "rgba(255,255,255,0.40)",
                                lineHeight: 1.6,
                            }}>
                                Detailed breakdowns &amp; packages for every service.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <style>{`
                .rova-svc-card .rova-card-topline { opacity: 0; transition: opacity 0.2s ease; }
                .rova-svc-card:hover .rova-card-topline { opacity: 1; }

                .rova-svc-card:hover .rova-svc-icon {
                    transform: scale(1.08);
                    color: #F5C518;
                }

                .rova-cta-card:hover .rova-cta-circle {
                    border-color: rgba(245,197,24,0.60);
                    color: #F5C518;
                    background: rgba(245,197,24,0.08);
                }
            `}</style>
        </section>
    );
}