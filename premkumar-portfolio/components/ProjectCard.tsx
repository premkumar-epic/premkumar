"use client";

import { Project, CategoryType } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const getCategoryColor = (category: CategoryType) => {
        const colors: Record<CategoryType, string> = {
            "Web App": "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800/50",
            "AI/ML": "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800/50",
            "Mobile": "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800/50",
            "Hackathon": "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-orange-200 dark:border-orange-800/50",
            "Academic": "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400 border-pink-200 dark:border-pink-800/50",
            "Tool": "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/50",
            "Hardware": "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800/50"
        };
        return colors[category] || "bg-gray-50 text-gray-600 dark:bg-zinc-800 dark:text-gray-400 border-gray-200 dark:border-zinc-700";
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white dark:bg-zinc-950 rounded-2xl p-6 border-2 border-gray-200 dark:border-white/30 hover:border-blue-400 dark:hover:border-blue-500 flex flex-col h-full transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
        >
            {/* Featured indicator */}
            {project.featured && (
                <span className="absolute top-4 right-4 text-lg filter grayscale group-hover:grayscale-0 transition-all duration-300" title="Featured Project">
                    ⭐
                </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 pr-8">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                    <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors border border-gray-200 dark:border-white/10"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Footer: Categories + Links */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-gray-100 dark:border-white/10">
                {/* Primary category badge */}
                <div className="flex gap-1.5">
                    {project.category.slice(0, 2).map((cat) => (
                        <span
                            key={cat}
                            className={`text-xs px-2.5 py-1 rounded-full font-medium border ${getCategoryColor(cat)}`}
                        >
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                            title="View Source Code"
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            title="Live Demo"
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                    {!project.github && !project.demo && (
                        <span className="text-xs text-gray-300 dark:text-gray-600 italic">Coming soon</span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
