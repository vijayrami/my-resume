"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const roles = [
    "Backend Developer",
    "Full Stack Developer",
    "Magento Developer",
    "Magento Expert",
    "Magento Professional",
    "Magento Master",
];

export default function Header() {
    const navItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Certifications", href: "#certifications" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "#contact" },
    ];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.slice(0, text.length + 1));
                if (text.length + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setText(currentRole.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    return (
            <header className="sticky top-0 z-50 bg-gray-900/95 text-white shadow-sm backdrop-blur-sm">
                <nav
                    className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6"
                    aria-label="Main navigation"
                >
                    <Link
                        href="/"
                        onClick={scrollToTop}
                        className="flex min-w-0 flex-col"
                    >
                        <span className="text-lg font-bold">Vijay Rami</span>
                        <span className="text-xs text-blue-400 sm:text-sm">
                            {text}
                            <span className="animate-pulse">|</span>
                        </span>
                    </Link>

                    <button
                        type="button"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-xl hover:bg-white/10 md:hidden"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        {isMenuOpen ? "×" : "☰"}
                    </button>

                    <ul
                        id="primary-navigation"
                        className={`${isMenuOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-white/10 pt-3 md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:pt-0`}
                    >
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-md px-3 py-3 text-sm transition-colors hover:bg-white/10 hover:text-blue-400 md:px-0 md:py-2"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        );
}