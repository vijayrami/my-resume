import Link from "next/link";

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
    return (
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-sm">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
                <span className="font-bold text-lg">
                    <Link href="/" className="font-bold text-lg">
                        Vijay Rami
                    </Link>
                </span>
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