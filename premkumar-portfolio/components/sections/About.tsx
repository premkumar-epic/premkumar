"use client";

import { skills, skillCategories } from "@/data/skills";
import { motion } from "framer-motion";
import { Download, GraduationCap } from "lucide-react";

// Use exported categories
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
                                        I'm a final-year AI/ML student and Full-Stack Developer driven by a passion for building scalable, intelligent applications.
                                        My journey involves merging cutting-edge AI technologies with modern web development to create impactful solutions.
                                    </p>
                                    <p className="mb-4">
                                        Currently, I'm gaining hands-on industry experience through internships at <span className="font-semibold text-gray-900 dark:text-white">SAP Lab India</span> and <span className="font-semibold text-gray-900 dark:text-white">Netpy</span>,
                                        working on real-world problems.
                                    </p>
                                    <p>
                                        When I'm not coding, you can find me exploring new AI trends, participating in hackathons, or building hardware projects.
                                    </p>
                                </div>

                                <a
                                    href="/resume.pdf"
                                    download="PremKumar_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                                >
                                    <Download size={18} />
                                    Download Resume
                                </a>
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
                                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">B.E. in AI & Machine Learning</h4>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">SEA College of Engineering & Technology</p>
                                        </div>
                                        <span className="bg-white dark:bg-zinc-900 px-3 py-1 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-white/5 self-start">
                                            2022 - 2026
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                        Bangalore, India
                                    </p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-2 border-blue-200 dark:border-blue-800 pl-3">
                                        "Focusing on Deep Learning, Computer Vision, and scalable Web Architectures."
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
                                            <div className="flex flex-wrap gap-3">
                                                {categorySkills.map((skill, index) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: index * 0.02 }}
                                                        className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-white/20 px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-default group"
                                                    >
                                                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
