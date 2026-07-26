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
        { label: "Contact", href: "#contact" },
    ];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

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
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
                <Link href="/" onClick={scrollToTop} className="flex items-baseline gap-2">
                    <span className="font-bold text-lg">Vijay Rami</span>
                    <span className="text-sm text-blue-400 min-w-[160px]">
                        {text}
                        <span className="animate-pulse">|</span>
                    </span>
                </Link>
                <ul className="flex gap-6">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="hover:text-blue-400 transition-colors">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}