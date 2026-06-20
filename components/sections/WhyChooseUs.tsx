"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const REASONS = [
    {
        number: "01",
        title: "Sri Lanka Market Expertise",
        tag: "Local Knowledge",
        description: "We understand the culture, the consumer, and the hospitality landscape of Sri Lanka. That context shapes every campaign we build — nothing generic, nothing imported.",
    },
    {
        number: "02",
        title: "Full-Service, Zero Silos",
        tag: "One Roof",
        description: "Strategy, creative, web development, and paid media — one team, fully aligned. No handoffs between agencies, no misaligned messaging, no wasted budget.",
    },
    {
        number: "03",
        title: "Proven in Hospitality",
        tag: "Track Record",
        description: "Hotels, resorts, villas, and tour operators trust us to fill bookings. We've built our reputation in this specific industry and the results speak for themselves.",
    },
    {
        number: "04",
        title: "Every Decision is Data-Led",
        tag: "Analytics First",
        description: "No guesswork, no gut feelings. Every campaign, every post, every rupee is tracked against real KPIs — then optimised until the numbers move in the right direction.",
    },
    {
        number: "05",
        title: "Startup Speed, Agency Quality",
        tag: "Agility",
        description: "We move fast without sacrificing strategy. You get the responsiveness of a lean team with the output and thinking of a full-scale agency.",
    },
    {
        number: "06",
        title: "Complete Transparency",
        tag: "No Hidden Anything",
        description: "You always know exactly what your budget is doing and what it's returning. Full reporting, direct communication, honest conversations — no smoke and mirrors.",
    },
];

const PROOF = [
    { value: "4.8×", label: "Average ROAS" },
    { value: "98%", label: "Client Retention" },
    { value: "50+", label: "Brands Served" },
    { value: "5 yrs", label: "Deep Local Roots" },
];

export default function WhyChooseUs(): React.ReactElement {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold: 0.06 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const fadeUp = (delay: number): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionProperty: "opacity, transform",
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
    });

    return (
        <section
            ref={sectionRef}
            style={{
                background: "#080808",
                paddingTop: "clamp(80px, 10vh, 130px)",
                paddingBottom: "clamp(80px, 10vh, 130px)",
                borderTop: "1px solid rgba(255,255,255,0.04)",
            }}
        >
            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 2xl:px-12">

                {/* ── Top: header + proof strip ─────────────────────────── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

                    {/* Left: eyebrow + headline */}
                    <div className="flex flex-col gap-4 max-w-xl">
                        <div className="inline-flex items-center gap-3" style={fadeUp(0)}>
                            <span className="block w-5 h-px flex-shrink-0" style={{ background: "#FF1A1A" }} />
                            <span className="text-xs font-500 tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                                Why Choose Us
                            </span>
                        </div>

                        <h2
                            className="font-800 leading-tight"
                            style={{
                                ...fadeUp(70),
                                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                                letterSpacing: "-0.02em",
                                color: "#FFFFFF",
                            }}
                        >
                            The Reason Brands{" "}
                            <span style={{ color: "#F5C518", textShadow: "0 0 60px rgba(245,197,24,0.35)" }}>
                                Stay.
                            </span>
                        </h2>

                        <p style={{
                            ...fadeUp(130),
                            fontSize: "15px",
                            color: "rgba(255,255,255,0.42)",
                            lineHeight: 1.7,
                        }}>
                            We don't pitch for every brand. We go deep with the ones we work with —
                            and that focus shows in the results.
                        </p>
                    </div>

                    {/* Right: mini proof strip */}
                    <div
                        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-px lg:max-w-xs xl:max-w-none"
                        style={{
                            ...fadeUp(160),
                            border: "1px solid rgba(245,197,24,0.10)",
                            borderRadius: "6px",
                            overflow: "hidden",
                            background: "rgba(245,197,24,0.10)",
                            flexShrink: 0,
                        }}
                    >
                        {PROOF.map((p) => (
                            <div
                                key={p.label}
                                className="flex flex-col gap-1 px-5 py-4"
                                style={{ background: "#080808" }}
                            >
                                <span style={{
                                    fontSize: "22px",
                                    fontWeight: 800,
                                    color: "#F5C518",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1,
                                }}>
                                    {p.value}
                                </span>
                                <span style={{
                                    fontSize: "10px",
                                    color: "rgba(255,255,255,0.38)",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                }}>
                                    {p.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Numbered reasons list ─────────────────────────────── */}
                <div className="flex flex-col">
                    {REASONS.map((reason, i) => (
                        <div
                            key={reason.number}
                            className="rova-reason-row group relative"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(16px)",
                                transitionProperty: "opacity, transform",
                                transitionDuration: "0.65s",
                                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                                transitionDelay: `${220 + i * 70}ms`,
                            }}
                        >
                            {/* Left accent bar — appears on hover */}
                            <div
                                className="rova-reason-accent absolute left-0 top-0 bottom-0 w-[2px] pointer-events-none"
                                style={{
                                    background: "linear-gradient(180deg, #FF1A1A, #F5C518)",
                                    borderRadius: "0 2px 2px 0",
                                }}
                            />

                            {/* Row content */}
                            <div
                                className="grid items-start gap-6 py-8 px-6 cursor-default"
                                style={{
                                    gridTemplateColumns: "56px 1fr 1.1fr",
                                    borderTop: "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                {/* Number */}
                                <span
                                    className="rova-reason-number font-800 leading-none flex-shrink-0 pt-1"
                                    style={{
                                        fontSize: "clamp(32px, 3.5vw, 48px)",
                                        color: "#F5C518",
                                        letterSpacing: "-0.03em",
                                        lineHeight: 1,
                                    }}
                                >
                                    {reason.number}
                                </span>

                                {/* Title + tag */}
                                <div className="flex flex-col gap-2">
                                    <span style={{
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        color: "rgba(255,26,26,0.55)",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                    }}>
                                        {reason.tag}
                                    </span>
                                    <h3
                                        className="rova-reason-title font-700 leading-tight"
                                        style={{
                                            fontSize: "clamp(16px, 1.5vw, 20px)",
                                            color: "#FFFFFF",
                                            letterSpacing: "-0.01em",
                                        }}
                                    >
                                        {reason.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p
                                    className="hidden md:block"
                                    style={{
                                        fontSize: "14px",
                                        color: "rgba(255,255,255,0.45)",
                                        lineHeight: 1.75,
                                    }}
                                >
                                    {reason.description}
                                </p>
                            </div>

                            {/* Mobile description (shown below grid on small screens) */}
                            <p
                                className="md:hidden px-6 pb-6"
                                style={{
                                    fontSize: "13px",
                                    color: "rgba(255,255,255,0.42)",
                                    lineHeight: 1.7,
                                }}
                            >
                                {reason.description}
                            </p>
                        </div>
                    ))}

                    {/* Closing border */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
                </div>

                {/* ── Bottom CTA ────────────────────────────────────────── */}
                <div
                    className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                    style={fadeUp(220 + REASONS.length * 70 + 60)}
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-700"
                        style={{
                            background: "#F5C518",
                            color: "#000000",
                            borderRadius: "6px",
                            letterSpacing: "0.01em",
                            boxShadow: "0 4px 24px rgba(245,197,24,0.30)",
                            transitionProperty: "background, box-shadow, transform",
                            transitionDuration: "0.22s",
                            transitionTimingFunction: "ease",
                        }}
                        onMouseEnter={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "#FFD740";
                            el.style.boxShadow = "0 8px 40px rgba(245,197,24,0.50)";
                            el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={e => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background = "#F5C518";
                            el.style.boxShadow = "0 4px 24px rgba(245,197,24,0.30)";
                            el.style.transform = "translateY(0)";
                        }}
                    >
                        Start Working Together
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.30)" }}>
                        No contracts, no lock-ins.{" "}
                        <span style={{ color: "rgba(255,255,255,0.55)" }}>
                            Start with a free strategy session.
                        </span>
                    </p>
                </div>
            </div>

            <style>{`
                /* Accent bar — hidden, slides in from left on hover */
                .rova-reason-row .rova-reason-accent {
                    opacity:   0;
                    transform: scaleY(0.4);
                    transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.22,1,0.36,1);
                    transform-origin: top;
                }
                .rova-reason-row:hover .rova-reason-accent {
                    opacity:   1;
                    transform: scaleY(1);
                }

                /* Row background wash on hover */
                .rova-reason-row:hover > div:first-of-type {
                    background: linear-gradient(
                        90deg,
                        rgba(245,197,24,0.04) 0%,
                        transparent 60%
                    );
                }

                /* Number: dim by default, full gold on hover */
                .rova-reason-row .rova-reason-number {
                    opacity: 0.28;
                    transition: opacity 0.2s ease;
                }
                .rova-reason-row:hover .rova-reason-number {
                    opacity: 1;
                }

                /* Title: brightens slightly on hover */
                .rova-reason-row .rova-reason-title {
                    transition: color 0.2s ease;
                }
                .rova-reason-row:hover .rova-reason-title {
                    color: #F5C518 !important;
                }
            `}</style>
        </section>
    );
}