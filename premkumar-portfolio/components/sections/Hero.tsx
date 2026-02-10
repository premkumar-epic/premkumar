"use client";

import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-24 pb-8 scroll-mt-16 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 w-full md:w-1/2">
                        {/* Status Badge - GREEN DOT */}
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
                            Available for Opportunities
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
                            className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4 leading-tight"
                        >
                            {personalInfo.title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-lg"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-start gap-10 mb-6"
                        >
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">12+</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Projects</div>
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

                        {/* Info Pills - INCREASED BORDER VISIBILITY */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-3 mb-6"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-black">
                                <MapPin size={16} className="text-blue-600 dark:text-blue-500" />
                                {personalInfo.location}
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-black">
                                <GraduationCap size={16} className="text-blue-600 dark:text-blue-500" />
                                Graduating {personalInfo.graduation}
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-black">
                                <Briefcase size={16} className="text-blue-600 dark:text-blue-500" />
                                SAP Lab & Netpy
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
                                { icon: Github, href: personalInfo.social.github },
                                { icon: Linkedin, href: personalInfo.social.linkedin },
                                { icon: Twitter, href: personalInfo.social.twitter },
                                { icon: Instagram, href: personalInfo.social.instagram },
                                { icon: Mail, href: `mailto:${personalInfo.email}` },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                                >
                                    <social.icon size={24} />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Circular Image */}
                    <div className="flex-1 w-full md:w-1/2 flex justify-center md:justify-end relative">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-10"></div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-64 h-64 md:w-[350px] md:h-[350px] rounded-full border-8 border-white dark:border-zinc-900 shadow-2xl overflow-hidden"
                        >
                            <Image
                                src="/images/profile.jpg"
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>

                        {/* Floating Badge (3+ Years Coding) - MOVED OUTSIDE */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="absolute -bottom-2 -right-2 md:bottom-0 md:-right-8 bg-white dark:bg-black p-4 pr-6 rounded-full shadow-xl border-2 border-gray-200 dark:border-white/20 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-500">
                                <Code2 size={20} />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-gray-900 dark:text-white leading-none">3+</div>
                                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Years Coding</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
