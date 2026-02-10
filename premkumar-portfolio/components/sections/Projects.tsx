"use client";

import { useState } from "react";
import { projects, CategoryType } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories: (CategoryType | 'All')[] = ['All', 'Web App', 'AI/ML', 'Mobile', 'Hackathon', 'Academic', 'Tool', 'Hardware'];

const INITIAL_SHOW_COUNT = 6;

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category.includes(selectedCategory));

    const featuredProjects = projects.filter(p => p.featured);

    // Show limited projects unless "View All" is toggled
    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_SHOW_COUNT);
    const hasMore = filteredProjects.length > INITIAL_SHOW_COUNT;

    return (
        <section id="projects" className="py-8 md:py-10 bg-white dark:bg-black scroll-mt-16 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured <span className="text-blue-600 dark:text-blue-500">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        A curated selection of my work — from AI-powered applications to full-stack platforms
                    </p>
                </motion.div>

                {/* Featured Projects - Highlighted */}
                <div className="mb-10">
                    <motion.h3
                        className="text-xl font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-8 flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-lg">⭐</span>
                        Highlighted Work
                        <span className="flex-1 h-px bg-gray-100 dark:bg-white/10 ml-2"></span>
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="flex-1 h-px bg-gray-100 dark:bg-white/10"></span>
                    <span className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">All Projects</span>
                    <span className="flex-1 h-px bg-gray-100 dark:bg-white/10"></span>
                </div>

                {/* Category Filter */}
                <motion.div
                    className="flex flex-wrap gap-2 justify-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => {
                        const count = category === 'All'
                            ? projects.length
                            : projects.filter(p => p.category.includes(category as CategoryType)).length;

                        // Don't show categories with 0 projects
                        if (count === 0 && category !== 'All') return null;

                        return (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setShowAll(false); // Reset view when switching category
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${selectedCategory === category
                                    ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                                    : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/20 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                                    }`}
                            >
                                {category}
                                <span className={`ml-1.5 text-xs ${selectedCategory === category ? "opacity-60" : "opacity-40"}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* View All / View Less Toggle */}
                {hasMore && (
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-zinc-900 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp size={16} />
                                </>
                            ) : (
                                <>
                                    View All {filteredProjects.length} Projects <ChevronDown size={16} />
                                </>
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
