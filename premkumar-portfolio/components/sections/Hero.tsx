"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/personal";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, GraduationCap, Briefcase, Code2, Terminal, Sparkles, CheckCircle2, Cpu, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const [activeTab, setActiveTab] = useState<"terminal" | "stack">("terminal");
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 530);
        return () => clearInterval(interval);
    }, []);

    const terminalLines = [
        { type: "cmd", text: "$ browsermcp --agent \"automate\"" },
        { type: "out", text: "⚡ Connecting to Playwright browser MCP server..." },
        { type: "out", text: "🌳 A11y Tree: ~80 tokens/step (token-efficient alternative to vision)" },
        { type: "out", text: "🔧 27 MCP tools active: click, type, screenshot, record_flow" },
        { type: "cmd", text: "$ system-diag --skills-stack" },
        { type: "out", text: "🐍 Languages: Python • TypeScript • JavaScript • C++ • C" },
        { type: "out", text: "🤖 AI & Agents: MCP Servers • RAG • Whisper • BART • PyTorch" },
        { type: "out", text: "🌐 Full-Stack: Node.js • Express • PostgreSQL • Prisma • React • Next.js" },
        { type: "out", text: "📡 Hardware: ESP32-CAM • LoRa (SX1278) • RP2350 • CircuitPython" },
        { type: "ready", text: "✓ Ready for Python & AI Developer Roles" },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-24 pb-8 scroll-mt-16 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 w-full lg:w-1/2">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-5 py-2 rounded-full text-sm font-semibold mb-5 border-2 border-green-200 dark:border-green-700/50 shadow-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Open for Python & AI Roles
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight leading-[1.1]"
                        >
                            Hi, I'm <span className="text-blue-600 dark:text-blue-500">Prem Kumar</span>
                        </motion.h1>

                        {/* Role */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-3 leading-tight"
                        >
                            {personalInfo.title}
                        </motion.h2>

                        {/* Tech Tagline */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800/50 mb-4"
                        >
                            <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
                            Creator of BrowseMCP · AI Agents · Full-Stack Systems · Embedded Firmware
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-lg"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Stats Row - Focused on Work & Skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-start gap-8 md:gap-10 mb-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">19+</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Projects</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">27</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">MCP Tools</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">2</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Internships</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">40+</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Skills</div>
                            </div>
                        </motion.div>

                        {/* Info Pills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-2.5 mb-6"
                        >
                            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-white/20 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-black">
                                <MapPin size={15} className="text-blue-600 dark:text-blue-500" />
                                {personalInfo.location}
                            </div>
                            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-white/20 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-black">
                                <GraduationCap size={15} className="text-blue-600 dark:text-blue-500" />
                                B.E. in AI & ML (Graduated)
                            </div>
                            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-white/20 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-black">
                                <Briefcase size={15} className="text-blue-600 dark:text-blue-500" />
                                SAP Lab & Netpy Alum
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-4 mb-6"
                        >
                            <a href="#projects" className="px-8 py-3.5 bg-blue-600 dark:bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 hover:-translate-y-0.5">
                                <Code2 size={20} />
                                Explore My Work →
                            </a>
                            <a href="#contact" className="px-8 py-3.5 bg-white dark:bg-transparent text-blue-600 dark:text-blue-500 font-bold rounded-full border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all hover:-translate-y-0.5">
                                Let's Connect
                            </a>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-6"
                        >
                            {[
                                { name: "GitHub", icon: Github, href: personalInfo.social.github },
                                { name: "LinkedIn", icon: Linkedin, href: personalInfo.social.linkedin },
                                { name: "Twitter", icon: Twitter, href: personalInfo.social.twitter },
                                { name: "Instagram", icon: Instagram, href: personalInfo.social.instagram },
                                { name: "Email", icon: Mail, href: `mailto:${personalInfo.email}` },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit Prem Kumar's ${social.name}`}
                                    className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Interactive AI Terminal Console */}
                    <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                        {/* Ambient Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-500/10 dark:bg-blue-600/15 rounded-3xl blur-3xl -z-10 pointer-events-none"></div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-lg bg-zinc-950 text-zinc-100 rounded-2xl shadow-2xl border border-zinc-800/80 overflow-hidden font-mono text-xs md:text-sm flex flex-col"
                        >
                            {/* Window Topbar */}
                            <div className="bg-zinc-900/90 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                                    <span className="text-zinc-400 text-xs ml-2 font-medium flex items-center gap-1.5">
                                        <Terminal size={14} className="text-blue-400" />
                                        agent@premkumar:~/browsermcp
                                    </span>
                                </div>
                                <div className="flex gap-1.5">
                                    <button
                                        onClick={() => setActiveTab("terminal")}
                                        className={`px-2.5 py-1 rounded text-xs transition-colors ${activeTab === "terminal" ? "bg-zinc-800 text-blue-400 font-bold" : "text-zinc-500 hover:text-zinc-300"}`}
                                    >
                                        Terminal
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("stack")}
                                        className={`px-2.5 py-1 rounded text-xs transition-colors ${activeTab === "stack" ? "bg-zinc-800 text-blue-400 font-bold" : "text-zinc-500 hover:text-zinc-300"}`}
                                    >
                                        Core Stack
                                    </button>
                                </div>
                            </div>

                            {/* Window Body */}
                            <div className="p-5 space-y-2.5 min-h-[300px] max-h-[360px] overflow-y-auto">
                                {activeTab === "terminal" ? (
                                    <>
                                        {terminalLines.map((line, idx) => (
                                            <div key={idx} className="leading-relaxed">
                                                {line.type === "cmd" && (
                                                    <div className="text-blue-400 font-semibold">{line.text}</div>
                                                )}
                                                {line.type === "out" && (
                                                    <div className="text-zinc-300 text-xs pl-2 border-l border-zinc-800">{line.text}</div>
                                                )}
                                                {line.type === "ready" && (
                                                    <div className="text-emerald-400 text-xs font-semibold pl-2 flex items-center gap-1 mt-1">
                                                        <CheckCircle2 size={13} />
                                                        {line.text}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                        <div className="flex items-center text-zinc-500 text-xs pt-1">
                                            <span>agent@premkumar:~$</span>
                                            <span className={`inline-block w-2 h-4 bg-blue-400 ml-1.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-3 text-xs">
                                        <div className="text-blue-400 font-bold flex items-center gap-1.5 text-sm">
                                            <Layers size={16} />
                                            Engineering Architectures
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-zinc-300">
                                            <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800">
                                                <div className="text-zinc-500 text-[10px]">AI AGENT MCP</div>
                                                <div className="text-base font-bold text-white">BrowseMCP</div>
                                                <div className="text-emerald-400 text-[10px]">Playwright · 27 Tools</div>
                                            </div>
                                            <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800">
                                                <div className="text-zinc-500 text-[10px]">LOCAL-FIRST AI</div>
                                                <div className="text-base font-bold text-white">Meeting Assistant</div>
                                                <div className="text-blue-400 text-[10px]">Whisper + BART + spaCy</div>
                                            </div>
                                            <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800">
                                                <div className="text-zinc-500 text-[10px]">EMBEDDED HARDWARE</div>
                                                <div className="text-base font-bold text-white">RetroCam & LoRa</div>
                                                <div className="text-purple-400 text-[10px]">ESP32-CAM · C++ · Pico W</div>
                                            </div>
                                            <div className="bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800">
                                                <div className="text-zinc-500 text-[10px]">FULL-STACK PLATFORMS</div>
                                                <div className="text-base font-bold text-white">M2i-LMS & Epic-Drive</div>
                                                <div className="text-amber-400 text-[10px]">Node · Prisma · PostgreSQL</div>
                                            </div>
                                        </div>
                                        <div className="text-zinc-400 text-[11px] italic bg-zinc-900/40 p-2 rounded border border-zinc-800/50">
                                            "Building robust systems across AI agents, full-stack web architectures, and embedded IoT firmware."
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Window Footer */}
                            <div className="bg-zinc-900/60 border-t border-zinc-800 px-4 py-2 flex items-center justify-between text-[11px] text-zinc-400">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    BrowseMCP • Whisper • ESP32 • Node.js
                                </span>
                                <span className="text-zinc-500">19+ Projects Shipped</span>
                            </div>
                        </motion.div>

                        {/* Floating Tech Badges */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="hidden sm:flex absolute -bottom-3 -left-4 bg-white dark:bg-zinc-900 p-3 pr-4 rounded-xl shadow-xl border border-gray-200 dark:border-white/20 items-center gap-2.5"
                        >
                            <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Sparkles size={16} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-900 dark:text-white leading-tight">BrowseMCP Creator</div>
                                <div className="text-[10px] text-gray-500 dark:text-gray-400">Playwright AI Automation</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.9, type: "spring" }}
                            className="hidden sm:flex absolute -top-3 -right-3 bg-white dark:bg-zinc-900 p-2.5 px-3.5 rounded-xl shadow-xl border border-gray-200 dark:border-white/20 items-center gap-2"
                        >
                            <Cpu size={16} className="text-blue-500" />
                            <div className="text-xs font-bold text-gray-900 dark:text-white">
                                Python & AI <span className="text-blue-600 dark:text-blue-400 font-normal">Developer</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
