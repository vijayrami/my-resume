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

    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
                <Link href="/" onClick={scrollToTop} className="flex items-baseline gap-2">
                    <span className="font-bold text-lg">Vijay Rami</span>
                    <span className="text-sm text-blue-400 transition-opacity duration-500">
                        {roles[roleIndex]}
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