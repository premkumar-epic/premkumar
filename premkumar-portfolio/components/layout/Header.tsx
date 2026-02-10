"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            const sections = ["home", "about", "projects", "experience", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    if (!mounted) return null;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity group">
                    <span className="text-blue-600 dark:text-blue-500 text-3xl font-bold leading-none">&lt;</span>
                    <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        PK
                    </span>
                    <span className="text-blue-600 dark:text-blue-500 text-3xl font-bold leading-none">/&gt;</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors duration-300 relative ${activeSection === item.href.substring(1)
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}

                    <div className="flex items-center gap-4 ml-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a
                            href="#contact"
                            className="bg-blue-600 dark:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Get in Touch
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-900 dark:text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 overflow-hidden shadow-xl"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors ${activeSection === item.href.substring(1)
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 dark:text-gray-400"
                                        }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-blue-600 dark:bg-blue-600 text-white px-5 py-3 rounded-full text-center font-bold mt-4"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
