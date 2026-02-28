import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const schools = [
    {
        icon: <GraduationCap size={16} />,
        iconColor: '#A78BFF',
        name: 'K S Rangasamy College of Technology',
        degree: 'B.Tech â€” Information Technology',
        score: 'CGPA: 7.48',
        scoreGlow: 'rgba(167,139,255,0.5)',
        scoreColor: '#A78BFF',
        scoreBg: 'rgba(167,139,255,0.15)',
        scoreBorder: 'rgba(167,139,255,0.35)',
        glowColor: 'rgba(124,138,255,0.12)',
    },
    {
        icon: <Award size={16} />,
        iconColor: '#E8C84A',
        name: 'ST. Michael Hr. Sec. School',
        degree: 'Higher Secondary Education',
        score: '76.6%',
        scoreGlow: 'rgba(232,200,74,0.5)',
        scoreColor: '#E8C84A',
        scoreBg: 'rgba(232,200,74,0.12)',
        scoreBorder: 'rgba(232,200,74,0.35)',
        glowColor: 'rgba(232,200,74,0.08)',
    },
];

export default function EducationCard() {
    return (
        <div className="flex flex-col gap-4 h-full">
            {schools.map((s, i) => (
                <motion.div
                    key={s.name}
                    className="glass-card p-5 flex flex-col gap-3 flex-1 relative overflow-hidden"
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 + i * 0.12 }}
                >
                    {/* glow blob */}
                    <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${s.glowColor}, transparent 70%)` }} />

                    <div className="flex items-start gap-3 relative z-10">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                                background: `rgba(${s.iconColor === '#A78BFF' ? '124,138,255' : '232,200,74'},0.12)`,
                                border: `1px solid ${s.scoreBorder}`,
                                color: s.iconColor,
                                boxShadow: `0 0 10px ${s.glowColor}`,
                            }}>
                            {s.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm leading-tight" style={{ color: '#e2e8f8' }}>{s.name}</p>
                            <p className="text-xs mt-0.5" style={{ color: 'rgba(150,160,190,0.7)' }}>{s.degree}</p>
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full"
                            style={{
                                color: s.scoreColor,
                                background: s.scoreBg,
                                border: `1px solid ${s.scoreBorder}`,
                                boxShadow: `0 0 10px ${s.scoreGlow}30`,
                            }}>
                            {s.score}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
