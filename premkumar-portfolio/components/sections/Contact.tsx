"use client";

import { personalInfo } from "@/data/personal";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // EmailJS configuration
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

            // Check if EmailJS is configured
            if (!serviceId || !templateId || !publicKey) {
                console.warn('EmailJS not configured. Using mailto fallback.');
                // Fallback to mailto
                const mailtoLink = `mailto:${personalInfo.email}?subject=Contact from ${formState.name}&body=${formState.message}%0D%0A%0D%0AFrom: ${formState.email}`;
                window.location.href = mailtoLink;
                setFormState({ name: "", email: "", message: "" });
                setIsSubmitting(false);
                return;
            }

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                    to_email: personalInfo.email,
                },
                publicKey
            );

            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            console.error('Failed to send email:', err);
            setError('Failed to send message. Please try again or email me directly.');
            // Reset error after 5 seconds
            setTimeout(() => setError(""), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact" className="py-8 md:py-10 bg-gray-50 dark:bg-black scroll-mt-16 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-8 max-w-7xl">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get in <span className="text-blue-600 dark:text-blue-500">Touch</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss AI, Web Dev, or Internship opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/20 transition-colors">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors">
                                        <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Me</p>
                                        <p className="text-lg font-semibold">{personalInfo.email}</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                                    <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                                        <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                                        <p className="text-lg font-semibold">{personalInfo.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/20">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Connect on Socials</h4>
                                <div className="flex gap-4">
                                    <a
                                        href={personalInfo.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-100 dark:bg-black rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border dark:border-white/10"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={personalInfo.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all border dark:border-white/5"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href={personalInfo.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-sky-50 dark:bg-sky-900/20 rounded-full flex items-center justify-center text-sky-500 dark:text-sky-400 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-all border dark:border-white/5"
                                    >
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Support My Work</h4>
                                <a
                                    href={personalInfo.social.buyMeACoffee}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-[#FFDD00] text-gray-900 font-bold py-3 rounded-lg hover:shadow-lg transition-shadow border border-[#e3c600]"
                                >
                                    <span className="text-lg">☕</span>
                                    Buy Me a Coffee
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-950 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-white/20 transition-colors">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/30 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/30 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-black text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/30 outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-600"
                                        placeholder="Hello, I'd like to discuss..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${isSubmitted
                                        ? "bg-green-600 text-white cursor-default"
                                        : "bg-blue-600 dark:bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                        } disabled:opacity-70 disabled:cursor-not-allowed`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></div>
                                    ) : isSubmitted ? (
                                        "Message Sent! 🎉"
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>

                                {/* Error Message */}
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm"
                                    >
                                        {error}
                                    </motion.div>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
