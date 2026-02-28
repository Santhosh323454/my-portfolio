import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiFlutter, SiJavascript, SiSap } from 'react-icons/si';

const topSkills = [
    { name: 'Java', percent: 90, color: '#f89820', icon: <FaJava size={20} /> },
    { name: 'Spring Boot', percent: 85, color: '#6db33f', icon: <SiSpringboot size={20} /> },
    { name: 'MySQL', percent: 80, color: '#00758f', icon: <SiMysql size={20} /> },
    { name: 'Flutter & Dart', percent: 85, color: '#02569B', icon: <SiFlutter size={20} /> },
    { name: 'JavaScript', percent: 75, color: '#f7df1e', icon: <SiJavascript size={20} /> },
    { name: 'HTML & CSS', percent: 95, color: '#e34f26', icon: <FaHtml5 size={20} /> },
    { name: 'ABAP (SAP)', percent: 70, color: '#008bca', icon: <SiSap size={20} /> },
    { name: 'React', percent: 60, color: '#61dafb', icon: <FaReact size={20} /> },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SkillsSection() {
    return (
        <section id="skills" className="section-container relative z-10 bg-white/50 dark:bg-brand-darkcard/50 py-24 rounded-[3rem] shadow-sm border border-brand-border dark:border-brand-darkborder transition-colors">

            <h2 className="section-heading dark:text-white transition-colors">
                My <span className="heading-highlight">Skills</span>
            </h2>
            <p className="section-subheading">
                Technologies and tools I work with to create scalable backend applications and seamless mobile experiences.
            </p>

            <div className="relative w-full overflow-hidden mt-10">
                {/* Left/Right Fade Masks */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white/50 dark:from-brand-darkcard/50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white/50 dark:from-brand-darkcard/50 to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex w-max gap-6 py-4 px-4 hover:[animation-play-state:paused]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {[...topSkills, ...topSkills].map((skill, i) => (
                        <div
                            key={`${skill.name}-${i}`}
                            className="ouali-card p-6 flex flex-col w-64 shrink-0 transition-transform hover:scale-105"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm flex-shrink-0"
                                    style={{ backgroundColor: skill.color }}
                                >
                                    {skill.icon}
                                </div>
                                <p className="font-bold text-brand-dark dark:text-white transition-colors">{skill.name}</p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-bold text-brand-gray uppercase tracking-wider">Proficiency</span>
                                    <span className="text-xs font-bold text-brand-orange">{skill.percent}%</span>
                                </div>

                                <div className="w-full h-1.5 bg-brand-progressbg dark:bg-gray-700 rounded-full overflow-hidden transition-colors">
                                    <div
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: skill.color, width: `${skill.percent}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
