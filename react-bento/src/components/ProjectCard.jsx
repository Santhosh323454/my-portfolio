import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Globe } from 'lucide-react';

const projects = {
    taskmaster: {
        emoji: 'âœ…',
        icon: <Smartphone size={16} />,
        title: 'Task Master',
        subtitle: 'Productivity Android App',
        description:
            'Full-featured Android productivity app with AI-assisted workflow suggestions and offline-first storage via Hive DB, built entirely in Flutter.',
        tags: ['Flutter', 'Dart', 'Hive DB', 'AI-Assisted'],
        accentColor: '#A78BFF',
        glow: 'rgba(167,139,255,0.14)',
        borderGlow: 'rgba(167,139,255,0.35)',
        tagBg: 'rgba(167,139,255,0.10)',
        tagBorder: 'rgba(167,139,255,0.30)',
        tagColor: '#C5CEFF',
        headerBg: 'rgba(124,138,255,0.08)',
        headerBorder: 'rgba(124,138,255,0.22)',
    },
    smartcontext: {
        emoji: 'ðŸ§ ',
        icon: <Globe size={16} />,
        title: 'Smart Context AI',
        subtitle: 'Chrome Extension',
        description:
            'Chrome Extension using Gemini Vision API to analyse on-screen content, extract context, and deliver AI-powered insights right in the browser.',
        tags: ['JavaScript', 'Gemini Vision', 'Chrome Ext'],
        accentColor: '#7CC4FF',
        glow: 'rgba(124,196,255,0.12)',
        borderGlow: 'rgba(124,196,255,0.35)',
        tagBg: 'rgba(124,196,255,0.08)',
        tagBorder: 'rgba(124,196,255,0.28)',
        tagColor: '#B3DFFF',
        headerBg: 'rgba(60,100,180,0.10)',
        headerBorder: 'rgba(100,160,255,0.20)',
    },
};

export default function ProjectCard({ project, delay = 0 }) {
    const p = projects[project];
    return (
        <motion.div
            className="glass-card p-6 flex flex-col gap-4 h-full relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay }}
        >
            {/* Corner glow blob */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${p.glow}, transparent 70%)` }} />

            {/* Header */}
            <div className="flex items-center gap-3 rounded-2xl p-4 relative z-10"
                style={{ background: p.headerBg, border: `1px solid ${p.headerBorder}` }}>
                <span className="text-2xl">{p.emoji}</span>
                <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-sm leading-tight" style={{ color: '#e2e8f8' }}>{p.title}</h2>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(150,160,190,0.7)' }}>{p.subtitle}</p>
                </div>
                <span style={{ color: p.accentColor }}>{p.icon}</span>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed flex-1 relative z-10" style={{ color: 'rgba(150,160,190,0.8)' }}>
                {p.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 relative z-10">
                {p.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                            background: p.tagBg,
                            border: `1px solid ${p.tagBorder}`,
                            color: p.tagColor,
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Link */}
            <a
                href="https://github.com/Santhosh323454"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold relative z-10 transition-colors"
                style={{ color: p.accentColor }}
            >
                <ExternalLink size={12} /> View on GitHub
            </a>
        </motion.div>
    );
}
