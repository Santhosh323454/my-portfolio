import { motion } from 'framer-motion';

const skills = [
    { label: 'Java', emoji: 'â˜•' },
    { label: 'Spring Boot', emoji: 'ðŸŒ±' },
    { label: 'MySQL', emoji: 'ðŸ—„ï¸' },
    { label: 'ABAP / SAP', emoji: 'ðŸ¢' },
    { label: 'Flutter', emoji: 'ðŸ¦‹' },
    { label: 'JavaScript', emoji: 'âš¡' },
    { label: 'Dart', emoji: 'ðŸŽ¯' },
    { label: 'REST APIs', emoji: 'ðŸ”—' },
    { label: 'HTML & CSS', emoji: 'ðŸŒ' },
    { label: 'Git', emoji: 'ðŸ”€' },
];

const track = [...skills, ...skills, ...skills];

export default function SkillsMarquee({ delay = 0 }) {
    return (
        <motion.div
            className="glass-card py-5 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
        >
            <p className="section-label px-6">âš¡ Skills &amp; Tech Stack</p>
            <div className="overflow-hidden w-full flex relative">
                <motion.div
                    className="flex whitespace-nowrap min-w-max"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {track.map((skill, i) => (
                        <span key={i} className="neon-pill mx-2 shrink-0">
                            <span role="img" aria-label={skill.label}>{skill.emoji}</span>
                            {skill.label}
                        </span>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
