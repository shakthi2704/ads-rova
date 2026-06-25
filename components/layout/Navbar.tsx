"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Packages", href: "/packages" },
    { label: "Contact", href: "/contact" },
];
export default function Navbar(): React.ReactElement {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const isActive = (href: string) =>
        pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
        <>
            {/* ── Desktop / Scroll header ── */}
            <header
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    background: scrolled ? "rgba(15,15,18,0.96)" : "transparent",
                    backdropFilter: scrolled ? "blur(24px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(245,197,24,0.10)"
                        : "1px solid transparent",
                    padding: scrolled ? "13px 0" : "22px 0",
                    transitionProperty: "background, border-color, padding, backdrop-filter",
                    transitionDuration: "0.45s",
                    transitionTimingFunction: "ease",
                }}
            >
                {/* Gold–crimson rule that appears on scroll */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, #FF1A1A 25%, #F5C518 50%, #FF1A1A 75%, transparent 100%)",
                        opacity: scrolled ? 1 : 0,
                        transitionProperty: "opacity",
                        transitionDuration: "0.45s",
                        transitionTimingFunction: "ease",
                    }}
                />

                <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">

                    {/* ── Logo ── */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 flex-shrink-0 group"
                        aria-label="ADS ROVA home"
                    >
                        <div
                            className="relative w-9 h-9 flex-shrink-0"
                            style={{
                                transitionProperty: "transform",
                                transitionDuration: "0.3s",
                                transitionTimingFunction: "ease",
                            }}
                        >
                            <Image
                                src="/logo/logo.png"
                                alt="ADS ROVA"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col leading-none gap-[3px]">
                            <span
                                className="text-[11px] font-700 tracking-[0.24em] uppercase"
                                style={{ color: "#F5C518" }}
                            >
                                ADS ROVA
                            </span>
                            <span
                                className="text-[9px] font-400 tracking-[0.14em] uppercase"
                                style={{ color: "rgba(255,255,255,0.32)" }}
                            >
                                Digital Marketing
                            </span>
                        </div>
                    </Link>

                    {/* ── Desktop nav links ── */}
                    <ul className="hidden lg:flex items-center">
                        {NAV_LINKS.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        data-active={active ? "true" : "false"}
                                        className="rova-nav-link relative px-3.5 py-2 text-sm font-500 tracking-wide inline-block"
                                        style={{
                                            color: active
                                                ? "#F5C518"
                                                : "rgba(255,255,255,0.55)",
                                        }}
                                    >
                                        {link.label}
                                        {/* Underline — always visible on active, slides in on hover */}
                                        <span
                                            className="rova-nav-underline absolute bottom-1 left-3.5 right-3.5 h-px"
                                            style={{
                                                background: "#F5C518",
                                                transformOrigin: "left center",
                                                transform: active ? "scaleX(1)" : "scaleX(0)",
                                                transitionProperty: "transform",
                                                transitionDuration: "0.24s",
                                                transitionTimingFunction: "ease",
                                            }}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ── Right: CTA + Hamburger ── */}
                    <div className="flex items-center gap-3">

                        {/* Desktop CTA */}
                        <Link
                            href="/contact"
                            className="rova-cta hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-600 overflow-hidden"
                            style={{
                                background: "#F5C518",
                                color: "#0F0F12",
                                borderRadius: "6px",
                                boxShadow: "0 4px 20px rgba(245,197,24,0.28)",
                                letterSpacing: "0.01em",
                                position: "relative",
                            }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project
                                <svg
                                    className="rova-cta-arrow"
                                    width="13" height="13" viewBox="0 0 13 13" fill="none"
                                >
                                    <path
                                        d="M2 6.5h9M7.5 3L11 6.5 7.5 10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            {/* Shimmer overlay */}
                            <span className="rova-cta-shimmer" aria-hidden />
                        </Link>

                        {/* Hamburger — cleaner X animation */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-[6px]"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            {[0, 1, 2].map((i) => (
                                <span
                                    key={i}
                                    className="block"
                                    style={{
                                        height: "1.5px",
                                        background: "#F5C518",
                                        borderRadius: "1px",
                                        width: i === 1 ? (menuOpen ? "0px" : "14px") : "22px",
                                        opacity: i === 1 && menuOpen ? 0 : 1,
                                        transform:
                                            i === 0 && menuOpen ? "translateY(7.5px) rotate(45deg)" :
                                                i === 2 && menuOpen ? "translateY(-7.5px) rotate(-45deg)" :
                                                    "none",
                                        transitionProperty: "transform, width, opacity",
                                        transitionDuration: "0.3s",
                                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>

            {/* ── Mobile full-screen menu ── */}
            <div
                className="fixed inset-0 z-40 flex flex-col"
                style={{
                    background: "#0F0F12",
                    opacity: menuOpen ? 1 : 0,
                    pointerEvents: menuOpen ? "auto" : "none",
                    transitionProperty: "opacity",
                    transitionDuration: "0.38s",
                    transitionTimingFunction: "ease",
                }}
            >
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(245,197,24,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(245,197,24,0.04) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* Crimson glow corner */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        bottom: "-5%", left: "-5%",
                        width: "55vw", height: "55vw",
                        background: "radial-gradient(ellipse at center, rgba(255,26,26,0.09) 0%, transparent 65%)",
                        borderRadius: "50%",
                        filter: "blur(40px)",
                    }}
                />
                {/* Gold glow corner */}
                <div
                    className="absolute pointer-events-none"
                    style={{
                        top: "-5%", right: "-5%",
                        width: "45vw", height: "45vw",
                        background: "radial-gradient(ellipse at center, rgba(245,197,24,0.07) 0%, transparent 65%)",
                        borderRadius: "50%",
                        filter: "blur(40px)",
                    }}
                />

                {/* Top bar — logo + close */}
                <div
                    className="relative z-10 flex items-center justify-between px-6 py-5"
                    style={{ borderBottom: "1px solid rgba(245,197,24,0.08)" }}
                >
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3"
                    >
                        <div className="relative w-8 h-8 flex-shrink-0">
                            <Image
                                src="/logo/logo.png"
                                alt="ADS ROVA"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span
                            className="text-[11px] font-700 tracking-[0.24em] uppercase"
                            style={{ color: "#F5C518" }}
                        >
                            ADS ROVA
                        </span>
                    </Link>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center w-9 h-9"
                        style={{
                            border: "1px solid rgba(245,197,24,0.18)",
                            borderRadius: "6px",
                            color: "rgba(255,255,255,0.55)",
                        }}
                        aria-label="Close menu"
                    >
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path
                                d="M1 1l11 11M12 1L1 12"
                                stroke="currentColor"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                {/* Numbered nav links */}
                <nav className="relative z-10 flex-1 flex flex-col justify-center px-6">
                    <ul className="flex flex-col">
                        {NAV_LINKS.map((link, i) => {
                            const active = isActive(link.href);
                            return (
                                <li
                                    key={link.href}
                                    style={{
                                        transitionProperty: "opacity, transform",
                                        transitionDuration: "0.50s",
                                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                                        transitionDelay: menuOpen ? `${60 + i * 45}ms` : "0ms",
                                        opacity: menuOpen ? 1 : 0,
                                        transform: menuOpen ? "translateX(0)" : "translateX(-18px)",
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="group flex items-center gap-5 py-[14px]"
                                        style={{
                                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                                        }}
                                    >
                                        {/* Number badge */}
                                        <span
                                            className="flex-shrink-0 text-[11px] font-600 tabular-nums"
                                            style={{
                                                color: active ? "#FF1A1A" : "rgba(255,255,255,0.18)",
                                                letterSpacing: "0.06em",
                                                width: "22px",
                                            }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        {/* Link label */}
                                        <span
                                            className="text-[2rem] font-700 leading-none tracking-tight flex-1"
                                            style={{
                                                letterSpacing: "-0.02em",
                                                color: active ? "#F5C518" : "rgba(255,255,255,0.82)",
                                                transitionProperty: "color",
                                                transitionDuration: "0.2s",
                                                transitionTimingFunction: "ease",
                                            }}
                                        >
                                            {link.label}
                                        </span>

                                        {/* Arrow (active pages only) */}
                                        <svg
                                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            style={{
                                                color: "#F5C518",
                                                opacity: active ? 1 : 0,
                                                transitionProperty: "opacity, transform",
                                                transitionDuration: "0.2s",
                                                transitionTimingFunction: "ease",
                                                transform: active ? "translateX(0)" : "translateX(-6px)",
                                            }}
                                        >
                                            <path
                                                d="M3 8h10M9 4l4 4-4 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Bottom section — CTA + meta */}
                <div
                    className="relative z-10 px-6 pt-5 pb-8"
                    style={{
                        borderTop: "1px solid rgba(245,197,24,0.08)",
                        transitionProperty: "opacity, transform",
                        transitionDuration: "0.5s",
                        transitionTimingFunction: "ease",
                        transitionDelay: menuOpen ? `${60 + NAV_LINKS.length * 45 + 30}ms` : "0ms",
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? "translateY(0)" : "translateY(8px)",
                    }}
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600"
                            style={{
                                background: "#F5C518",
                                color: "#0F0F12",
                                borderRadius: "6px",
                                letterSpacing: "0.01em",
                            }}
                        >
                            Start a Project
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <path
                                    d="M2 6.5h9M7.5 3L11 6.5 7.5 10"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>

                        {/* WhatsApp icon */}
                        <a
                            href="https://wa.me/94XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10"
                            style={{
                                border: "1px solid rgba(245,197,24,0.15)",
                                borderRadius: "6px",
                                color: "rgba(255,255,255,0.38)",
                            }}
                            aria-label="WhatsApp"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>
                    </div>

                    <p
                        className="mt-4 text-[10px] tracking-[0.22em] uppercase"
                        style={{ color: "rgba(255,255,255,0.18)" }}
                    >
                        ADS ROVA · Nuwara Eliya, Sri Lanka
                    </p>
                </div>
            </div>

            <style>{`
                /* Hover: underline slides in from left */
                .rova-nav-link:hover .rova-nav-underline {
                    transform: scaleX(1) !important;
                }
                /* Hover: text turns gold */
                .rova-nav-link:hover {
                    color: #F5C518 !important;
                }

                /* CTA shimmer effect */
                .rova-cta { transition: box-shadow 0.25s ease, transform 0.25s ease; }
                .rova-cta:hover {
                    box-shadow: 0 6px 32px rgba(245,197,24,0.50) !important;
                    transform: translateY(-1px);
                }
                .rova-cta-shimmer {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%);
                    transform: translateX(-100%);
                    transition: transform 0.5s ease;
                }
                .rova-cta:hover .rova-cta-shimmer {
                    transform: translateX(100%);
                }

                /* Arrow nudge on CTA hover */
                .rova-cta-arrow {
                    transition: transform 0.22s ease;
                }
                .rova-cta:hover .rova-cta-arrow {
                    transform: translateX(3px);
                }

                /* Mobile link hover */
                @media (hover: hover) {
                    .group:hover span:nth-child(2) {
                        color: #F5C518;
                    }
                }
            `}</style>
        </>
    );
}