import { motion } from 'framer-motion';
import { Github, Code2, Star, GitFork } from 'lucide-react';

const links = [
    {
        href: 'https://github.com/Santhosh323454',
        label: 'GitHub',
        handle: '@Santhosh323454',
        description: 'Repositories & contributions',
        iconBg: 'linear-gradient(135deg, #1C1C2E, #2D2D44)',
        iconBorder: 'rgba(124,138,255,0.35)',
        iconGlow: 'rgba(124,138,255,0.4)',
        icon: <Github size={20} style={{ color: '#C5CEFF' }} />,
        hoverColor: '#A78BFF',
        sub: [
            { icon: <Star size={11} style={{ color: '#E8C84A' }} />, text: 'Projects' },
            { icon: <GitFork size={11} style={{ color: '#A78BFF' }} />, text: 'Open Source' },
        ],
    },
    {
        href: 'https://leetcode.com/santhosh_323',
        label: 'LeetCode',
        handle: '@santhosh_323',
        description: 'DSA problem solving & contests',
        iconBg: 'linear-gradient(135deg, #2A1D0A, #433010)',
        iconBorder: 'rgba(232,200,74,0.35)',
        iconGlow: 'rgba(232,200,74,0.4)',
        icon: <Code2 size={20} style={{ color: '#E8C84A' }} />,
        hoverColor: '#E8C84A',
        sub: [
            { icon: <Star size={11} style={{ color: '#E8C84A' }} />, text: 'Problems Solved' },
            { icon: <Code2 size={11} style={{ color: '#E8A84A' }} />, text: 'Algorithms' },
        ],
    },
];

export default function ContactCard({ delay = 0 }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map((l, i) => (
                <motion.a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card p-5 flex flex-col gap-3 no-underline group cursor-pointer relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: delay + i * 0.09 }}
                    onMouseEnter={e => e.currentTarget.style.border = `1px solid ${l.iconBorder}`}
                    onMouseLeave={e => e.currentTarget.style.border = '1px solid rgba(124,138,255,0.22)'}
                >
                    {/* glow */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle, ${l.iconGlow}40, transparent 70%)` }} />

                    <div className="flex items-center justify-between relative z-10">
                        <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                            style={{
                                background: l.iconBg,
                                border: `1px solid ${l.iconBorder}`,
                                boxShadow: `0 0 12px ${l.iconGlow}40`,
                            }}>
                            {l.icon}
                        </div>
                        <span className="text-xs font-medium" style={{ color: 'rgba(150,160,190,0.6)' }}>{l.handle}</span>
                    </div>

                    <div className="relative z-10">
                        <p className="font-bold text-sm transition-colors duration-200" style={{ color: '#e2e8f8' }}>
                            {l.label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(150,160,190,0.6)' }}>{l.description}</p>
                    </div>

                    <div className="flex gap-3 mt-auto relative z-10">
                        {l.sub.map(s => (
                            <span key={s.text} className="flex items-center gap-1 text-xs font-medium" style={{ color: 'rgba(150,160,190,0.65)' }}>
                                {s.icon} {s.text}
                            </span>
                        ))}
                    </div>
                </motion.a>
            ))}
        </div>
    );
}
