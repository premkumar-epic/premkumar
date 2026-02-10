"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-8 md:py-10 bg-gray-50 dark:bg-black scroll-mt-16 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Professional <span className="text-blue-600 dark:text-blue-500">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My journey in the tech industry, from internships to leadership roles
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-blue-100 dark:bg-blue-900/30 rounded-full"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-black shadow-md z-10"></div>

                            {/* Content Card */}
                            <div className="flex-1 ml-6 md:ml-0">
                                <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-white/20 relative hover:-translate-y-1">
                                    {/* Arrow for desktop */}
                                    <div
                                        className={`hidden md:block absolute top-6 w-4 h-4 bg-white dark:bg-zinc-950 transform rotate-45 border-l border-b border-gray-100 dark:border-white/20 ${index % 2 === 0
                                            ? "-left-2 border-r-0 border-t-0"
                                            : "-right-2 border-l-0 border-b-0 rotate-[225deg]"
                                            }`}
                                    ></div>

                                    <div className="flex flex-col gap-2 mb-4">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                            {exp.current && (
                                                <span className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs px-3 py-1 rounded-full font-medium">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-blue-600 dark:text-blue-400 font-medium text-lg">{exp.company}</div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {exp.startDate} - {exp.endDate}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Briefcase size={14} />
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                                    {/* Responsibilities */}
                                    <ul className="list-disc list-outside ml-4 space-y-1 text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    {exp.technologies && (
                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/20">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-md border dark:border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Empty Space for Grid */}
                            <div className="flex-1 hidden md:block"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
