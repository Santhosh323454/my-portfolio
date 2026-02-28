import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import '../index.css';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Portfolio() {
    const handleMessageSent = () => {
        window.dispatchEvent(new Event('contactMessageSent'));
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <>
            <NavBar />

            <motion.main
                className="w-full overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Section 1: Hero */}
                <motion.div variants={itemVariants}><HeroSection /></motion.div>

                {/* Section 2: About & Stats */}
                <motion.div variants={itemVariants}><AboutSection /></motion.div>

                {/* Section 3: Skills Progress Bars */}
                <motion.div variants={itemVariants} className="px-4 md:px-12 lg:px-20 mt-12 mb-20 animate-float scale-95 origin-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <SkillsSection />
                    </div>
                </motion.div>

                {/* Section 4: Experience & Certifications (Newly Added) */}
                <motion.div variants={itemVariants}><ExperienceSection /></motion.div>

                {/* Section 5: Projects Grid */}
                <motion.div variants={itemVariants} className="mt-8">
                    <ProjectsSection />
                </motion.div>

                {/* Section 6: Contact Footer */}
                <motion.div variants={itemVariants}><ContactSection onMessageSent={handleMessageSent} /></motion.div>
            </motion.main>

            {/* Simple Footer Text */}
            <footer className="w-full py-8 relative flex items-center justify-center text-center text-brand-gray text-sm border-t border-orange-100 dark:border-orange-900/50 bg-white/50 backdrop-blur-md dark:bg-brand-darkcard/50 mt-[-2rem] z-20 transition-colors">
                <p>&copy; {new Date().getFullYear()} Santhosh S. All rights reserved.</p>
                <Link
                    to="/login"
                    className="absolute right-6 lg:right-12 w-8 h-8 flex items-center justify-center rounded-xl text-gray-400 dark:text-gray-500 hover:bg-orange-100 hover:text-orange-600 dark:hover:bg-orange-900/40 dark:hover:text-orange-400 opacity-0 md:opacity-20 hover:opacity-100 transition-all duration-500"
                    title="Admin Portal"
                >
                    <Settings size={16} />
                </Link>
            </footer>
        </>
    );
}
