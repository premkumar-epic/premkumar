"use client";

import { Github, Linkedin, Twitter, Instagram, Mail, Coffee } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-8 md:py-10 border-t border-gray-800 dark:border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Prem Kumar. V</h3>
                        <p className="text-gray-400 text-sm">
                            AI/ML Student & Full Stack Developer passionate about building
                            intelligent solutions with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-white">Connect</h3>
                        <div className="flex space-x-4">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={personalInfo.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href={personalInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                            >
                                <Mail size={20} />
                            </a>
                            <a
                                href={personalInfo.social.buyMeACoffee}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                            >
                                <Coffee size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 dark:border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>© {currentYear} Prem Kumar. V. All rights reserved.</p>
                    <p className="mt-2 text-sm text-gray-500">
                        Built with love <span className="text-red-500">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
