"use client";

import { skills, skillCategories } from "@/data/skills";
import { personalInfo } from "@/data/personal";
import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";

const categories = skillCategories;

export default function About() {
    return (
        <section id="about" className="py-8 md:py-10 bg-white dark:bg-black scroll-mt-16 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: About Me & Education (5 cols) */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* About Me */}
                            <div className="mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    About <span className="text-blue-600 dark:text-blue-500">Me</span>
                                </h2>
                                <div className="prose text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    <p className="mb-4">
                                        I'm an AI/ML engineering graduate who builds practical tools in Python, TypeScript, and embedded systems. I'm the creator of <span className="font-semibold text-gray-900 dark:text-white">BrowseMCP</span>, an open-source MCP browser automation tool that gives AI agents token-efficient web control via Playwright.
                                    </p>
                                    <p className="mb-4">
                                        My engineering work ranges from building local-first AI pipelines (transcription, recursive summarization, and NER task extraction) to scalable web applications using Node.js, PostgreSQL, and Prisma, as well as embedded C++ firmware for custom cameras and LoRa agriculture networks.
                                    </p>
                                    <p>
                                        I have completed technical internships at <span className="font-semibold text-gray-900 dark:text-white">SAP Lab India</span> and <span className="font-semibold text-gray-900 dark:text-white">Netpy</span>, working on enterprise technologies, cloud workflows, and production systems.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4 items-center">
                                    <a
                                        href="/resume.pdf"
                                        download="PremKumar_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Download Prem Kumar's PDF Resume"
                                        className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                    >
                                        <Download size={18} />
                                        Download PDF Resume
                                    </a>
                                    <a
                                        href="/resume.docx"
                                        download="PremKumar_Resume.docx"
                                        aria-label="Download Prem Kumar's Word Resume"
                                        className="inline-flex items-center gap-2 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-gray-200 px-5 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors shadow-sm"
                                    >
                                        Word (.docx)
                                    </a>
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <GraduationCap className="text-blue-600 dark:text-blue-400" />
                                    Education
                                </h3>

                                <div className="bg-gray-50 dark:bg-zinc-950 p-6 rounded-2xl border border-gray-100 dark:border-white/20 hover:border-blue-100 dark:hover:border-blue-900/50 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">B.E. in Artificial Intelligence & Machine Learning</h4>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">SEA College of Engineering & Technology, Bangalore</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Affiliated with Visvesvaraya Technological University (VTU)</p>
                                        </div>
                                        <div className="flex flex-col gap-1 sm:items-end">
                                            <span className="bg-white dark:bg-zinc-900 px-3 py-1 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-white/5 whitespace-nowrap">
                                                Graduated July 2026
                                            </span>
                                            <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap">
                                                First Class with Distinction (73.91%)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                                        <span className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-2 py-0.5 rounded font-medium">CGPA: 7.39 / 10.00</span>
                                        <span className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-2 py-0.5 rounded font-medium">Senior Year GPA: 8.65</span>
                                        <span className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-2 py-0.5 rounded font-medium">Capstone Project: 196/200</span>
                                        <span className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 px-2 py-0.5 rounded font-medium">GenAI Lab: 100/100</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-2 border-blue-200 dark:border-blue-800 pl-3 mt-4">
                                        "Specialized in AI Agents, Model Context Protocol (MCP), Scalable Full-Stack Web Architectures, and Embedded Systems."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Skills (7 cols) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                                Technical <span className="text-blue-600 dark:text-blue-500">Arsenal</span>
                            </h3>

                            <div className="space-y-8">
                                {categories.map((category) => {
                                    const categorySkills = skills.filter(s => s.category === category);
                                    if (categorySkills.length === 0) return null;

                                    return (
                                        <div key={category}>
                                            <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2.5">
                                                {categorySkills.map((skill, index) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.02 }}
                                                        className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/20 px-3.5 py-1.5 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-default group"
                                                    >
                                                        <span className="font-medium text-xs md:text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {skill.name}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
